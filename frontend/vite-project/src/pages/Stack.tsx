import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SortingPage from './stack/SortPage';
import SearchPage from './stack/SearchPage';

const Stack = () => {
  const [stack, setStack] = useState<number[]>([4, 2, 7, 1, 5, 3, 6]);
  const [activeTab, setActiveTab] = useState<'sort' | 'search'>('sort');

  const push = (value: number) => {
    setStack(prevStack => [...prevStack, value]);
  };

  const pop = () => {
    setStack(prevStack => prevStack.slice(0, -1));
  };

  return (
    <div className="flex flex-col items-center justify-center mb-96">
        <h2 className="text-4xl font-semibold text-indigo-700 mb-4">Stack Visualization</h2>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl flex flex-col items-center">
        
        <div className="mb-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200 w-full">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2 text-center">Stack Overview</h3>
          <p className="text-sm font-medium text-indigo-600 mb-2 text-center">
            A stack is a Last-In-First-Out (LIFO) data structure that supports two main operations:
          </p>
          <ul className="list-none font-medium space-y-1 text-sm text-indigo-600 text-center">
            <li>• Push: Adds an element to the top of the stack</li>
            <li>• Pop: Removes the top element from the stack</li>
            <li>• Peek: Views the top element without removing it</li>
          </ul>
          <p className="text-sm font-medium text-indigo-600 mt-4 text-center">
            This example demonstrates a stack of integers, where new elements are added to the top and removed from the top.
          </p>
        </div>
        <div className="relative w-48 h-96 border-2 border-t-0 border-indigo-500 rounded-sm flex items-center justify-center overflow-hidden">
          <div className="flex flex-col-reverse items-center">
            {stack.map((value, index) => (
              <div
                key={index}
                className={`w-40 h-12 ${index === stack.length - 1 ? 'bg-indigo-300 border-2 border-indigo-600' : 'bg-indigo-100 border border-indigo-500'} rounded-md flex flex-col items-center justify-center mb-1`}
              >
                <div className={`font-bold text-sm ${index === stack.length - 1 ? 'text-indigo-800' : 'text-indigo-700'}`}>Val: {value}</div>
                {index === stack.length - 1 ? (
                  <div className="text-indigo-600 text-xs font-semibold">Top</div>
                ) : (
                  <div className="text-indigo-500 text-xs">Idx: {index}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex space-x-4">
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          onClick={() => push(Math.floor(Math.random() * 100))}
        >
          Push
        </button>
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          onClick={pop}
        >
          Pop
        </button>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Common Stack Operations and Time Complexities</h2>
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
              <td className="border border-indigo-200 p-2">Push</td>
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">Add an element to the top of the stack</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Pop</td>
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">Remove the top element from the stack</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Peek</td>
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">View the top element without removing it</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">IsEmpty</td>
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">Check if the stack is empty</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Size</td>
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">Get the number of elements in the stack</td>
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

export default Stack;