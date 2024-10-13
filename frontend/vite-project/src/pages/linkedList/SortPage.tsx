import {CodeLanguageSwitcherV2} from '../../components/code-language-switcher-v2.tsx'
import { BubbleSortLL } from '@/components/sort/linkedListSort/BubbleSortLL.tsx'
import { InsertionSortLL } from '@/components/sort/linkedListSort/InsertionSortLL.tsx'
import { QuickSortLL } from '@/components/sort/linkedListSort/QuickSortLL.tsx'
import { bubbleSortLLSnippets } from '../../CodeSnippets/linkedList/BubbleSortLLSnippets'
import { insertionSortLLSnippets } from '../../CodeSnippets/linkedList/InsertionSortLLSnippets'
import { quickSortLLSnippets } from '../../CodeSnippets/linkedList/QuickSortLLSnippets'

const SortingPage = () => {
  return (
    <div className='container mx-auto px-2 py-4'>
      <h1 className='text-2xl font-semibold text-center mb-8 text-indigo-900'>Sorting Algorithm Visualizer</h1>
      <div className='flex flex-col gap-36'>
        <div className='flex flex-col md:flex-row gap-2 h-[500px]'>
          <div className='md:w-2/3 h-full'><BubbleSortLL /></div>
          <div className='md:w-1/3 h-full'><CodeLanguageSwitcherV2 codeSnippets={bubbleSortLLSnippets} /></div>
        </div>
         <div className='flex flex-col md:flex-row gap-2 h-[500px]'>
          <div className='md:w-2/3 h-full'><InsertionSortLL /></div>
          <div className='md:w-1/3 h-full'><CodeLanguageSwitcherV2 codeSnippets={insertionSortLLSnippets} /></div>
        </div>
        <div className='flex flex-col md:flex-row gap-2 h-[500px]'>
          <div className='md:w-2/3 h-full'><QuickSortLL /></div>
          <div className='md:w-1/3 h-full'><CodeLanguageSwitcherV2 codeSnippets={quickSortLLSnippets} /></div>
        </div>
      </div>
    </div>
  )
}

export default SortingPage