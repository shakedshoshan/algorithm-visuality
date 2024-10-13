import {CodeLanguageSwitcherV2} from '../../components/code-language-switcher-v2.tsx'
import { hashTableInsertSnippets } from '../../CodeSnippets/hashTable/hashTableInsertSnippets'
import { HashTableVisualizer } from '@/components/sort/hashTable/HashTableInsert'

const InsertPage = () => {
  return (
    <div className='container mx-auto px-2 py-4'>
      <h1 className='text-2xl font-semibold text-center mb-8 text-indigo-900'>Insertion Algorithm Visualizer</h1>
      <div className='flex flex-col gap-36'>
        <div className='flex flex-col md:flex-row gap-2 h-[500px]'>
          <div className='md:w-2/3 h-full'><HashTableVisualizer /></div>
          <div className='md:w-1/3 h-full'><CodeLanguageSwitcherV2 codeSnippets={hashTableInsertSnippets} /></div>
        </div>
      </div>
    </div>
  )
}

export default InsertPage