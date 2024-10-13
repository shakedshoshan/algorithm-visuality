// 'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function StackSearchVisualizer() {
  const [stack, setStack] = useState<number[]>([])
  const [searchNumber, setSearchNumber] = useState('')
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [found, setFound] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(500)
  const stopSearchRef = useRef(false)
  const [searchTime, setSearchTime] = useState<number | null>(null)

  useEffect(() => {
    generateStack()
  }, [])

  const generateStack = () => {
    const newStack = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100))
    setStack(newStack)
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

    for (let i = stack.length - 1; i >= 0; i--) {
      if (stopSearchRef.current) {
        break
      }
      setCurrentIndex(i)
      await delay(animationSpeed)

      if (stack[i] === searchNum) {
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
        <CardTitle className="font-bold text-2xl">Stack Search Visualizer</CardTitle>
        <div className="text-sm font-normal">
          <p><strong>Time Complexity: O(n)</strong></p>
        </div>
        <CardDescription>
          Stack search is a linear search algorithm that starts from the top of the stack and moves towards the bottom. It checks each element sequentially until a match is found or the bottom of the stack is reached.
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
            <Button onClick={search} disabled={isSearching || stack.length === 0}>
              Search
            </Button>
          )}
          <div className="flex-grow"></div>
          <Button onClick={generateStack} variant="outline" disabled={isSearching}>
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
            disabled={isSearching}
          />
        </div>
        <div className="flex flex-col-reverse items-center  gap-2">
          {stack.map((num, index) => {
            let classNames = 'w-32 h-12 flex items-center justify-center text-sm font-medium border-2 '
            if (found && num === parseInt(searchNumber)) {
              classNames += 'border-green-500 bg-green-100'
            } else if (index === currentIndex) {
              classNames += 'border-blue-500 bg-blue-100'
            } else if (currentIndex !== null && index > currentIndex) {
              classNames += 'border-gray-500 bg-gray-100'
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
        {found && (
          <p className="mt-4 text-green-600">Number {searchNumber} found in the stack!</p>
        )}
        {!found && !isSearching && currentIndex === 0 && (
          <p className="mt-4 text-red-600">Number {searchNumber} not found in the stack.</p>
        )}
        {searchTime !== null && (
          <p className="mt-2 text-blue-600">Search time: {searchTime.toFixed(3)} seconds</p>
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
          </div>
        </div>
      </CardContent>
    </Card>
  )
}