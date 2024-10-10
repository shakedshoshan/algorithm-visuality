// 'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Slider } from "../components/ui/slider"

export function LinearSearchVisualizer() {
  const [array, setArray] = useState<number[]>([])
  const [searchNumber, setSearchNumber] = useState('')
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [found, setFound] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(500)
  const stopSearchRef = useRef(false)
  const [searchTime, setSearchTime] = useState<number | null>(null)

  useEffect(() => {
    generateArray()
  }, [])

  const generateArray = () => {
    const newArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100))
    setArray(newArray)
    setCurrentIndex(-1)
    setFound(false)
    setSearchTime(null)
  }

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const search = async () => {
    const searchNum = parseInt(searchNumber)
    setIsSearching(true)
    setCurrentIndex(-1)
    setFound(false)
    setSearchTime(null)
    stopSearchRef.current = false

    const startTime = performance.now()

    for (let i = 0; i < array.length; i++) {
      if (stopSearchRef.current) {
        break
      }
      setCurrentIndex(i)
      await delay(animationSpeed) // Use the animationSpeed for delay

      if (array[i] === searchNum) {
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
        <CardTitle className="font-bold text-2xl">Linear Search Visualizer</CardTitle>
        <div className="text-sm font-normal">
          <p><strong>Time Complexity: O(n)</strong></p>
        </div>
        <CardDescription>
          Linear search is a simple search algorithm that sequentially checks each element in a list until a match is found or the whole list has been searched. It's straightforward but can be inefficient for large datasets.
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
          />
          {isSearching ? (
            <Button onClick={stopSearch} variant="destructive">
              Stop
            </Button>
          ) : (
            <Button onClick={search} disabled={isSearching}>
              Search
            </Button>
          )}
          <div className="flex-grow"></div>
          <Button onClick={generateArray} variant="outline">
            Generate New Array
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
          />
        </div>
        <div className="grid grid-cols-10 gap-2">
          {array.map((num, index) => (
            <div
              key={index}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium border-2 ${
                index === currentIndex
                  ? 'border-yellow-500 bg-yellow-100'
                  : found && num === parseInt(searchNumber)
                  ? 'border-green-500 bg-green-100'
                  : 'border-gray-300'
              }`}
            >
              {num}
            </div>
          ))}
        </div>
        {found && (
          <p className="mt-4 text-green-600">Number {searchNumber} found in the array!</p>
        )}
        {!found && !isSearching && currentIndex >= 0 && (
          <p className="mt-4 text-red-600">Number {searchNumber} not found in the array.</p>
        )}
        {searchTime !== null && (
          <p className="mt-2 text-blue-600">Search time: {searchTime.toFixed(3)} seconds</p>
        )}
      </CardContent>
    </Card>
  )
}