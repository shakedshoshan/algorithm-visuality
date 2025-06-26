import { CodeLanguageSwitcherV2 } from '../../components/code-language-switcher-v2';
import { proxySnippets } from '../../CodeSnippets/designPatterns/ProxySnippets';

const Proxy = () => {

  return (
    <div className="flex flex-col items-center justify-start mb-8">
      <div className="flex items-center w-full justify-center mb-4">
        <img src="https://refactoring.guru/images/patterns/cards/proxy-mini-2x.png" alt="Proxy Pattern Diagram" className="h-16 mr-4" />
        <h2 className="text-4xl font-semibold text-indigo-700">Proxy Pattern</h2>
      </div>
      
      {/* Overview Card */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl">
        <div className="mb-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Proxy Pattern Overview</h3>
          <p className="text-sm font-medium text-indigo-600 mb-2">
            The Proxy Pattern provides a surrogate or placeholder for another object to control access to it, acting as an intermediary between clients and the real service object.
          </p>
          <ul className="list-none font-medium space-y-1 text-sm text-indigo-600">
            <li>• <strong>Structural Pattern</strong>: Controls access to another object</li>
            <li>• <strong>Intent</strong>: Provide a surrogate or placeholder for another object to control access to it</li>
            <li>• <strong>Also Known As</strong>: Surrogate Pattern</li>
          </ul>
          <p className="text-sm font-medium text-indigo-600 mt-4">
            Proxies can perform various tasks like lazy initialization, access control, logging, caching, and more, while maintaining the same interface as the real service object.
          </p>
        </div>

        <div className="flex flex-col items-center mt-10">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Real-World Examples</h3>
          <p className="text-sm font-medium text-indigo-600 mb-4">
            A credit card is a proxy for a bank account, providing the same interface for making payments but adding security checks and controls. Similarly, a check is a proxy for cash, representing the same value but with added security.
          </p>
          <img src="https://refactoring.guru/images/patterns/diagrams/proxy/live-example-2x.png" alt="Proxy Pattern Diagram" className="mt-4 w-1/2 h-1/2" />
        </div>
      </div>

      {/* Characteristics Table */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Proxy Characteristics</h2>
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
              <td className="border border-indigo-200 p-2">Focuses on object composition and relationships</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Complexity</td>
              <td className="border border-indigo-200 p-2">Medium</td>
              <td className="border border-indigo-200 p-2">Straightforward to implement but requires careful interface design</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Usage Frequency</td>
              <td className="border border-indigo-200 p-2">Common</td>
              <td className="border border-indigo-200 p-2">Widely used in frameworks and system design</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Key Benefit</td>
              <td className="border border-indigo-200 p-2">Control and enhancement</td>
              <td className="border border-indigo-200 p-2">Controls access and adds functionality without changing the original object</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Key Tradeoff</td>
              <td className="border border-indigo-200 p-2">Performance overhead</td>
              <td className="border border-indigo-200 p-2">Adds an extra layer of indirection</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Structure */}
      <div className="mt-8 bg-white flex flex-col items-center p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-lg font-semibold text-indigo-700 mb-2">Structure</h2>
        <img src="https://refactoring.guru/images/patterns/diagrams/proxy/structure-indexed-2x.png" alt="Proxy Pattern Structure Diagram" className="mt-4 w-1/2 h-1/2" />
      </div>

      {/* Problem Statement */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Problem Statement</h2>
        <p className="text-gray-700 mb-4">
          Imagine you have a massive object that consumes a lot of system resources. You need it from time to time, but not always.
        </p>
        <p className="text-gray-700 mb-4">
          You could create this object only when it's actually needed, but what if you need to perform some operations on it before it even exists? What if you need to track access to this object or add additional behaviors without changing the object itself?
        </p>
        <p className="text-gray-700">
          The Proxy pattern solves these problems by providing a substitute that controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.
        </p>
      </div>

      {/* Implementation */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl w-full mt-8">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Implementation</h3>
        <CodeLanguageSwitcherV2 codeSnippets={proxySnippets} />
        
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-indigo-700 mb-2">Implementation Notes</h4>
          <p className="text-gray-700 mb-4">
            The Proxy pattern consists of these key components:
          </p>
          <ul className="list-disc pl-5 flex flex-col items-start text-gray-700 mb-4">
            <li><strong>Subject Interface</strong>: Declares common operations for both RealSubject and Proxy</li>
            <li><strong>RealSubject</strong>: The real object that the proxy represents, which does the actual work</li>
            <li><strong>Proxy</strong>: Maintains a reference to the RealSubject and controls access to it</li>
            <li><strong>Client</strong>: Works with both subjects and proxies through the Subject interface</li>
          </ul>
          <p className="text-gray-700">
            There are several types of proxies:
          </p>
          <ul className="list-disc pl-5 flex flex-col items-start text-gray-700">
            <li><strong>Virtual Proxy</strong>: Delays the creation and initialization of expensive objects until needed</li>
            <li><strong>Protection Proxy</strong>: Controls access to the original object, useful for access control</li>
            <li><strong>Remote Proxy</strong>: Represents an object located remotely, handling network communication</li>
            <li><strong>Logging Proxy</strong>: Keeps a record of access to the object, useful for debugging</li>
            <li><strong>Caching Proxy</strong>: Stores results of expensive operations for reuse</li>
            <li><strong>Smart Reference</strong>: Performs additional actions when an object is accessed</li>
          </ul>
        </div>
      </div>

      {/* Related Patterns */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Related Patterns</h2>
        <ul className="list-disc flex flex-col items-start pl-5 text-gray-700">
          <li><strong>Adapter Pattern</strong>: While Proxy provides the same interface as its service object, Adapter provides a different interface to its subject.</li>
          <li><strong>Decorator Pattern</strong>: Decorator adds responsibilities to an object, while Proxy controls access to an object.</li>
          <li><strong>Facade Pattern</strong>: Facade provides a simplified interface to a set of objects, while Proxy controls access to a single object.</li>
          <li><strong>Mediator Pattern</strong>: While Proxy works with a single service object, Mediator centralizes communication between multiple objects.</li>
        </ul>
      </div>

      {/* Consequences */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Consequences</h2>
        
        <h3 className="text-lg font-medium mb-2 text-indigo-600">Benefits</h3>
        <ul className="list-disc flex flex-col items-start pl-5 mb-4 text-gray-700">
          <li><strong>Separation of concerns</strong>: The proxy handles responsibilities separate from the real subject</li>
          <li><strong>Open/Closed Principle</strong>: You can introduce new proxies without changing the service or clients</li>
          <li><strong>Resource optimization</strong>: Lazy initialization and caching can improve performance</li>
          <li><strong>Security</strong>: Protection proxies can implement access control</li>
          <li><strong>Remote access</strong>: Remote proxies can hide the complexity of working with remote resources</li>
        </ul>
        
        <h3 className="text-lg font-medium mb-2 text-indigo-600">Tradeoffs</h3>
        <ul className="list-disc flex flex-col items-start pl-5 text-gray-700">
          <li><strong>Response time</strong>: The code may respond slower due to the extra indirection layer</li>
          <li><strong>Implementation complexity</strong>: Adds another layer of abstraction, making the system more complex</li>
          <li><strong>Debugging difficulty</strong>: Can make debugging more challenging due to the additional abstraction</li>
          <li><strong>Maintenance burden</strong>: Requires maintaining proxy code when the service interface changes</li>
        </ul>
      </div>
    </div>
  );
};

export default Proxy; 