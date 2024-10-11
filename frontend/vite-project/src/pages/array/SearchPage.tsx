import {LinearSearchVisualizer} from '../../components/search/arraySearch/LinearSearch'
import {BinarySearchVisualizer} from '../../components/search/arraySearch/BinarySearch'
import {JumpSearchVisualizer} from '../../components/search/arraySearch/JumpSearch'
import {InterpolationSearchVisualizer} from '../../components/search/arraySearch/InterpolationSearch'
import {CodeLanguageSwitcherV2} from '../../components/code-language-switcher-v2'
import {linearSearchSnippets} from '../../CodeSnippets/array/LinearSearchSnippets'
import {binarySearchSnippets} from '../../CodeSnippets/array/BinarySearchSnippets'
import {jumpSearchSnippets} from '../../CodeSnippets/array/JumpSearchSnippets'   
import {interpolationSearchSnippets} from '../../CodeSnippets/array/InterpolationSearchSnippets'

const SearchPage = () => {
  return (
    <div className='container mx-auto px-2 py-4'>
      <h1 className='text-2xl font-semibold text-center mb-8 text-indigo-900'>Search Algorithm Visualizer</h1>
      <div className='flex flex-col gap-36'>
        <div className='flex flex-col md:flex-row gap-2 h-[500px]'>
          <div className='md:w-2/3 h-full'><LinearSearchVisualizer /></div>
          <div className='md:w-1/3 h-full'><CodeLanguageSwitcherV2 codeSnippets={linearSearchSnippets} /></div>
        </div>
        <div className='flex flex-col md:flex-row gap-2 h-[500px]'>
          <div className='md:w-2/3 h-full'><BinarySearchVisualizer /></div>
          <div className='md:w-1/3 h-full'><CodeLanguageSwitcherV2 codeSnippets={binarySearchSnippets} /></div>
        </div>
        <div className='flex flex-col md:flex-row gap-2 h-[500px]'>
          <div className='md:w-2/3 h-full'><JumpSearchVisualizer /></div>
          <div className='md:w-1/3 h-full'><CodeLanguageSwitcherV2 codeSnippets={jumpSearchSnippets} /></div>
        </div>
        <div className='flex flex-col md:flex-row gap-2 h-[500px]'>
          <div className='md:w-2/3 h-full'><InterpolationSearchVisualizer /></div>
          <div className='md:w-1/3 h-full'><CodeLanguageSwitcherV2 codeSnippets={interpolationSearchSnippets} /></div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage