import './App.css'
import {BubbleSort} from './components/sort/BubbleSort'
import {InsertSort} from './components/sort/InsertSort'
import { QuickSort } from './components/sort/Quickort'
import {SelectionSort} from './components/sort/SelectionSort'
import {CodeLanguageSwitcherV2} from './components/code-language-switcher-v2'
import {bubbleSortSnippets} from './CodeSnippets/BubbleSortCode'
import {insertSortSnippets} from './CodeSnippets/InsertSort'
import {selectionSortSnippets} from './CodeSnippets/SelectionSort'
import {quickSortSnippets} from './CodeSnippets/QuickSortCode'
import { LinearSearchVisualizer } from './components/search/LinearSearch'
import { BinarySearchVisualizer } from './components/search/BinarySearch'
import { JumpSearchVisualizer } from './components/search/JumpSearch'
import { InterpolationSearchVisualizer } from './components/search/InterpolationSearch'
function App() {


  return (
    <div className='container mx-auto px-2 py-4'>
      <h1 className='text-2xl font-bold text-center mb-4'>Sorting Algorithm Visualizer</h1>
      {/* <div className='flex flex-col gap-4'>
        <div className='flex flex-col md:flex-row gap-2'>
          <BubbleSort />
          <div className='md:w-1/3'><CodeLanguageSwitcherV2 codeSnippets={bubbleSortSnippets} /></div>
        </div>
        <div className='flex flex-col md:flex-row gap-2'>
          <InsertSort />
          <div className='md:w-1/3'><CodeLanguageSwitcherV2 codeSnippets={insertSortSnippets} /></div>
        </div>
        <div className='flex flex-col md:flex-row gap-2'>
          <SelectionSort />
          <div className='md:w-1/3'><CodeLanguageSwitcherV2 codeSnippets={selectionSortSnippets} /></div>
        </div>
        <div className='flex flex-col md:flex-row gap-2'>
          <QuickSort />
          <div className='md:w-1/3'><CodeLanguageSwitcherV2 codeSnippets={quickSortSnippets} /></div>
        </div>
      </div> */}
      <LinearSearchVisualizer />
      <BinarySearchVisualizer />
      <JumpSearchVisualizer />
      <InterpolationSearchVisualizer />
    </div>
  )
}

export default App
