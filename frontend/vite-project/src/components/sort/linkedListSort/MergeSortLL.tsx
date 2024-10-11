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

export function MergeSortLL() {
  const [head, setHead] = useState<Node | null>(null)
  const [sorting, setSorting] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [currentNode, setCurrentNode] = useState<Node | null>(null)
  const [mergeStack, setMergeStack] = useState<[Node | null, Node | null][]>([])
  const [animationSpeed, setAnimationSpeed] = useState(200)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [elapsedTime, setElapsedTime] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Generate random linked list
  const generateLinkedList = useCallback(() => {
    let newHead: Node | null = null
    let current: Node | null = null
    for (let i = 0; i < 15; i++) { // Reduced size for better visualization
      const newNode: Node = { value: Math.floor(Math.random() * 100) + 1, next: null }
      if (!newHead) {
        newHead = newNode
        current = newNode
      } else if (current) {
        current.next = newNode
        current = newNode
      }
    }
    setHead(newHead)
    setCompleted(false)
    setCurrentNode(null)
    setMergeStack([])
    setElapsedTime(null)
    setError(null)
  }, [])

  // Initialize linked list on component mount
  useEffect(() => {
    generateLinkedList()
  }, [generateLinkedList])

  const getMiddle = (head: Node): Node => {
    if (!head || !head.next) return head;
    let slow: Node = head;
    let fast: Node | null = head.next;
    while (fast && fast.next) {
      slow = slow.next!;
      fast = fast.next.next;
    }
    return slow;
  }

  const merge = (left: Node | null, right: Node | null): Node | null => {
    let dummy: Node = { value: 0, next: null };
    let current: Node = dummy;
    while (left && right) {
      if (left.value <= right.value) {
        current.next = left;
        left = left.next;
      } else {
        current.next = right;
        right = right.next;
      }
      current = current.next;
    }
    if (left) current.next = left;
    if (right) current.next = right;
    return dummy.next;
  }

  // Function to perform a single step of the merge sort algorithm for linked list
  const mergeSortStep = useCallback(() => {
    if (!head || completed) {
      setSorting(false)
      if (!completed) {
        setCompleted(true)
        setElapsedTime((Date.now() - (startTime ?? 0)) / 1000)
      }
      return
    }

    if (mergeStack.length === 0) {
      setMergeStack([[head, null]])
      return
    }

    let [start, end] = mergeStack.pop()!;
    
    if (start === end || start?.next === end) {
      if (mergeStack.length === 0) {
        setCompleted(true)
        setSorting(false)
        setElapsedTime((Date.now() - (startTime ?? 0)) / 1000)
      }
      return
    }

    let middle = getMiddle(start!);
    let rightStart = middle.next;
    middle.next = null;

    setMergeStack(prev => [...prev, [start, middle], [rightStart, end], [start, end]])
    setCurrentNode(middle)

  }, [head, completed, mergeStack, startTime])

  // Custom hook to control the sorting animation using setInterval
  useInterval(
    () => {
      mergeSortStep()
    },
    sorting ? animationSpeed : null
  )

  // Function to start the sorting process
  const startSort = () => {
    if (!head) return
    setSorting(true)
    setCompleted(false)
    setMergeStack([])
    setCurrentNode(head)
    setStartTime(Date.now())
    setError(null)
  }

  // Function to stop sorting
  const stopSort = () => {
    setSorting(false)
    setError("Sorting was interrupted. The algorithm did not finish running.")
    setElapsedTime((Date.now() - (startTime ?? 0)) / 1000)
  }

  // Function to render the linked list
  const renderLinkedList = () => {
    const nodes: JSX.Element[] = []
    let current = head
    while (current) {
      nodes.push(
        <div key={current.value + Math.random()} className="flex items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
            current === currentNode ? "border-yellow-500 bg-yellow-100 text-black" : 
            completed ? "border-green-500 bg-green-100 text-black" :
            "border-gray-300 bg-muted"
          }`}>
            {current.value}
          </div>
          {current.next && <div className="w-4 h-1 bg-gray-400 mx-1" />}
        </div>
      )
      current = current.next
    }
    return <div className="flex flex-wrap gap-2 justify-center">{nodes}</div>
  }

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="font-bold text-2xl">Merge Sort Algorithm Visualizer (Linked List)</CardTitle>
        <div className="text-sm font-normal">
          <p><strong>Time Complexity: O(n log n)</strong></p>
        </div>
        <CardDescription>Merge sort on a linked list uses a divide-and-conquer strategy. It recursively divides the list into smaller sublists, sorts them, and then merges the sorted sublists to produce a sorted list. This implementation is efficient for linked lists as it doesn't require random access to elements.</CardDescription>
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
            <div className="w-4 h-4 bg-yellow-100 border-2 border-yellow-500 rounded-full mr-2"></div>Current Node
          </span>
          <span className="flex items-center mb-3">
            <div className="w-4 h-4 bg-green-100 border-2 border-green-500 rounded-full mr-2"></div>Sorted
          </span>
          <span className="flex items-center mb-3">
            <div className="w-4 h-4 bg-muted rounded-full mr-2"></div>Unsorted
          </span>
        </div>
      </div>
    </Card>
  )
}