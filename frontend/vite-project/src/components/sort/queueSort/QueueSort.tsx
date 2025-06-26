'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeLanguageSwitcherV2 } from '../../code-language-switcher-v2'
import { queueSortSnippets } from '../../../CodeSnippets/queue/QueueSortSnippets'

export function QueueSortVisualizer() {
  const [queue, setQueue] = useState<number[]>([])
  const [tempQueue, setTempQueue] = useState<number[]>([])
  const [currentElement, setCurrentElement] = useState<number | null>(null)
  const [currentElementPosition, setCurrentElementPosition] = useState<'main' | 'temp' | 'moving'>('main')
  const [isSorting, setIsSorting] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(500)
  const stopSortRef = useRef(false)
  const [sortTime, setSortTime] = useState<number | null>(null)

  useEffect(() => {
    generateQueue()
  }, [])

  const generateQueue = () => {
    const newQueue = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
    setQueue(newQueue)
    setTempQueue([])
    setCurrentElement(null)
    setCurrentElementPosition('main')
    setSortTime(null)
  }

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const sort = async () => {
    setIsSorting(true)
    setTempQueue([])
    setCurrentElement(null)
    setCurrentElementPosition('main')
    setSortTime(null)
    stopSortRef.current = false

    const startTime = performance.now()

    const queueCopy = [...queue]
    const tempQueueCopy: number[] = []
    const length = queueCopy.length

    // Queue Sort: Similar to selection sort but using queue operations
    for (let i = 0; i < length - 1; i++) {
      if (stopSortRef.current) break

      let minIndex = 0
      let minValue = queueCopy[0]

      // Find minimum element in remaining queue
      for (let j = 0; j < queueCopy.length; j++) {
        if (stopSortRef.current) break

        setCurrentElement(queueCopy[j])
        setCurrentElementPosition('moving')
        await delay(animationSpeed)

        if (queueCopy[j] < minValue) {
          minIndex = j
          minValue = queueCopy[j]
        }
      }

      // Remove minimum element and add to temp queue
      if (!stopSortRef.current) {
        setCurrentElement(minValue)
        setCurrentElementPosition('moving')
        await delay(animationSpeed)

        queueCopy.splice(minIndex, 1)
        tempQueueCopy.push(minValue)
        
        setQueue([...queueCopy])
        setTempQueue([...tempQueueCopy])
        setCurrentElementPosition('temp')
        await delay(animationSpeed)
      }
    }

    // Add last element
    if (queueCopy.length > 0 && !stopSortRef.current) {
      const lastElement = queueCopy[0]
      setCurrentElement(lastElement)
      setCurrentElementPosition('moving')
      await delay(animationSpeed)
      
      tempQueueCopy.push(lastElement)
      setTempQueue([...tempQueueCopy])
      setQueue([])
      setCurrentElementPosition('temp')
      await delay(animationSpeed)
    }

    // Move all elements back to main queue (now sorted)
    while (tempQueueCopy.length > 0) {
      if (stopSortRef.current) break

      const element = tempQueueCopy.shift()!
      setCurrentElement(element)
      setCurrentElementPosition('moving')
      await delay(animationSpeed)
      
      queueCopy.push(element)
      setQueue([...queueCopy])
      setTempQueue([...tempQueueCopy])
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
        <CardTitle className="font-bold text-2xl">Queue Sort Visualizer</CardTitle>
        <div className="text-sm font-normal">
          <p><strong>Time Complexity: O(n²)</strong></p>
        </div>
        <CardDescription>
          Queue sort is a sorting algorithm that uses two queues. It repeatedly finds the minimum element from the main queue and moves it to a temporary queue, eventually resulting in a sorted queue using FIFO operations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          {isSorting ? (
            <Button onClick={stopSort} variant="destructive">
              Stop
            </Button>
          ) : (
            <Button onClick={sort} disabled={isSorting || queue.length === 0}>
              Sort
            </Button>
          )}
          <div className="flex-grow"></div>
          <Button onClick={generateQueue} variant="outline" disabled={isSorting}>
            Generate New Queue
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
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col items-center gap-2">
            <h3 className="font-semibold">Main Queue (Front → Rear)</h3>
            <div className="flex space-x-2 overflow-auto border border-gray-300 p-4 rounded min-h-[80px] min-w-full">
              {queue.map((num, index) => (
                <div
                  key={index}
                  className={`w-16 h-12 flex items-center justify-center text-sm font-medium border-2 rounded ${
                    num === currentElement && currentElementPosition === 'main' ? 'border-blue-500 bg-blue-100' : 
                    index === 0 ? 'border-indigo-500 bg-indigo-100' : 
                    index === queue.length - 1 ? 'border-green-500 bg-green-100' : 'border-gray-300'
                  }`}
                >
                  {num}
                </div>
              ))}
              {queue.length === 0 && <div className="text-gray-500 self-center">Empty</div>}
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            {currentElement !== null && currentElementPosition === 'moving' && (
              <div className="w-16 h-12 flex items-center justify-center text-sm font-medium border-2 border-blue-500 bg-blue-100 rounded">
                {currentElement}
              </div>
            )}
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <h3 className="font-semibold">Temp Queue (Front → Rear)</h3>
            <div className="flex space-x-2 overflow-auto border border-gray-300 p-4 rounded min-h-[80px] min-w-full">
              {tempQueue.map((num, index) => (
                <div
                  key={index}
                  className={`w-16 h-12 flex items-center justify-center text-sm font-medium border-2 rounded ${
                    num === currentElement && currentElementPosition === 'temp' ? 'border-blue-500 bg-blue-100' : 
                    index === 0 ? 'border-indigo-500 bg-indigo-100' : 
                    index === tempQueue.length - 1 ? 'border-green-500 bg-green-100' : 'border-gray-300'
                  }`}
                >
                  {num}
                </div>
              ))}
              {tempQueue.length === 0 && <div className="text-gray-500 self-center">Empty</div>}
            </div>
          </div>
        </div>
        
        {sortTime !== null && (
          <p className="mt-4 text-blue-600">Sort time: {sortTime.toFixed(3)} seconds</p>
        )}
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3 text-center">Color Legend:</h2>
          <div className="flex flex-wrap justify-center space-x-6 text-sm">
            <span className="flex items-center mb-3">
              <div className="w-4 h-4 bg-blue-100 border-2 border-blue-500 rounded-full mr-2"></div>Current Element
            </span>
            <span className="flex items-center mb-3">
              <div className="w-4 h-4 bg-indigo-100 border-2 border-indigo-500 rounded-full mr-2"></div>Front
            </span>
            <span className="flex items-center mb-3">
              <div className="w-4 h-4 bg-green-100 border-2 border-green-500 rounded-full mr-2"></div>Rear
            </span>
          </div>
        </div>
      </CardContent>
      
      <div className="mt-8 p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Queue Sort Implementation</h2>
        <CodeLanguageSwitcherV2 codeSnippets={queueSortSnippets} />
      </div>
    </Card>
  )
}

export default QueueSortVisualizer 