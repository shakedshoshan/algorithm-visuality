import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Custom hook for setInterval with React Hooks
const useInterval = (callback: () => void, delay: number | null) => {
  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(callback, delay)
      return () => clearInterval(id)
    }
  }, [callback, delay])
}

interface Node {
  value: number;
  next: Node | null;
}

interface SortTask {
  start: Node | null;
  end: Node | null;
}

export function QuickSortLL() {
  const [head, setHead] = useState<Node | null>(null)
  const [sorting, setSorting] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [pivot, setPivot] = useState<Node | null>(null)
  const [sortStack, setSortStack] = useState<SortTask[]>([])
  const [animationSpeed, setAnimationSpeed] = useState(200)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [elapsedTime, setElapsedTime] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [activeSublist, setActiveSublist] = useState<{ start: Node | null; end: Node | null } | null>(null)

  // Generate random linked list
  const generateLinkedList = useCallback(() => {
    let newHead: Node | null = null
    let currentNode: Node | null = null
    for (let i = 0; i < 15; i++) {
      const newNode: Node = { value: Math.floor(Math.random() * 100) + 1, next: null }
      if (!newHead) {
        newHead = newNode
        currentNode = newNode
      } else if (currentNode) {
        currentNode.next = newNode
        currentNode = newNode
      }
    }
    setHead(newHead)
    setCompleted(false)
    setSorting(false)
    setPivot(null)
    setSortStack([])
    setElapsedTime(null)
    setError(null)
    setActiveSublist(null)
  }, [])

  useEffect(() => {
    generateLinkedList()
  }, [generateLinkedList])

  const getTail = (node: Node | null): Node | null => {
    while (node && node.next) {
      node = node.next
    }
    return node
  }

  const partition = useCallback((start: Node | null, end: Node | null): Node | null => {
    if (!start || start === end) return start

    let pivot = start
    let prev = start
    let current = start.next

    while (current !== end?.next) {
      if (current!.value < pivot.value) {
        prev = prev!.next!
        const temp = prev.value
        prev.value = current!.value
        current!.value = temp
      }
      current = current!.next
    }

    const temp = pivot.value
    pivot.value = prev.value
    prev.value = temp

    return prev
  }, [])

  const quickSort = useCallback((start: Node | null, end: Node | null) => {
    if (!start || start === end) return

    const pivot = partition(start, end)
    if (!pivot) return

    setActiveSublist({ start, end })
    setPivot(pivot)

    if (start !== pivot) {
      setSortStack(prev => [...prev, { start, end: pivot }])
    }

    if (pivot.next !== end && pivot.next) {
      setSortStack(prev => [...prev, { start: pivot.next, end }])
    }
  }, [partition])

  const quickSortStep = useCallback(() => {
    if (sortStack.length === 0) {
      setSorting(false)
      setCompleted(true)
      setElapsedTime((Date.now() - (startTime ?? 0)) / 1000)
      return
    }

    const { start, end } = sortStack[0]
    quickSort(start, end)

    setSortStack(prev => prev.slice(1))
  }, [quickSort, sortStack, startTime])

  useInterval(
    () => {
      quickSortStep()
    },
    sorting ? animationSpeed : null
  )

  const startSort = () => {
    if (!head) return
    setSorting(true)
    setCompleted(false)
    setSortStack([{ start: head, end: getTail(head) }])
    setStartTime(Date.now())
    setElapsedTime(null)
    setError(null)
    setPivot(null)
    setActiveSublist(null)
  }

  const stopSort = () => {
    setSorting(false)
    setError("Sorting was interrupted. The algorithm did not finish running.")
    setElapsedTime((Date.now() - (startTime ?? 0)) / 1000)
  }

  const renderLinkedList = () => {
    const nodes: JSX.Element[] = []
    let node = head
    while (node) {
      nodes.push(
        <div key={node.value + Math.random()} className="flex items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
            node === pivot ? "border-yellow-500 bg-yellow-100 text-black" :
            node === activeSublist?.start ? "border-red-500 bg-red-100 text-black" :
            node === activeSublist?.end ? "border-purple-500 bg-purple-100 text-black" :
            "border-gray-300 bg-muted"
          }`}>
            {node.value}
          </div>
          {node.next && <div className="w-4 h-1 bg-gray-400 mx-1" />}
        </div>
      )
      node = node.next
    }
    return <div className="flex flex-wrap gap-2 justify-center">{nodes}</div>
  }

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="font-bold text-2xl">Quick Sort Algorithm Visualizer (Linked List)</CardTitle>
        <div className="text-sm font-normal">
          <p><strong>Time Complexity: O(n log n) average, O(n<sup>2</sup>) worst case</strong></p>
        </div>
        <CardDescription>Quick sort on a linked list uses the divide-and-conquer strategy. It selects a pivot element and partitions the list around the pivot, recursively sorting the sublists.</CardDescription>
      </CardHeader>
      <div className="flex items-center justify-center font-semibold">
        <span className="">Elapsed Time: </span>
        <span className="text-sm font-normal">{elapsedTime !== null ? ` ${elapsedTime.toFixed(2)} sec` : "  You didn't start the sorting yet"}</span>
      </div>
      {error && <div className="text-red-500 text-center">{error}</div>}
      <CardContent>
        {renderLinkedList()}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={generateLinkedList} disabled={sorting}>
          Generate New Linked List
        </Button>
        <div className="flex items-center">
          <label htmlFor="animationSpeed" className="mr-2">Animation Speed:</label>
          <input
            type="range"
            id="animationSpeed"
            min="50"
            max="2000"
            step="50"
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(Number(e.target.value))}
            disabled={sorting}
          />
          <span className="ml-2">{animationSpeed} ms</span>
        </div>
        {sorting ? (
          <Button onClick={stopSort}>
            Stop Sorting
          </Button>
        ) : (
          <Button onClick={startSort} disabled={completed}>
            {completed ? "Sorting Completed" : "Start Sorting"}
          </Button>
        )}
      </CardFooter>
      <div className="mt-2">
        <h2 className="text-xl font-semibold mb-3 text-center">Color Legend:</h2>
        <div className="flex flex-wrap justify-center space-x-6 text-sm">
          <span className="flex items-center mb-3">
            <div className="w-4 h-4 bg-yellow-100 border-2 border-yellow-500 rounded-full mr-2"></div>Pivot
          </span>
          <span className="flex items-center mb-3">
            <div className="w-4 h-4 bg-red-100 border-2 border-red-500 rounded-full mr-2"></div>Current Start
          </span>
          <span className="flex items-center mb-3">
            <div className="w-4 h-4 bg-purple-100 border-2 border-purple-500 rounded-full mr-2"></div>Current End
          </span>
          <span className="flex items-center mb-3">
            <div className="w-4 h-4 bg-muted rounded-full mr-2"></div>Unsorted
          </span>
        </div>
      </div>
    </Card>
  )
}