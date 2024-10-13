
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InsertPage from './hashTable/InsertPage';
import SearchPage from './hashTable/SearchPage';

const HashTable = () => {
  const hashTable: { [key: string]: number } = {
    'apple': 5,
    'banana': 7,
    'cherry': 3,
    'date': 8,
    'elderberry': 2,
    'fig': 6,
    'grape': 4,
    'honeydew': 9,
    'kiwi': 1,
    'lemon': 10,
    'mango': 11,
    'nectarine': 12
  };

  const [activeTab, setActiveTab] = useState<'insert' | 'search'>('insert');

  return (
    <div className="flex flex-col items-center justify-center mb-96">
        <h2 className="text-4xl font-semibold text-indigo-700 mb-4">Hash Table Visualization</h2>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl">
        
        <div className="mb-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Hash Table Overview</h3>
          <p className="text-sm font-medium text-indigo-600 mb-2">
            A hash table efficiently maps keys to values using a hash function. It enables fast data operations:
          </p>
          <ul className="list-none font-medium space-y-1 text-sm text-indigo-600">
            <li>• Hash Function: Converts keys to array indices</li>
            <li>• Array: Stores data in "buckets"</li>
            <li>• Collision Handling: Manages index conflicts</li>
          </ul>
          <p className="text-sm font-medium text-indigo-600 mt-4">
            This example uses <code className="bg-indigo-100 px-1 rounded">key.charCodeAt(0) % 5</code> as the hash function, 
            with 5 buckets (0-4) and chaining for collisions.
          </p>
        </div>
        <div className="relative w-[800px] h-[465px] border-2 border-indigo-500 rounded-lg overflow-auto">
          <div className="absolute inset-0 flex flex-col">
            <div className="flex items-center bg-indigo-100 p-2 border-b border-indigo-300">
              <div className="w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold text-indigo-700">Index</span>
              </div>
              <div className="flex-grow">
                <span className="font-bold text-indigo-700">Elements</span>
              </div>
            </div>
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="flex items-center border-b border-indigo-300 p-2">
                <div className="w-12 h-12 bg-indigo-200 flex items-center justify-center rounded-full mr-4 flex-shrink-0">
                  <span className="font-bold text-indigo-700">{i}</span>
                </div>
                <div className="flex-grow flex flex-wrap flex-row items-center">
                  {Object.entries(hashTable).filter(([key]) => key.charCodeAt(0) % 5 === i).map(([key, value], index) => (
                    <div key={index} className="flex items-center mb-2 mr-2">
                      <div className="w-32 bg-indigo-100 border border-indigo-400 rounded-md p-2">
                        <div className="text-xs text-indigo-700">Key: {key}</div>
                        <div className="font-bold text-sm text-indigo-800">Value: {value}</div>
                      </div>
                      {index < Object.entries(hashTable).filter(([k]) => k.charCodeAt(0) % 5 === i).length - 1 && (
                        <div className="w-4 h-0.5 bg-indigo-400 mx-2"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Common Hash Table Operations and Time Complexities</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-100">
              <th className="border border-indigo-200 p-2 text-left">Operation</th>
              <th className="border border-indigo-200 p-2 text-left">Time Complexity</th>
              <th className="border border-indigo-200 p-2 text-left">Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-indigo-200 p-2">Insert</td>
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">Add a key-value pair to the hash table</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Delete</td>
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">Remove a key-value pair from the hash table</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Search</td>
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">Retrieve a value by its key</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">IsEmpty</td>
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">Check if the hash table is empty</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Size</td>
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">Get the number of key-value pairs in the hash table</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="border-t border-gray-300 my-8 "></div>

      <div className='flex justify-center mb-8'>
        <button
          className={`px-32 py-1 mr-4 rounded-lg transition-all duration-300 ${
            activeTab === 'insert' 
              ? 'bg-indigo-600 text-white shadow-lg' 
              : 'bg-white text-indigo-600 hover:bg-indigo-100'
          }`}
          onClick={() => setActiveTab('insert')}
        >
          Insert
        </button>
        <button
          className={`px-32 py-3 mr-4 rounded-lg transition-all duration-300 ${
            activeTab === 'search' 
              ? 'bg-indigo-600 text-white shadow-lg' 
              : 'bg-white text-indigo-600 hover:bg-indigo-100'
          }`}
          onClick={() => setActiveTab('search')}
        >
          Search
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'insert' ? <InsertPage /> : <SearchPage />}
        </motion.div>
      </AnimatePresence>
      
    </div>
  );
};

export default HashTable;
