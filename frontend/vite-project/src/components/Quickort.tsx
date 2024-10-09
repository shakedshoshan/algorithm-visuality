import { useState, useEffect, useCallback } from "react"
import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Stack to keep track of subarrays
type StackItem = { low: number; high: number }

// Custom hook for setInterval with React Hooks
const useInterval = (callback: () => void, delay: number | null) => {
  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(callback, delay)
      return () => clearInterval(id)
    }
  }, [callback, delay])
}

export function QuickSort() {
  const [array, setArray] = useState<number[]>([])
  const [sorting, setSorting] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [stack, setStack] = useState<StackItem[]>([])
  const [pivot, setPivot] = useState<number | null>(null)
  const [partitionIndex, setPartitionIndex] = useState<number | null>(null)
  const [animationSpeed, setAnimationSpeed] = useState(50)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [elapsedTime, setElapsedTime] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Generate random array
  const generateArray = useCallback(() => {
    const newArray = Array.from({ length: 25 }, () => Math.floor(Math.random() * 100) + 1)
    setArray(newArray)
    setCompleted(false)
    setStack([])
    setPivot(null)
    setPartitionIndex(null)
    setElapsedTime(null)
    setError(null)
  }, [])

  // Initialize array on component mount
  useEffect(() => {
    generateArray()
  }, [generateArray])

  // Improved partition function
  const partition = (arr: number[], low: number, high: number): number => {
    const pivot = arr[high]
    let i = low - 1

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1
  }

  // Function to perform a single step of the quick sort algorithm
  const quickSortStep = useCallback(() => {
    if (stack.length === 0) {
      setSorting(false)
      setCompleted(true)
      setElapsedTime((Date.now() - (startTime ?? 0)) / 1000)
      return
    }

    const { low, high } = stack.pop()!
    
    if (low < high) {
      const newArray = [...array]
      const pivotIndex = partition(newArray, low, high)

      setArray(newArray)
      setPivot(pivotIndex)
      setPartitionIndex(pivotIndex)

      // Push larger subarray first to ensure O(log n) space complexity
      if (pivotIndex - low < high - pivotIndex) {
        stack.push({ low: pivotIndex + 1, high })
        stack.push({ low, high: pivotIndex - 1 })
      } else {
        stack.push({ low, high: pivotIndex - 1 })
        stack.push({ low: pivotIndex + 1, high })
      }
      setStack([...stack])
    }
  }, [array, stack, startTime])

  // Custom hook to control the sorting animation using setInterval
  useInterval(
    () => {
      quickSortStep()
    },
    sorting ? animationSpeed : null
  )

  // Function to start the sorting process
  const startSort = () => {
    setSorting(true)
    setCompleted(false)
    setStack([{ low: 0, high: array.length - 1 }])
    setStartTime(Date.now())
    setError(null)
  }

  // Function to stop sorting
  const stopSort = () => {
    setSorting(false)
    setError("Sorting was interrupted. The algorithm did not finish running.")
    setElapsedTime((Date.now() - (startTime ?? 0)) / 1000)
  }

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="font-bold text-2xl">Quick Sort Algorithm Visualizer</CardTitle>
        <div className="text-sm font-normal">
          <p><strong>Time Complexity: O(n log n)</strong></p>
        </div>
        <CardDescription>Quick sort is an efficient, divide-and-conquer sorting algorithm. It works by selecting a 'pivot' element and partitioning the array around it. This implementation uses an optimized partitioning method and manages the recursion stack explicitly for better performance.</CardDescription>
      </CardHeader>
      <div className="flex items-center justify-center font-semibold">
          <span className="">Elapsed Time: </span>
        <span className="text-sm font-normal">{elapsedTime !== null ? ` ${elapsedTime.toFixed(2)} sec` : "  You didn't start the sorting yet"}</span>
      </div>
      {error && <div className="text-red-500 text-center">{error}</div>}
      <CardContent>
        <BarChart width={600} height={300} data={array.map((value, index) => ({ value, index }))} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <XAxis dataKey="index" tick={false} interval={0} />
          <YAxis hide />
          <Bar dataKey="value">
            {array.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === pivot ? "hsl(var(--primary))" : (pivot !== null && index >= pivot) ? "color(display-p3 0.3 0.3 0.9)" : "hsl(var(--muted))"}
              />
            ))}
          </Bar>
        </BarChart>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={generateArray} disabled={sorting}>
          Generate New Array
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
    </Card>
  )
}