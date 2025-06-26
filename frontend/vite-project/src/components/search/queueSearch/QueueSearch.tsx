// 'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeLanguageSwitcherV2 } from '../../code-language-switcher-v2'
import { queueSearchSnippets } from '../../../CodeSnippets/queue/QueueSearchSnippets'

export function QueueSearchVisualizer() {
  const [queue, setQueue] = useState<number[]>([])
  const [searchNumber, setSearchNumber] = useState('')
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [found, setFound] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(500)
  const stopSearchRef = useRef(false)
  const [searchTime, setSearchTime] = useState<number | null>(null)

  useEffect(() => {
    generateQueue()
  }, [])

  const generateQueue = () => {
    const newQueue = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100))
    setQueue(newQueue)
    setCurrentIndex(null)
    setFound(false)
    setSearchTime(null)
  }

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const search = async () => {
    const searchNum = parseInt(searchNumber)
    if (isNaN(searchNum)) {
      alert("Please enter a valid number to search.")
      return
    }
    setIsSearching(true)
    setFound(false)
    setCurrentIndex(null)
    setSearchTime(null)
    stopSearchRef.current = false

    const startTime = performance.now()

    // Search from front to rear (FIFO order)
    for (let i = 0; i < queue.length; i++) {
      if (stopSearchRef.current) {
        break
      }
      setCurrentIndex(i)
      await delay(animationSpeed)

      if (queue[i] === searchNum) {
        setFound(true)
        setIsSearching(false)
        const endTime = performance.now()
        setSearchTime((endTime - startTime) / 1000)
        return
      }
    }

    setIsSearching(false)
    const endTime = performance.now()
    setSearchTime((endTime - startTime) / 1000)
  }

  const stopSearch = () => {
    stopSearchRef.current = true
    setIsSearching(false)
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="font-bold text-2xl">Queue Search Visualizer</CardTitle>
        <div className="text-sm font-normal">
          <p><strong>Time Complexity: O(n)</strong></p>
        </div>
        <CardDescription>
          Queue search is a linear search algorithm that starts from the front of the queue and moves towards the rear. It checks each element sequentially until a match is found or the rear of the queue is reached, following FIFO (First-In-First-Out) order.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input
            type="number"
            value={searchNumber}
            onChange={(e) => setSearchNumber(e.target.value)}
            placeholder="Enter number to search"
            className="w-48"
            disabled={isSearching}
          />
          {isSearching ? (
            <Button onClick={stopSearch} variant="destructive">
              Stop
            </Button>
          ) : (
            <Button onClick={search} disabled={isSearching || queue.length === 0}>
              Search
            </Button>
          )}
          <div className="flex-grow"></div>
          <Button onClick={generateQueue} variant="outline" disabled={isSearching}>
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
            disabled={isSearching}
          />
        </div>
        
        <div className="flex flex-col items-center space-y-4">
          <div className="text-sm text-indigo-600 font-semibold">Front → Rear</div>
          <div className="flex space-x-2 items-center">
            {queue.map((num, index) => {
              let classNames = 'w-16 h-12 flex items-center justify-center text-sm font-medium border-2 rounded '
              if (found && num === parseInt(searchNumber)) {
                classNames += 'border-green-500 bg-green-100'
              } else if (index === currentIndex) {
                classNames += 'border-blue-500 bg-blue-100'
              } else if (currentIndex !== null && index < currentIndex) {
                classNames += 'border-gray-500 bg-gray-100'
              } else if (index === 0) {
                classNames += 'border-indigo-500 bg-indigo-100'
              } else if (index === queue.length - 1) {
                classNames += 'border-green-500 bg-green-50'
              } else {
                classNames += 'border-gray-300'
              }
              return (
                <div
                  key={index}
                  className={classNames}
                >
                  {num}
                </div>
              )
            })}
          </div>
          <div className="flex justify-between w-full max-w-md text-xs text-gray-600">
            <span>Front</span>
            <span>Rear</span>
          </div>
        </div>
        
        {found && (
          <p className="mt-4 text-green-600 text-center">Number {searchNumber} found in the queue!</p>
        )}
        {!found && !isSearching && currentIndex === queue.length - 1 && (
          <p className="mt-4 text-red-600 text-center">Number {searchNumber} not found in the queue.</p>
        )}
        {searchTime !== null && (
          <p className="mt-2 text-blue-600 text-center">Search time: {searchTime.toFixed(3)} seconds</p>
        )}
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3 text-center">Color Legend:</h2>
          <div className="flex flex-wrap justify-center space-x-6 text-sm">
            <span className="flex items-center mb-3">
              <div className="w-4 h-4 bg-blue-100 border-2 border-blue-500 rounded-full mr-2"></div>Current
            </span>
            <span className="flex items-center mb-3">
              <div className="w-4 h-4 bg-gray-100 border-2 border-gray-500 rounded-full mr-2"></div>Checked
            </span>
            <span className="flex items-center mb-3">
              <div className="w-4 h-4 bg-green-100 border-2 border-green-500 rounded-full mr-2"></div>Found
            </span>
            <span className="flex items-center mb-3">
              <div className="w-4 h-4 bg-indigo-100 border-2 border-indigo-500 rounded-full mr-2"></div>Front
            </span>
          </div>
        </div>
      </CardContent>
      
      <div className="mt-8 p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Queue Search Implementation</h2>
        <CodeLanguageSwitcherV2 codeSnippets={queueSearchSnippets} />
      </div>
    </Card>
  )
}

export default QueueSearchVisualizer 