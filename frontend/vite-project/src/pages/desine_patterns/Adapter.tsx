import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeLanguageSwitcherV2 } from '../../components/code-language-switcher-v2';
import { adapterSnippets } from '../../CodeSnippets/designPatterns/AdapterSnippets';

const Adapter = () => {
  const [activeTab, setActiveTab] = useState<'implementation' | 'examples'>('implementation');

  return (
    <div className="flex flex-col items-center justify-start mb-8">
      <div className="flex items-center w-full justify-center mb-4">
        <img src="https://refactoring.guru/images/patterns/cards/adapter-mini-2x.png" alt="Adapter Pattern Diagram" className="h-16 mr-4" />
        <h2 className="text-4xl font-semibold text-indigo-700">Adapter Pattern</h2>
      </div>
      
      {/* Overview Card */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl">
        <div className="mb-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Adapter Pattern Overview</h3>
          <p className="text-sm font-medium text-indigo-600 mb-2">
            The Adapter Pattern allows objects with incompatible interfaces to work together by wrapping an existing class with a new interface.
          </p>
          <ul className="list-none font-medium space-y-1 text-sm text-indigo-600">
            <li>• <strong>Structural Pattern</strong>: Acts as a bridge between two incompatible interfaces</li>
            <li>• <strong>Intent</strong>: Convert the interface of a class into another interface clients expect</li>
            <li>• <strong>Also Known As</strong>: Wrapper Pattern</li>
          </ul>
          <p className="text-sm font-medium text-indigo-600 mt-4">
            Adapters make classes work together that couldn't otherwise because of incompatible interfaces, like using <code className="bg-indigo-100 px-1 rounded">adapter.request()</code> to call <code className="bg-indigo-100 px-1 rounded">adaptee.specificRequest()</code>
          </p>
        </div>

        <div className="flex flex-col items-center mt-10">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Real-World Examples</h3>
          <p className="text-sm font-medium text-indigo-600 mb-4">
          When you travel from the US to Europe for the first time, you may get a surprise when trying to charge your laptop. The power plug and sockets standards are different in different countries. That’s why your US plug won’t fit a German socket. The problem can be solved by using a power plug adapter that has the American-style socket and the European-style plug.
          </p>
          <img src="https://refactoring.guru/images/patterns/content/adapter/adapter-comic-1-en-2x.png" alt="Adapter Pattern Diagram" className="mt-4 w-1/2 h-1/2" />
         
        </div>

      </div>

      {/* Characteristics Table */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Adapter Characteristics</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-100">
              <th className="border border-indigo-200 p-2 text-left">Aspect</th>
              <th className="border border-indigo-200 p-2 text-left">Details</th>
              <th className="border border-indigo-200 p-2 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-indigo-200 p-2">Type</td>
              <td className="border border-indigo-200 p-2">Structural</td>
              <td className="border border-indigo-200 p-2">Focuses on composition of classes/objects</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Complexity</td>
              <td className="border border-indigo-200 p-2">Low</td>
              <td className="border border-indigo-200 p-2">Simple to implement, easy to understand</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Usage Frequency</td>
              <td className="border border-indigo-200 p-2">Common</td>
              <td className="border border-indigo-200 p-2">Widely used in systems integration</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Key Benefit</td>
              <td className="border border-indigo-200 p-2">Reuse existing code</td>
              <td className="border border-indigo-200 p-2">Allows integration without modifying original code</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Key Tradeoff</td>
              <td className="border border-indigo-200 p-2">Increased complexity</td>
              <td className="border border-indigo-200 p-2">Adds another layer of indirection</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Problem Statement */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Problem Statement</h2>
        <p className="text-gray-700 mb-4">
          Imagine you're building a weather dashboard application that needs to display weather data. Your application is designed to work with a specific data format, but you need to integrate with multiple weather APIs that each return data in different formats.
        </p>
        <p className="text-gray-700">
          Without modifying your application's core code, how can you make these incompatible APIs work with your existing system? This is where the Adapter pattern comes in - it allows you to create adapters that transform the data from each API into the format your application expects.
        </p>
      </div>

      {/* Implementation */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl w-full mt-8">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">Implementation</h3>
              <CodeLanguageSwitcherV2 codeSnippets={adapterSnippets} />
              
              <div className="mt-8 ">
                <h4 className="text-lg font-semibold text-indigo-700 mb-2">Implementation Notes</h4>
                <p className="text-gray-700 mb-4">
                  The Adapter pattern consists of these key components:
                </p>
                <ul className="list-disc pl-5 flex flex-col items-start text-gray-700 mb-4 ">
                  <li><strong>Target</strong>: The interface that the client expects or uses</li>
                  <li><strong>Adaptee</strong>: The existing class with an incompatible interface</li>
                  <li><strong>Adapter</strong>: The class that bridges between Target and Adaptee</li>
                  <li><strong>Client</strong>: The class that interacts with the Target interface</li>
                </ul>
                <p className="text-gray-700">
                  There are two main types of Adapter patterns:
                </p>
                <ul className="list-disc pl-5 flex flex-col items-start text-gray-700">
                  <li><strong>Class Adapter</strong>: Uses multiple inheritance (where available) to adapt one interface to another</li>
                  <li><strong>Object Adapter</strong>: Uses composition to reference the adaptee object</li>
                </ul>
              </div>
        </div>
       
 

      {/* Related Patterns */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Related Patterns</h2>
        <ul className="list-disc flex flex-col items-start pl-5 text-gray-700">
          <li><strong>Bridge Pattern</strong>: While Adapter focuses on making incompatible interfaces work together, Bridge is designed to separate an abstraction from its implementation so both can vary independently.</li>
          <li><strong>Decorator Pattern</strong>: Adds responsibilities to objects dynamically, while Adapter changes the interface of an existing object.</li>
          <li><strong>Facade Pattern</strong>: Provides a simplified interface to a complex subsystem, whereas Adapter makes incompatible interfaces compatible.</li>
          <li><strong>Proxy Pattern</strong>: Provides a surrogate for another object to control access to it, while Adapter changes the interface of an object.</li>
        </ul>
      </div>

      {/* Consequences */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Consequences</h2>
        
        <h3 className="text-lg font-medium mb-2 text-indigo-600">Benefits</h3>
        <ul className="list-disc flex flex-col items-start pl-5 mb-4 text-gray-700">
          <li><strong>Increased reusability</strong>: Allows reusing existing classes even when their interfaces don't match what's needed</li>
          <li><strong>Separation of concerns</strong>: Keeps adaptation logic separate from business logic</li>
          <li><strong>Open/Closed Principle</strong>: Enables adding new adapters without changing existing code</li>
          <li><strong>Single Responsibility Principle</strong>: Adaptation logic is isolated in adapter classes</li>
        </ul>
        
        <h3 className="text-lg font-medium mb-2 text-indigo-600">Tradeoffs</h3>
        <ul className="list-disc flex flex-col items-start pl-5 text-gray-700">
          <li><strong>Increased complexity</strong>: Adds another layer of indirection</li>
          <li><strong>Performance overhead</strong>: May introduce slight performance costs due to the extra layer</li>
          <li><strong>Debugging difficulty</strong>: Can make debugging more challenging due to the additional abstraction</li>
          <li><strong>Maintenance burden</strong>: Requires maintaining adapter code when either interface changes</li>
        </ul>
      </div>
    </div>
  );
};

export default Adapter; 