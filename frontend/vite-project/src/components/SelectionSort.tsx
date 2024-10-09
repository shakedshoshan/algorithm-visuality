import { useState, useEffect, useCallback } from "react"
import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts"
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

export function SelectionSort() {
  const [array, setArray] = useState<number[]>([])
  const [sorting, setSorting] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [minIndex, setMinIndex] = useState<number | null>(null)
  const [searchingIndex, setSearchingIndex] = useState<number | null>(null)
  const [switchingIndex, setSwitchingIndex] = useState<number | null>(null)
  const [animationSpeed, setAnimationSpeed] = useState(50)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [elapsedTime, setElapsedTime] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Generate random array
  // Function to generate a new random array
  const generateArray = useCallback(() => {
    const newArray = Array.from({ length: 25 }, () => Math.floor(Math.random() * 100) + 1)
    setArray(newArray)
    setCompleted(false)
    setCurrentIndex(0)
    setMinIndex(null)
    setSearchingIndex(null)
    setSwitchingIndex(null)
    setElapsedTime(null)
    setError(null)
  }, [])

  // Initialize array on component mount
  useEffect(() => {
    generateArray()
  }, [generateArray])

  // Function to perform a single step of the selection sort algorithm
  const selectionSortStep = useCallback(() => {
    if (currentIndex >= array.length - 1) {
      setSorting(false)
      setCompleted(true)
      setElapsedTime((Date.now() - (startTime ?? 0)) / 1000)
      return
    }

    const newArray = [...array]
    let minIdx = minIndex !== null ? minIndex : currentIndex

    for (let i = currentIndex + 1; i < newArray.length; i++) {
      setSearchingIndex(i)
      if (newArray[i] < newArray[minIdx]) {
        minIdx = i
        setMinIndex(minIdx)
      }
    }

    if (minIdx !== currentIndex) {
      setSwitchingIndex(currentIndex)
      const temp = newArray[currentIndex]
      newArray[currentIndex] = newArray[minIdx]
      newArray[minIdx] = temp
    }

    setArray(newArray)
    setCurrentIndex((prevIndex) => prevIndex + 1)
    
  }, [array, currentIndex, minIndex, startTime])

  // Custom hook to control the sorting animation using setInterval
  useInterval(
    () => {
      selectionSortStep()
    },
    sorting ? animationSpeed : null
  )

  // Function to start the sorting process
  const startSort = () => {
    setSorting(true)
    setCompleted(false)
    setCurrentIndex(0)
    setMinIndex(null)
    setSearchingIndex(null)
    setSwitchingIndex(null)
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
        <CardTitle className="font-bold text-2xl">Selection Sort Algorithm Visualizer</CardTitle>
        <div className="text-sm font-normal">
          <p><strong>Time Complexity:  O(n<sup>2</sup></strong>)</p>
        </div>
        <CardDescription>Selection sort is a simple sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.</CardDescription>
      </CardHeader>
      <div className="flex items-center justify-center font-semibold">
          <span className="">Elapsed Time: </span>
        <span className="text-sm font-normal">{elapsedTime !== null ? ` ${elapsedTime.toFixed(2)} sec` : "  You didn't start the sorting yet"}</span>
      </div>
      {error && <div className="text-red-500 text-center">{error}</div>}
      <CardContent>
        <BarChart width={600} height={300} data={array.map((value, index) => ({ value, index }))} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <XAxis dataKey="index" tick={false} interval={0} />  // Explicitly set interval
          <YAxis hide />
          <Bar dataKey="value">
            {array.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === currentIndex ? "hsl(var(--primary))" : index === minIndex || index === currentIndex-1 ? "color(display-p3 0.3 0.3 0.9)" : "hsl(var(--muted))"}
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