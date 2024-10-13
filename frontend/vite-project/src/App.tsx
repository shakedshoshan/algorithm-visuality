    import './App.css'
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
    import Array from './pages/Array'
    import LinkedList from './pages/LinkedList'
    import Stack from './pages/Stack'
    import HashTable from './pages/HashTable'
    import Header from './components/Header'
    import Home from './pages/Home'
    
    function App() {
      return (
        <Router>
          <div className='bg-slate-100 min-h-screen p-8 flex flex-col'>
            <Header />
            {/* <h1 className='text-4xl font-bold text-center m-10 text-indigo-700'>Welcome to the Algorithm Visualizer</h1> */}
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/array" element={<Array />} />
              <Route path="/linked-list" element={<LinkedList />} />
              <Route path="/stack" element={<Stack />} />
              <Route path="/hash-table" element={<HashTable />} />
            </Routes>
          </div>
        </Router>
      )
    }
    
    export default App
