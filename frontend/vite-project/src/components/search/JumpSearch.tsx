// 'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function JumpSearchVisualizer() {
  const [array, setArray] = useState<number[]>([])
  const [searchNumber, setSearchNumber] = useState('')
  const [blockStart, setBlockStart] = useState<number | null>(null)
  const [blockEnd, setBlockEnd] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
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
    newArray.sort((a, b) => a - b) // Ensure the array is sorted for jump search
    setArray(newArray)
    setBlockStart(null)
    setBlockEnd(null)
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
    setBlockStart(0)
    setBlockEnd(Math.floor(Math.sqrt(array.length)))
    setCurrentIndex(null)
    setSearchTime(null)
    stopSearchRef.current = false

    const startTime = performance.now()
    const step = Math.floor(Math.sqrt(array.length))
    let prev = 0

    // Jump Phase
    while (prev < array.length) {
      if (stopSearchRef.current) {
        break
      }
      let currentBlockEnd = Math.min(prev + step, array.length)
      setBlockStart(prev)
      setBlockEnd(currentBlockEnd - 1)
      await delay(animationSpeed)

      if (array[currentBlockEnd - 1] >= searchNum) {
        break
      }
      prev += step
    }

    // Linear Search within the Block
    for (let i = prev; i < Math.min(prev + step, array.length); i++) {
      if (stopSearchRef.current) {
        break
      }
      setCurrentIndex(i)
          await delay(animationSpeed)

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
        <CardTitle className="font-bold text-2xl">Jump Search Visualizer</CardTitle>
        <div className="text-sm font-normal">
          <p><strong>Time Complexity: O(√n)</strong></p>
        </div>
        <CardDescription>
          Jump search is an efficient search algorithm for sorted arrays. It works by jumping ahead by fixed steps and performing a linear search within the identified block where the target may reside.
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
            <Button onClick={search} disabled={isSearching || array.length === 0}>
              Search
            </Button>
          )}
          <div className="flex-grow"></div>
          <Button onClick={generateArray} variant="outline" disabled={isSearching}>
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
            disabled={isSearching}
          />
        </div>
        <div className="grid grid-cols-10 gap-2">
          {array.map((num, index) => {
            let classNames = 'w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium border-2 '
            if (found && num === parseInt(searchNumber)) {
              classNames += 'border-green-500 bg-green-100'
            } else if (index === currentIndex) {
              classNames += 'border-blue-500 bg-blue-100'
            } else if (blockStart !== null && blockEnd !== null && index >= blockStart && index <= blockEnd) {
              classNames += 'border-yellow-500 bg-yellow-100'
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
          <p className="mt-4 text-green-600">Number {searchNumber} found in the array!</p>
        )}
        {!found && !isSearching && currentIndex !== null && (
          <p className="mt-4 text-red-600">Number {searchNumber} not found in the array.</p>
        )}
        {searchTime !== null && (
          <p className="mt-2 text-blue-600">Search time: {searchTime.toFixed(3)} seconds</p>
        )}
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3 text-center">Color Legend:</h2>
          <div className="flex flex-wrap justify-center space-x-6 text-sm">
            <span className="flex items-center mb-3">
              <div className="w-4 h-4 bg-yellow-100 border-2 border-yellow-500 rounded-full mr-2"></div> Current Block
            </span>
            <span className="flex items-center mb-3">
              <div className="w-4 h-4 bg-blue-100 border-2 border-blue-500 rounded-full mr-2"></div> Current Index
            </span>
            <span className="flex items-center mb-3">
              <div className="w-4 h-4 bg-green-100 border-2 border-green-500 rounded-full mr-2"></div> Found
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}