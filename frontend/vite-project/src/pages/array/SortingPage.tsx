
import {BubbleSort} from '../../components/sort/BubbleSort.tsx'
import {InsertSort} from '../../components/sort/InsertSort.tsx'
import {QuickSort} from '../../components/sort/Quickort.tsx'
import {SelectionSort} from '../../components/sort/SelectionSort.tsx'
import {CodeLanguageSwitcherV2} from '../../components/code-language-switcher-v2.tsx'
import {bubbleSortSnippets} from '../../CodeSnippets/array/BubbleSortCode.ts'
import {insertSortSnippets} from '../../CodeSnippets/array/InsertSort.ts'
import {selectionSortSnippets} from '../../CodeSnippets/array/SelectionSort.ts' 
import {quickSortSnippets} from '../../CodeSnippets/array/QuickSortCode.ts'

const SortingPage = () => {
  return (
    <div className='container mx-auto px-2 py-4'>
      <h1 className='text-2xl font-semibold text-center mb-8 text-indigo-900'>Sorting Algorithm Visualizer</h1>
      <div className='flex flex-col gap-36'>
        <div className='flex flex-col md:flex-row gap-2 h-[500px]'>
          <div className='md:w-2/3 h-full'><BubbleSort /></div>
          <div className='md:w-1/3 h-full'><CodeLanguageSwitcherV2 codeSnippets={bubbleSortSnippets} /></div>
        </div>
        <div className='flex flex-col md:flex-row gap-2 h-[500px]'>
          <div className='md:w-2/3 h-full'><InsertSort /></div>
          <div className='md:w-1/3 h-full'><CodeLanguageSwitcherV2 codeSnippets={insertSortSnippets} /></div>
        </div>
        <div className='flex flex-col md:flex-row gap-2 h-[500px]'>
          <div className='md:w-2/3 h-full'><QuickSort /></div>
          <div className='md:w-1/3 h-full'><CodeLanguageSwitcherV2 codeSnippets={quickSortSnippets} /></div>
        </div>
        <div className='flex flex-col md:flex-row gap-2 h-[500px]'>
          <div className='md:w-2/3 h-full'><SelectionSort /></div>
          <div className='md:w-1/3 h-full'><CodeLanguageSwitcherV2 codeSnippets={selectionSortSnippets} /></div>
        </div>
      </div>
    </div>
  )
}

export default SortingPage