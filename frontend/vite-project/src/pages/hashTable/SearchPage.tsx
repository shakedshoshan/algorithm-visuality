import { CodeLanguageSwitcherV2 } from '../../components/code-language-switcher-v2';
import { hashTableSearchSnippets } from '../../CodeSnippets/hashTable/HashTableSearch';
import { HashTableSearchVisualizer } from '@/components/search/hashTableSearch/HashTbaleSearch';



const SearchPage = () => {
  return (
    <div className='container mx-auto px-2 py-4'>
      <h1 className='text-2xl font-semibold text-center mb-8 text-indigo-900'>Search Algorithm Visualizer</h1>
    
        <div className='flex flex-col md:flex-row gap-1 h-[500px]'>
          <div className='md:w-2/3 h-full'><HashTableSearchVisualizer /></div>
          <div className='md:w-1/3 h-full'><CodeLanguageSwitcherV2 codeSnippets={hashTableSearchSnippets} /></div>
        </div>
    
    </div>
  )
}

export default SearchPage