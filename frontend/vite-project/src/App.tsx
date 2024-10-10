    import './App.css'
    import { useState } from 'react'
    import { motion, AnimatePresence } from 'framer-motion'
    import SortingPage from './pages/SortingPage'
    import SearchPage from './pages/SearchPage'
    
    function App() {
      const [activeTab, setActiveTab] = useState<'sort' | 'search'>('sort')
    
      return (
        <div className='bg-slate-100 min-h-screen p-8'>
          <h1 className='text-4xl font-bold text-center m-10 text-indigo-700'>Welcome to the Algorithm Visualizer</h1>
          
          <div className='flex justify-center mb-8'>
            <button
              className={`px-16 py-1 mr-4 rounded-lg transition-all duration-300 ${
                activeTab === 'sort' 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-white text-indigo-600 hover:bg-indigo-100'
              }`}
              onClick={() => setActiveTab('sort')}
            >
              Sort
            </button>
            <button
              className={`px-16 py-3 mr-4 rounded-lg transition-all duration-300 ${
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
      )
    }
    
    export default App
