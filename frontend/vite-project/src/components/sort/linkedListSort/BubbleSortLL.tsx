import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { CodeLanguageSwitcherV2 } from "../../code-language-switcher-v2"

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

export function BubbleSortLL() {
  const [head, setHead] = useState<Node | null>(null)
  const [sorting, setSorting] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [currentNode, setCurrentNode] = useState<Node | null>(null)
  const [prevNode, setPrevNode] = useState<Node | null>(null)
  const [sorted, setSorted] = useState<Node | null>(null)
  const [animationSpeed, setAnimationSpeed] = useState(50)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [elapsedTime, setElapsedTime] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [swapped, setSwapped] = useState(false)

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
    setCurrentNode(newHead)
    setPrevNode(null)
    setSorted(null)
    setElapsedTime(null)
    setError(null)
    setSwapped(false)
  }, [])

  // Initialize linked list on component mount
  useEffect(() => {
    generateLinkedList()
  }, [generateLinkedList])

  // Function to perform a single step of the bubble sort algorithm for linked list
  const bubbleSortStep = useCallback(() => {
    if (!head || completed) {
      setSorting(false)
      if (!completed) {
        setCompleted(true)
        setElapsedTime((Date.now() - (startTime ?? 0)) / 1000)
      }
      return
    }

    if (sorted === head) {
      setSorting(false)
      setCompleted(true)
      setElapsedTime((Date.now() - (startTime ?? 0)) / 1000)
      return
    }

    if (!currentNode) {
      // Start of a new pass
      setCurrentNode(head)
      setPrevNode(null)
      setSwapped(false)
      return
    }

    if (currentNode.next === sorted) {
      // End of current pass
      setSorted(currentNode)
      setCurrentNode(null)
      setPrevNode(null)
      if (!swapped) {
        setCompleted(true)
        setSorting(false)
        setElapsedTime((Date.now() - (startTime ?? 0)) / 1000)
      }
      return
    }

    if (currentNode.value > (currentNode.next?.value ?? Infinity)) {
      // Swap nodes
      const swappedNode = currentNode.next
      currentNode.next = swappedNode?.next || null
      swappedNode!.next = currentNode

      if (prevNode) {
        prevNode.next = swappedNode
      } else {
        setHead(swappedNode)
      }

      setPrevNode(swappedNode)
      setSwapped(true)
    } else {
      setPrevNode(currentNode)
      setCurrentNode(currentNode.next)
    }
  }, [head, currentNode, prevNode, sorted, swapped, completed, startTime])

  // Custom hook to control the sorting animation using setInterval
  useInterval(
    () => {
      bubbleSortStep()
    },
    sorting ? animationSpeed : null
  )

  // Function to start the sorting process
  const startSort = () => {
    if (!head) return
    setSorting(true)
    setCompleted(false)
    setCurrentNode(head)
    setPrevNode(null)
    setSorted(null)
    setStartTime(Date.now())
    setError(null)
    setSwapped(false)
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
        <div key={current.value + Math.random()} className="flex items-center ">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
            current === currentNode ? "border-yellow-500 bg-yellow-100 text-black" : 
            (sorted && current === sorted) ? "border-green-500 bg-green-100 text-black" :
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
        <CardTitle className="font-bold text-2xl">Bubble Sort Algorithm Visualizer (Linked List)</CardTitle>
        <div className="text-sm font-normal">
          <p><strong>Time Complexity: O(n<sup>2</sup>)</strong></p>
        </div>
        <CardDescription>Bubble sort on a linked list repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted. This implementation may be less efficient than array-based bubble sort due to the lack of random access in linked lists.</CardDescription>
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