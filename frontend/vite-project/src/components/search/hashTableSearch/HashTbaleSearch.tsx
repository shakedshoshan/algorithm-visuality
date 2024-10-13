    // 'use client'
    
    import { useState, useEffect, useRef } from 'react'
    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
    
    interface HashTableEntry {
      key: number;
      value: string;
    }
    
    export function HashTableSearchVisualizer() {
      const [hashTable, setHashTable] = useState<HashTableEntry[][]>([])
      const [searchKey, setSearchKey] = useState('')
      const [currentBucket, setCurrentBucket] = useState<number | null>(null)
      const [currentIndex, setCurrentIndex] = useState<number | null>(null)
      const [found, setFound] = useState(false)
      const [isSearching, setIsSearching] = useState(false)
      const [animationSpeed, setAnimationSpeed] = useState(500)
      const stopSearchRef = useRef(false)
      const [searchTime, setSearchTime] = useState<number | null>(null)
      const numberOfBuckets = 6
    
      useEffect(() => {
        generateHashTable()
      }, [])
    
      const generateHashTable = () => {
        const newHashTable: HashTableEntry[][] = Array.from({ length: numberOfBuckets }, () => [])
        // Populate hash table with random key-value pairs
        for (let i = 0; i < 15; i++) {
          const key = Math.floor(Math.random() * 100)
          const value = `Value${key}`
          const bucketIndex = hashFunction(key)
          newHashTable[bucketIndex].push({ key, value })
        }
        setHashTable(newHashTable)
        setCurrentBucket(null)
        setCurrentIndex(null)
        setFound(false)
        setSearchTime(null)
      }
    
      const hashFunction = (key: number) => {
        return key % numberOfBuckets
      }
    
      const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    
      const search = async () => {
        const keyToSearch = parseInt(searchKey)
        if (isNaN(keyToSearch)) {
          alert("Please enter a valid number to search.")
          return
        }
        setIsSearching(true)
        setFound(false)
        setCurrentBucket(null)
        setCurrentIndex(null)
        setSearchTime(null)
        stopSearchRef.current = false
    
        const startTime = performance.now()
        const bucketIndex = hashFunction(keyToSearch)
        setCurrentBucket(bucketIndex)
    
        for (let i = 0; i < hashTable[bucketIndex].length; i++) {
          if (stopSearchRef.current) {
            break
          }
          setCurrentIndex(i)
          await delay(animationSpeed)
    
          if (hashTable[bucketIndex][i].key === keyToSearch) {
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
            <CardTitle className="font-bold text-2xl">Hash Table Search Visualizer</CardTitle>
            <div className="text-sm font-normal">
              <p><strong>Time Complexity: O(1) Average, O(n) Worst Case</strong></p>
            </div>
            <CardDescription>
              Hash table search involves computing the hash of a key to locate the appropriate bucket and then searching through the bucket to find the key-value pair. This visualizer demonstrates how keys are searched within a hash table.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2 mb-4">
              <Input
                type="number"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                placeholder="Enter key to search"
                className="w-48"
                disabled={isSearching}
              />
              {isSearching ? (
                <Button onClick={stopSearch} variant="destructive">
                  Stop
                </Button>
              ) : (
                <Button onClick={search} disabled={isSearching || hashTable.flat().length === 0}>
                  Search
                </Button>
              )}
              <div className="flex-grow"></div>
              <Button onClick={generateHashTable} variant="outline" disabled={isSearching}>
                Generate New Hash Table
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
            <div className="space-y-4">
              {hashTable.map((bucket, bucketIndex) => (
                <div key={bucketIndex} className="flex items-center space-x-4">
                  <div className="w-24 h-12 flex bg-slate-100 items-center justify-center text-sm font-semibold border rounded">
                    Index {bucketIndex}
                  </div>
                  <div className="flex-grow flex space-x-2">
                    {bucket.length === 0 ? (
                      <div className="w-24 h-12 flex items-center justify-center text-sm text-gray-500 border rounded">Empty</div>
                    ) : (
                      bucket.map((entry, entryIndex) => {
                        let classNames = 'w-24 h-12 flex flex-col items-center justify-center text-sm font-medium border rounded '
                        if (found && entry.key === parseInt(searchKey)) {
                          classNames += 'border-green-500 bg-green-100'
                        } else if (bucketIndex === currentBucket && entryIndex === currentIndex) {
                          classNames += 'border-blue-500 bg-blue-100'
                        } else if (bucketIndex === currentBucket && entryIndex < currentIndex!) {
                          classNames += 'border-gray-500 bg-gray-100'
                        } else {
                          classNames += 'border-gray-300'
                        }
                        return (
                          <div
                            key={entryIndex}
                            className={classNames}
                          >
                            <div>Key: {entry.key}</div>
                            <div>Val: {entry.value}</div>
                          </div>
                        )
                      })
                    )}
                  </div>
                </div>
              ))}
            </div>
            {found && (
              <p className="mt-4 text-green-600">Key {searchKey} found in the hash table!</p>
            )}
            {!found && !isSearching && currentBucket !== null && currentIndex === hashTable[currentBucket].length - 1 && (
              <p className="mt-4 text-red-600">Key {searchKey} not found in the hash table.</p>
            )}
            {searchTime !== null && (
              <p className="mt-2 text-blue-600">Search time: {searchTime.toFixed(3)} seconds</p>
            )}
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3 text-center">Color Legend:</h2>
              <div className="flex flex-wrap justify-center space-x-6 text-sm">
                <span className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-blue-100 border-2 border-blue-500 rounded-full mr-2"></div>Current Entry
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