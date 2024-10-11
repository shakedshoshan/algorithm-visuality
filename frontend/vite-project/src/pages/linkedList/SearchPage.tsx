
import RecursiveSearchVisualizer from '../../components/search/linkedListSearch/RecursiveSearch';
import IterativeSearchVisualizer from '../../components/search/linkedListSearch/IterativeSearch';

import { CodeLanguageSwitcherV2 } from '../../components/code-language-switcher-v2';
import { iterationSearchSnippets } from '../../CodeSnippets/linkedList/IterationSearchSnippets';
import { recursiveSearchSnippets } from '../../CodeSnippets/linkedList/RecursiveSearchSnippets';



const SearchPage = () => {
  return (
    <div className='container mx-auto px-2 py-4'>
      <h1 className='text-2xl font-semibold text-center mb-8 text-indigo-900'>Search Algorithm Visualizer</h1>
      <div className='flex flex-col gap-36'>
        <div className='flex flex-col md:flex-row gap-1 h-[500px]'>
          <div className='md:w-2/3 h-full'><IterativeSearchVisualizer /></div>
          <div className='md:w-1/3 h-full'><CodeLanguageSwitcherV2 codeSnippets={iterationSearchSnippets} /></div>
        </div>
        <div className='flex flex-col md:flex-row gap-1 h-[500px]'>
          <div className='md:w-2/3 h-full'><RecursiveSearchVisualizer /></div>
          <div className='md:w-1/3 h-full'><CodeLanguageSwitcherV2 codeSnippets={recursiveSearchSnippets} /></div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage