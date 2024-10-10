
import {BubbleSort} from '../components/sort/BubbleSort.tsx'
import {InsertSort} from '../components/sort/InsertSort.tsx'
import {QuickSort} from '../components/sort/Quickort.tsx'
import {SelectionSort} from '../components/sort/SelectionSort.tsx'
import {CodeLanguageSwitcherV2} from '../components/code-language-switcher-v2'
import {bubbleSortSnippets} from '../CodeSnippets/BubbleSortCode'
import {insertSortSnippets} from '../CodeSnippets/InsertSort'
import {selectionSortSnippets} from '../CodeSnippets/SelectionSort' 
import {quickSortSnippets} from '../CodeSnippets/QuickSortCode'

const SortingPage = () => {
  return (
    <div className='container mx-auto px-2 py-4'>
      <h1 className='text-2xl font-bold text-center mb-4'>Sorting Algorithm Visualizer</h1>
      <div className='flex flex-col gap-48'>
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
      </div>
    </div>
  )
}

export default SortingPage