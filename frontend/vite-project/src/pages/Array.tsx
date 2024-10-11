import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SortingPage from './array/SortingPage';
import SearchPage from './array/SearchPage';

const ArrayComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sort' | 'search'>('sort');

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Array Visualization</h2>
        <div className="flex items-center space-x-2 justify-center">
          {[4, 2, 7, 1, 5, 3, 6, 9, 8, 0].map((value, index) => (
            <div
              key={index}
              className="w-12 h-12 bg-indigo-500 rounded-sm flex items-center justify-center text-white font-bold text-base border border-indigo-600"
            >
              {value}
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-2 justify-center mt-2">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
            <div key={index} className="w-12 text-center text-sm text-gray-600">
              [{index}]
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Common Array Operations and Time Complexities</h2>
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
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">Direct access to any element using its index</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Search (unsorted)</td>
              <td className="border border-indigo-200 p-2">O(n)</td>
              <td className="border border-indigo-200 p-2">Need to check each element in worst case</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Insert/Delete at end</td>
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">No need to shift elements</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Insert/Delete at beginning</td>
              <td className="border border-indigo-200 p-2">O(n)</td>
              <td className="border border-indigo-200 p-2">Need to shift all elements</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Sort</td>
              <td className="border border-indigo-200 p-2">O(n log n)</td>
              <td className="border border-indigo-200 p-2">Best average case for comparison-based sorting</td>
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

export default ArrayComponent;