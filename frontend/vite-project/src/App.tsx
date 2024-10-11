    import './App.css'
    import Array from './pages/Array';  
    import LinkedList from './pages/LinkedList';
    import { StackSearchVisualizer } from './components/search/stackSearch/StackSearch';
    import { StackSortVisualizer } from './components/sort/stackSort/StackSort';
    function App() {
      return (
        <div className='bg-slate-100 min-h-screen p-8'>
          <h1 className='text-4xl font-bold text-center m-10 text-indigo-700'>Welcome to the Algorithm Visualizer</h1>

          {/* <Array /> */}
          {/* <LinkedList /> */}
          {/* <StackSearchVisualizer /> */}
          <StackSortVisualizer />
    
        </div>
      )
    }
    
    export default App
