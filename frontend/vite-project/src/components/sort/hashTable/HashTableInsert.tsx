    // 'use client'
    
    import { useState, useEffect, useRef } from 'react'
    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
    
    interface HashTableEntry {
      key: number;
      value: string;
    }
    
    export function HashTableVisualizer() {
      const [hashTable, setHashTable] = useState<HashTableEntry[][]>([])
      const [insertKey, setInsertKey] = useState('')
      const [insertValue, setInsertValue] = useState('')
      const [deleteKey, setDeleteKey] = useState('')
      const [currentBucket, setCurrentBucket] = useState<number | null>(null)
      const [currentIndex, setCurrentIndex] = useState<number | null>(null)
      const [found, setFound] = useState(false)
      const [isProcessing, setIsProcessing] = useState(false)
      const [animationSpeed, setAnimationSpeed] = useState(500)
      const stopProcessRef = useRef(false)
      const [processTime, setProcessTime] = useState<number | null>(null)
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
        resetState()
      }
    
      const resetState = () => {
        setCurrentBucket(null)
        setCurrentIndex(null)
        setFound(false)
        setProcessTime(null)
      }
    
      const hashFunction = (key: number) => {
        return key % numberOfBuckets
      }
    
      const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    
      const stopProcess = () => {
        stopProcessRef.current = true
        setIsProcessing(false)
      }
    
      const insert = async () => {
        const keyToInsert = parseInt(insertKey)
        if (isNaN(keyToInsert)) {
          alert("Please enter a valid number for the key.")
          return
        }
        if (!insertValue) {
          alert("Please enter a value.")
          return
        }
        setIsProcessing(true)
        resetState()
        stopProcessRef.current = false
    
        const startTime = performance.now()
        const bucketIndex = hashFunction(keyToInsert)
        setCurrentBucket(bucketIndex)
    
        // Simulate insertion animation
        await delay(animationSpeed)
    
        // Check for duplicate key
        for (let i = 0; i < hashTable[bucketIndex].length; i++) {
          if (stopProcessRef.current) {
            setIsProcessing(false)
            return
          }
          setCurrentIndex(i)
          await delay(animationSpeed)
    
          if (hashTable[bucketIndex][i].key === keyToInsert) {
            alert(`Key ${keyToInsert} already exists. Insertion aborted.`)
            setIsProcessing(false)
            const endTime = performance.now()
            setProcessTime((endTime - startTime) / 1000)
            return
          }
        }
    
        // Insert the new entry
        setHashTable(prev => {
          const updated = [...prev]
          updated[bucketIndex] = [...updated[bucketIndex], { key: keyToInsert, value: insertValue }]
          return updated
        })
    
        setCurrentIndex(hashTable[bucketIndex].length)
        setFound(true)
        await delay(animationSpeed)
    
        setIsProcessing(false)
        const endTime = performance.now()
        setProcessTime((endTime - startTime) / 1000)
    
        // Clear input fields after successful insertion
        setInsertKey('')
        setInsertValue('')
      }
    
      const remove = async () => {
        const keyToDelete = parseInt(deleteKey)
        if (isNaN(keyToDelete)) {
          alert("Please enter a valid number to delete.")
          return
        }
        setIsProcessing(true)
        setFound(false)
        resetState()
        stopProcessRef.current = false
    
        const startTime = performance.now()
        const bucketIndex = hashFunction(keyToDelete)
        setCurrentBucket(bucketIndex)
    
        for (let i = 0; i < hashTable[bucketIndex].length; i++) {
          if (stopProcessRef.current) {
            break
          }
          setCurrentIndex(i)
          await delay(animationSpeed)
    
          if (hashTable[bucketIndex][i].key === keyToDelete) {
            setHashTable(prev => {
              const updated = [...prev]
              updated[bucketIndex] = updated[bucketIndex].filter((_, index) => index !== i)
              return updated
            })
            setFound(true)
            setIsProcessing(false)
            const endTime = performance.now()
            setProcessTime((endTime - startTime) / 1000)
            return
          }
        }
    
        setIsProcessing(false)
        const endTime = performance.now()
        setProcessTime((endTime - startTime) / 1000)
      }
    
      return (
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="font-bold text-2xl">Hash Table Visualizer</CardTitle>
            <div className="text-sm font-normal">
              <p><strong>Operations: Insert (O(1)), Delete (O(1))</strong></p>
            </div>
            <CardDescription>
              This visualizer allows you to insert and delete keys in a hash table. It demonstrates how these operations work within a hash table, including handling collisions using chaining.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4 mb-4">
              {/* Insert Section */}
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  value={insertKey}
                  onChange={(e) => setInsertKey(e.target.value)}
                  placeholder="Key to insert"
                  className="w-48"
                  disabled={isProcessing}
                />
                <Input
                  type="text"
                  value={insertValue}
                  onChange={(e) => setInsertValue(e.target.value)}
                  placeholder="Value to insert"
                  className="w-48"
                  disabled={isProcessing}
                />
                {isProcessing ? (
                  <Button onClick={stopProcess} variant="destructive">
                    Stop
                  </Button>
                ) : (
                  <Button onClick={insert} disabled={isProcessing}>
                    Insert
                  </Button>
                )}
              </div>
              {/* Delete Section */}
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  value={deleteKey}
                  onChange={(e) => setDeleteKey(e.target.value)}
                  placeholder="Key to delete"
                  className="w-48"
                  disabled={isProcessing}
                />
                {isProcessing ? (
                  <Button onClick={stopProcess} variant="destructive">
                    Stop
                  </Button>
                ) : (
                  <Button onClick={remove} disabled={isProcessing || hashTable.flat().length === 0}>
                    Delete
                  </Button>
                )}
              </div>
              <div className="flex-grow"></div>
              <Button onClick={generateHashTable} variant="outline" disabled={isProcessing}>
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
                disabled={isProcessing}
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
                        if (found && entry.key === parseInt(insertKey)) {
                          classNames += 'border-green-500 bg-green-100'
                        } else if (currentBucket === bucketIndex && currentIndex === entryIndex) {
                          classNames += 'border-blue-500 bg-blue-100'
                        } else if (currentBucket === bucketIndex && entryIndex < (currentIndex || 0)) {
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
            {(found && insertKey) && (
              <p className="mt-4 text-green-600">Insertion successful!</p>
            )}
            {(!found && !isProcessing && currentBucket !== null && currentIndex === hashTable[currentBucket].length) && (
              <p className="mt-4 text-green-600">Key inserted successfully.</p>
            )}
            {processTime !== null && (
              <p className="mt-2 text-blue-600">Operation time: {processTime.toFixed(3)} seconds</p>
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
                  <div className="w-4 h-4 bg-green-100 border-2 border-green-500 rounded-full mr-2"></div>Operation Successful
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
    )
}