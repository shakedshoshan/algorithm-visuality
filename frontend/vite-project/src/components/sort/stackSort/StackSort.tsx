'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function StackSortVisualizer() {
  const [stack, setStack] = useState<number[]>([])
  const [tempStack, setTempStack] = useState<number[]>([])
  const [currentElement, setCurrentElement] = useState<number | null>(null)
  const [currentElementPosition, setCurrentElementPosition] = useState<'main' | 'temp' | 'moving'>('main')
  const [isSorting, setIsSorting] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(500)
  const stopSortRef = useRef(false)
  const [sortTime, setSortTime] = useState<number | null>(null)

  useEffect(() => {
    generateStack()
  }, [])

  const generateStack = () => {
    const newStack = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
    setStack(newStack)
    setTempStack([])
    setCurrentElement(null)
    setCurrentElementPosition('main')
    setSortTime(null)
  }

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const sort = async () => {
    setIsSorting(true)
    setTempStack([])
    setCurrentElement(null)
    setCurrentElementPosition('main')
    setSortTime(null)
    stopSortRef.current = false

    const startTime = performance.now()

    const stackCopy = [...stack]
    const tempStackCopy: number[] = []

    while (stackCopy.length > 0) {
      if (stopSortRef.current) {
        break
      }

      const temp = stackCopy.pop()!
      setCurrentElement(temp)
      setCurrentElementPosition('moving')
      setStack([...stackCopy])
      await delay(animationSpeed)

      while (tempStackCopy.length > 0 && tempStackCopy[tempStackCopy.length - 1] > temp) {
        if (stopSortRef.current) {
          break
        }
        const movedElement = tempStackCopy.pop()!
        setCurrentElement(movedElement)
        setCurrentElementPosition('moving')
        await delay(animationSpeed)
        stackCopy.push(movedElement)
        setStack([...stackCopy])
        setTempStack([...tempStackCopy])
        setCurrentElementPosition('main')
        await delay(animationSpeed)
      }

      tempStackCopy.push(temp)
      setTempStack([...tempStackCopy])
      setCurrentElementPosition('temp')
      await delay(animationSpeed)
    }

    // Move all elements back to the main stack (now sorted)
    while (tempStackCopy.length > 0) {
      if (stopSortRef.current) {
        break
      }

      const temp = tempStackCopy.pop()!
      setCurrentElement(temp)
      setCurrentElementPosition('moving')
      await delay(animationSpeed)
      stackCopy.push(temp)
      setStack([...stackCopy])
      setTempStack([...tempStackCopy])
      setCurrentElementPosition('main')
      await delay(animationSpeed)
    }

    if (!stopSortRef.current) {
      setIsSorting(false)
      setCurrentElement(null)
      setCurrentElementPosition('main')
      const endTime = performance.now()
      setSortTime((endTime - startTime) / 1000)
    }
  }

  const stopSort = () => {
    stopSortRef.current = true
    setIsSorting(false)
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="font-bold text-2xl">Stack Sort Visualizer</CardTitle>
        <div className="text-sm font-normal">
          <p><strong>Time Complexity: O(n²)</strong></p>
        </div>
        <CardDescription>
          Stack sort is a sorting algorithm that uses two stacks. It repeatedly pops elements from the main stack and inserts them into their correct position in a temporary stack, eventually resulting in a sorted stack.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          {isSorting ? (
            <Button onClick={stopSort} variant="destructive">
              Stop
            </Button>
          ) : (
            <Button onClick={sort} disabled={isSorting || stack.length === 0}>
              Sort
            </Button>
          )}
          <div className="flex-grow"></div>
          <Button onClick={generateStack} variant="outline" disabled={isSorting}>
            Generate New Stack
          </Button>
        </div>
        <div className="mb-4">
          <label htmlFor="speed-slider" className="block text-sm font-medium text-gray-700 mb-1">
            Animation Speed: {animationSpeed}ms
          </label>
          <input
            type="range"
            id="speed-slider"
            min="10"
            max="2000"
            step="10"
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
            className="w-full"
            disabled={isSorting}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col-reverse items-center gap-2 w-1/2">
            <h3 className="font-semibold">Main Stack</h3>
            <div className="h-[400px] flex flex-col-reverse justify-start overflow-auto border border-t-0 border-gray-300 p-2 rounded">
              {stack.map((num, index) => (
                <div
                  key={index}
                  className={`w-24 h-10 flex items-center justify-center text-sm font-medium border-2 ${
                    num === currentElement && currentElementPosition === 'main' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center w-32">
            {currentElement !== null && currentElementPosition === 'moving' && (
              <div className="w-24 h-10 flex items-center justify-center text-sm font-medium border-2 border-blue-500 bg-blue-100">
                {currentElement}
              </div>
            )}
          </div>
          <div className="flex flex-col-reverse items-center gap-2 w-1/2">
            <h3 className="font-semibold">Temp Stack</h3>
            <div className="h-[400px] flex flex-col-reverse justify-start overflow-auto border border-t-0 border-gray-300 p-2 rounded">
              {tempStack.map((num, index) => (
                <div
                  key={index}
                  className={`w-24 h-10 flex items-center justify-center text-sm font-medium border-2 ${
                    num === currentElement && currentElementPosition === 'temp' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        </div>
        {sortTime !== null && (
          <p className="mt-2 text-blue-600">Sort time: {sortTime.toFixed(3)} seconds</p>
        )}
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3 text-center">Color Legend:</h2>
          <div className="flex flex-wrap justify-center space-x-6 text-sm">
            <span className="flex items-center mb-3">
              <div className="w-4 h-4 bg-blue-100 border-2  border-blue-500 rounded-full mr-2"></div>Current Element
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}