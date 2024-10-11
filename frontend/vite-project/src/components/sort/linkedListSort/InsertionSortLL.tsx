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

export function InsertionSortLL() {
  const [head, setHead] = useState<Node | null>(null)
  const [sorting, setSorting] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [currentNode, setCurrentNode] = useState<Node | null>(null)
  const [sorted, setSorted] = useState<Node | null>(null)
  const [animationSpeed, setAnimationSpeed] = useState(50)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [elapsedTime, setElapsedTime] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Generate random linked list
  const generateLinkedList = useCallback(() => {
    let newHead: Node | null = null
    let current: Node | null = null
    for (let i = 0; i < 25; i++) {
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
    setSorted(null)
    setElapsedTime(null)
    setError(null)
  }, [])

  // Initialize linked list on component mount
  useEffect(() => {
    generateLinkedList()
  }, [generateLinkedList])

  // Function to perform a single step of the insertion sort algorithm for linked list
  const insertionSortStep = useCallback(() => {
    if (!head || completed) {
      setSorting(false)
      if (!completed) {
        setCompleted(true)
        setElapsedTime((Date.now() - (startTime ?? 0)) / 1000)
      }
      return
    }

    if (!sorted) {
      // Initialize sorted list with the first node
      setSorted(head)
      setHead(head.next)
      setSorted(prev => prev ? { ...prev, next: null } : null)
      setCurrentNode(head?.next ?? null)
      return
    }

    if (currentNode) {
      let newNode = currentNode
      setHead(currentNode.next)
      setCurrentNode(currentNode.next)

      if (newNode.value < sorted.value) {
        // Insert at the beginning
        newNode.next = sorted
        setSorted(newNode)
      } else {
        // Find the correct position to insert
        let current = sorted
        while (current.next !== null && current.next.value < newNode.value) {
          current = current.next
        }
        newNode.next = current.next
        current.next = newNode
      }
    } else {
      // No more nodes to sort
      setSorting(false)
      setCompleted(true)
      setElapsedTime((Date.now() - (startTime ?? 0)) / 1000)
    }
  }, [head, sorted, currentNode, completed, startTime])

  // Custom hook to control the sorting animation using setInterval
  useInterval(
    () => {
      insertionSortStep()
    },
    sorting ? animationSpeed : null
  )

  // Function to start the sorting process
  const startSort = () => {
    if (!head) return
    setSorting(true)
    setCompleted(false)
    setSorted(null)
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
    let current = sorted
    while (current) {
      nodes.push(
        <div key={current.value + Math.random()} className="flex items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
            current === currentNode ? "border-yellow-500 bg-yellow-100 text-black" : 
            "border-green-500 bg-green-100 text-black"
          }`}>
            {current.value}
          </div>
          {current.next && <div className="w-4 h-1 bg-gray-400 mx-1" />}
        </div>
      )
      current = current.next
    }

    // Render the unsorted part
    current = head
    while (current) {
      nodes.push(
        <div key={current.value + Math.random()} className="flex items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
            current === currentNode ? "border-yellow-500 bg-yellow-100 text-black" : 
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
        <CardTitle className="font-bold text-2xl">Insertion Sort Algorithm Visualizer (Linked List)</CardTitle>
        <div className="text-sm font-normal">
          <p><strong>Time Complexity: O(n<sup>2</sup>)</strong></p>
        </div>
        <CardDescription>Insertion sort on a linked list builds the sorted list one node at a time by repeatedly taking the next node from the input and inserting it into the correct position in the sorted list. This implementation is efficient for linked lists as it does not require shifting elements.</CardDescription>
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
            min="10"
            max="2000"
            step="10"
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