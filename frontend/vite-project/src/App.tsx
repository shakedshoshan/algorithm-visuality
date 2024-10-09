import './App.css'
import {BubbleSort} from './components/BubbleSort'
import {InsertSort} from './components/InsertSort'
import { QuickSort } from './components/Quickort'
import {SelectionSort} from './components/SelectionSort'
function App() {


  return (
    <div className='items-center justify-center flex flex-col gap-4 mt-10'>
      <h1 className='text-4xl font-bold'>Sorting Algorithm Visualizer</h1>
      <div className='items-center justify-center grid grid-cols-1 gap-10 mt-10' >
        <BubbleSort />
        <InsertSort />
        <SelectionSort />
        <QuickSort />
      </div>
    </div>
  )
}

export default App
