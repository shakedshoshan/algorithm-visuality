import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-csharp'

const languages = [
  { id: 'javascript', name: 'JavaScript', color: 'text-yellow-400' },
  { id: 'python', name: 'Python', color: 'text-blue-400' },
  { id: 'java', name: 'Java', color: 'text-red-400' },
  { id: 'c', name: 'C ', color: 'text-green-400' },
]

export function CodeLanguageSwitcherV2({ codeSnippets }: { codeSnippets: Record<string, string> }) {
  // console.log(codeSnippets.javascript)
  const [activeTab, setActiveTab] = useState(languages[0].id)

  useEffect(() => {
    Prism.highlightAll()
  }, [activeTab])

  return (
    <div className="w-full max-w-1xl mx-auto p-2 bg-gray-100 rounded-xl shadow-lg">
      <div className="mb-4 flex space-x-4 border-b border-gray-700">
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setActiveTab(lang.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 relative ${
              activeTab === lang.id ? lang.color : 'text-gray-800 hover:text-gray-400'
            }`}
          >
            {lang.name}
            {activeTab === lang.id && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-current"
                layoutId="underline"
              />
            )}
          </button>
        ))}
      </div>
      <div className="bg-gray-800 rounded-lg p-4 overflow-hidden">
        <pre className="text-sm h-[400px] overflow-y-auto">
          <code className={`language-${activeTab} font-mono`}>
            {codeSnippets[activeTab]}
          </code>
        </pre>
      </div>
    </div>
  )
}