    'use client'
    
    import { useState, useEffect, useRef } from 'react'
    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
    
    interface ListNode {
      value: number;
      next: number | null;
    }
    
    const RecursiveSearchVisualizer = () => {
      const [linkedList, setLinkedList] = useState<ListNode[]>([])
      const [searchValue, setSearchValue] = useState('')
      const [currentNode, setCurrentNode] = useState<number | null>(null)
      const [found, setFound] = useState(false)
      const [isSearching, setIsSearching] = useState(false)
      const [animationSpeed, setAnimationSpeed] = useState(500)
      const stopSearchRef = useRef(false)
      const [searchTime, setSearchTime] = useState<number | null>(null)
    
      useEffect(() => {
        generateLinkedList()
      }, [])
    
      const generateLinkedList = () => {
        const nodes = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100))
        const newLinkedList: ListNode[] = nodes.map((value, index) => ({
          value,
          next: index < nodes.length - 1 ? index + 1 : null
        }))
        setLinkedList(newLinkedList)
        setCurrentNode(null)
        setFound(false)
        setSearchTime(null)
      }
    
      const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    
      const recursiveSearch = async (index: number, target: number, startTime: number): Promise<void> => {
        if (stopSearchRef.current) {
          setIsSearching(false)
          return
        }
    
        if (index === null || index === undefined || index >= linkedList.length) {
          setIsSearching(false)
          const endTime = performance.now()
          setSearchTime((endTime - startTime) / 1000)
          return
        }
    
        setCurrentNode(index)
        await delay(animationSpeed)
    
        if (linkedList[index].value === target) {
          setFound(true)
          setIsSearching(false)
          const endTime = performance.now()
          setSearchTime((endTime - startTime) / 1000)
          return
        }
    
        if (linkedList[index].next !== null) {
          await recursiveSearch(linkedList[index].next, target, startTime)
        } else {
          setIsSearching(false)
          const endTime = performance.now()
          setSearchTime((endTime - startTime) / 1000)
        }
      }
    
      const search = async () => {
        const target = parseInt(searchValue)
        if (isNaN(target)) {
          alert("Please enter a valid number to search.")
          return
        }
        setIsSearching(true)
        setFound(false)
        setCurrentNode(null)
        setSearchTime(null)
        stopSearchRef.current = false
    
        const startTime = performance.now()
        await recursiveSearch(0, target, startTime)
      }
    
      const stopSearch = () => {
        stopSearchRef.current = true
        setIsSearching(false)
      }
    
      return (
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="font-bold text-2xl">Recursive Search Visualizer for Linked List</CardTitle>
            <div className="text-sm font-normal">
              <p><strong>Time Complexity: O(n)</strong></p>
              <p><strong>Space Complexity: O(n)</strong></p>
            </div>
            <CardDescription>
              Recursive search in a linked list traverses each node by making recursive calls until the target value is found or the end of the list is reached. It provides a clear illustration of the recursive approach.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2 mb-4">
              <Input
                type="number"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Enter number to search"
                className="w-48"
                disabled={isSearching}
              />
              {isSearching ? (
                <Button onClick={stopSearch} variant="destructive">
                  Stop
                </Button>
              ) : (
                <Button onClick={search} disabled={isSearching || linkedList.length === 0}>
                  Search
                </Button>
              )}
              <div className="flex-grow"></div>
              <Button onClick={generateLinkedList} variant="outline" disabled={isSearching}>
                Generate New Linked List
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
            <div className="flex space-x-1 mb-4 overflow-x-auto">
              {linkedList.map((node, index) => {
                let classNames = 'w-16 h-16 rounded-md flex flex-col items-center justify-center text-sm font-medium border-2 '
                if (found && node.value === parseInt(searchValue)) {
                  classNames += 'border-green-500 bg-green-100'
                } else if (index === currentNode) {
                  classNames += 'border-blue-500 bg-blue-100'
                } else if (currentNode !== null && index < currentNode) {
                  classNames += 'border-gray-500 bg-gray-100'
                } else {
                  classNames += 'border-gray-300'
                }
                return (
                  <div key={index} className="flex items-center">
                    <div className={classNames}>
                      <div>Val: {node.value}</div>
                      <div className="text-xs">
                        Next: {node.next !== null ? `Node ${node.next}` : 'null'}
                      </div>
                    </div>
                    {index < linkedList.length - 1 && (
                      <svg
                        className="w-6 h-6 text-indigo-500 mx-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                )
              })}
            </div>
            {found && (
              <p className="mt-4 text-green-600">Value {searchValue} found in the linked list!</p>
            )}
            {!found && !isSearching && currentNode === null && linkedList.length > 0 && (
              <p className="mt-4 text-red-600">Value {searchValue} not found in the linked list.</p>
            )}
            {searchTime !== null && (
              <p className="mt-2 text-blue-600">Search time: {searchTime.toFixed(3)} seconds</p>
            )}
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3 text-center">Color Legend:</h2>
              <div className="flex flex-wrap justify-center space-x-6 text-sm">
                <span className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-blue-100 border-2 border-blue-500 rounded-full mr-2"></div>Current Node
                </span>
                <span className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-gray-100 border-2 border-gray-500 rounded-full mr-2"></div>Checked Nodes
                </span>
                <span className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-green-100 border-2 border-green-500 rounded-full mr-2"></div>Found Node
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )
    }
    
    export default RecursiveSearchVisualizer