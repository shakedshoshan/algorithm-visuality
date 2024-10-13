import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SortingPage from './linkedList/SortPage';
import SearchPage from './linkedList/SearchPage';

  // Start of Selection
  const LinkedListComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'search' | 'sort'>('search');
  
    return (
      <div className="flex flex-col items-center justify-center mb-8">
        <h2 className="text-4xl font-semibold text-indigo-700 mb-4">Linked List Visualization</h2>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl">
              
              <div className="mb-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Linked List Overview</h3>
          <p className="text-sm font-medium text-indigo-600 mb-2">
            A linked list is a linear data structure where elements are stored in nodes. Each node contains a data field and a reference (or link) to the next node in the sequence. Key features include:
          </p>
          <ul className="list-none font-medium space-y-1 text-sm text-indigo-600">
            <li>• Dynamic Size: Can grow or shrink in size during execution</li>
            <li>• Efficient Insertion/Deletion: Can be done in constant time O(1)</li>
            <li>• No Random Access: Elements are accessed sequentially</li>
          </ul>
          <p className="text-sm font-medium text-indigo-600 mt-4">
            This example shows a singly linked list where each node points to the next node, and the last node points to <code className="bg-indigo-100 px-1 rounded">null</code>.
          </p>
        </div>
              <div className="flex items-center space-x-4 justify-center">
                
                {/* Example Linked List: 4 → 2 → 7 → 1 → 5 → 3 → 6 → 9 → 8 → 0 */}
                { [4, 2, 7, 1, 5, 3, 6].map((value, index, array) => (
                  <React.Fragment key={index}>
                    <div className="w-16 h-16 bg-indigo-100 border-2 border-indigo-500 rounded-md flex flex-col items-center justify-center">
                      <div className="text-indigo-700 font-bold text-lg">Val: {value}</div>
                      <div className="text-indigo-500 text-sm">
                        Next: {index < array.length - 1 ? array[index + 1] : 'null'}
                      </div>
                    </div>
                    { index < array.length - 1 && (
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
                  </React.Fragment>
                )) }
              </div>
              <div className="flex items-center space-x-6 justify-center mt-2">
                { [4, 2, 7, 1, 5, 3, 6].map(( index) => (
                  <div key={index} className="w-24 text-center text-sm text-indigo-600">
                    Node {index}
                  </div>
                )) }
              </div>
            </div>
  
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">Common Linked List Operations and Time Complexities</h2>
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
                <td className="border border-indigo-200 p-2">Access by index</td>
                <td className="border border-indigo-200 p-2">O(n)</td>
                <td className="border border-indigo-200 p-2">Need to traverse the list to reach the desired index</td>
              </tr>
              <tr>
                <td className="border border-indigo-200 p-2">Search</td>
                <td className="border border-indigo-200 p-2">O(n)</td>
                <td className="border border-indigo-200 p-2">Need to traverse the list to find the element</td>
              </tr>
              <tr>
                <td className="border border-indigo-200 p-2">Insert at beginning</td>
                <td className="border border-indigo-200 p-2">O(1)</td>
                <td className="border border-indigo-200 p-2">Directly insert a new node at the head</td>
              </tr>
              <tr>
                <td className="border border-indigo-200 p-2">Insert/Delete at end</td>
                <td className="border border-indigo-200 p-2">O(n)</td>
                <td className="border border-indigo-200 p-2">Need to traverse to the end of the list</td>
              </tr>
              <tr>
                <td className="border border-indigo-200 p-2">Delete by reference</td>
                <td className="border border-indigo-200 p-2">O(1)</td>
                <td className="border border-indigo-200 p-2">Directly remove a node when reference is provided</td>
              </tr>
            </tbody>
          </table>
        </div>

 

      <div className="border-t border-gray-300 my-8 "></div>

      <div className='flex justify-center mb-8'>
        <button
          className={`px-32 py-1 mr-4 rounded-lg transition-all duration-300 ${
            activeTab === 'sort' 
              ? 'bg-indigo-600 text-white shadow-lg' 
              : 'bg-white text-indigo-600 hover:bg-indigo-100'
          }`}
          onClick={() => setActiveTab('sort')}
        >
          Sort
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
          {activeTab === 'sort' ? <SortingPage /> : <SearchPage />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LinkedListComponent;