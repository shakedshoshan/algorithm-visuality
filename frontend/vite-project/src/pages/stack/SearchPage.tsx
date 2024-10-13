import { CodeLanguageSwitcherV2 } from '../../components/code-language-switcher-v2';
import { stackSearchSnippets } from '../../CodeSnippets/stack/StackSearchSnippets';
import { StackSearchVisualizer } from '@/components/search/stackSearch/StackSearch';



const SearchPage = () => {
  return (
    <div className='container mx-auto px-2 py-4'>
      <h1 className='text-2xl font-semibold text-center mb-8 text-indigo-900'>Search Algorithm Visualizer</h1>
      <div className='flex flex-col gap-36'>
        <div className='flex flex-col md:flex-row gap-1 h-[500px]'>
          <div className='md:w-2/3 h-full'><StackSearchVisualizer /></div>
          <div className='md:w-1/3 h-full'><CodeLanguageSwitcherV2 codeSnippets={stackSearchSnippets} /></div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage