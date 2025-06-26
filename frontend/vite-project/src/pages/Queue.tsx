import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SortPage from './queue/SortPage';
import SearchPage from './queue/SearchPage';

const Queue = () => {
  const [queue, setQueue] = useState<number[]>([4, 2, 7, 1, 5, 3, 6]);
  const [activeTab, setActiveTab] = useState<'sort' | 'search'>('sort');

  const enqueue = (value: number) => {
    setQueue(prevQueue => [...prevQueue, value]);
  };

  const dequeue = () => {
    setQueue(prevQueue => prevQueue.slice(1));
  };

  return (
    <div className="flex flex-col items-center justify-center mb-96">
        <h2 className="text-4xl font-semibold text-indigo-700 mb-4">Queue Visualization</h2>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl flex flex-col items-center">
        
        <div className="mb-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200 w-full">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2 text-center">Queue Overview</h3>
          <p className="text-sm font-medium text-indigo-600 mb-2 text-center">
            A queue is a First-In-First-Out (FIFO) data structure that supports two main operations:
          </p>
          <ul className="list-none font-medium space-y-1 text-sm text-indigo-600 text-center">
            <li>• Enqueue: Adds an element to the rear of the queue</li>
            <li>• Dequeue: Removes an element from the front of the queue</li>
            <li>• Front: Views the front element without removing it</li>
          </ul>
          <p className="text-sm font-medium text-indigo-600 mt-4 text-center">
            This example demonstrates a queue of integers, where new elements are added to the rear and removed from the front.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-xs text-indigo-600 mb-2 font-semibold">Front (Dequeue)</div>
          <div className="flex items-center space-x-2">
            {queue.map((value, index) => (
              <div
                key={index}
                className={`w-16 h-12 ${index === 0 ? 'bg-indigo-300 border-2 border-indigo-600' : index === queue.length - 1 ? 'bg-green-300 border-2 border-green-600' : 'bg-indigo-100 border border-indigo-500'} rounded-md flex flex-col items-center justify-center`}
              >
                <div className={`font-bold text-sm ${index === 0 ? 'text-indigo-800' : index === queue.length - 1 ? 'text-green-800' : 'text-indigo-700'}`}>{value}</div>
                <div className={`text-xs ${index === 0 ? 'text-indigo-600 font-semibold' : index === queue.length - 1 ? 'text-green-600 font-semibold' : 'text-indigo-500'}`}>
                  {index === 0 ? 'Front' : index === queue.length - 1 ? 'Rear' : `${index}`}
                </div>
              </div>
            ))}
          </div>
          <div className="text-xs text-green-600 mt-2 font-semibold">Rear (Enqueue)</div>
        </div>
      </div>

      <div className="mt-8 flex space-x-4">
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          onClick={() => enqueue(Math.floor(Math.random() * 100))}
        >
          Enqueue
        </button>
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          onClick={dequeue}
          disabled={queue.length === 0}
        >
          Dequeue
        </button>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Common Queue Operations and Time Complexities</h2>
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
              <td className="border border-indigo-200 p-2">Enqueue</td>
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">Add an element to the rear of the queue</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Dequeue</td>
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">Remove an element from the front of the queue</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Front</td>
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">View the front element without removing it</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">IsEmpty</td>
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">Check if the queue is empty</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Size</td>
              <td className="border border-indigo-200 p-2">O(1)</td>
              <td className="border border-indigo-200 p-2">Get the number of elements in the queue</td>
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
          {activeTab === 'sort' ? <SortPage /> : <SearchPage />}
        </motion.div>
      </AnimatePresence>
      
    </div>
  );
};

export default Queue; 