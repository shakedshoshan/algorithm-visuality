import { CodeLanguageSwitcherV2 } from '../../components/code-language-switcher-v2';
import { flyweightSnippets } from '../../CodeSnippets/designPatterns/FlyweightSnippets';

const Flyweight = () => {

  return (
    <div className="flex flex-col items-center justify-start mb-8">
      <div className="flex items-center w-full justify-center mb-4">
        <img src="https://refactoring.guru/images/patterns/cards/flyweight-mini-2x.png" alt="Flyweight Pattern Diagram" className="h-16 mr-4" />
        <h2 className="text-4xl font-semibold text-indigo-700">Flyweight Pattern</h2>
      </div>
      
      {/* Overview Card */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl">
        <div className="mb-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Flyweight Pattern Overview</h3>
          <p className="text-sm font-medium text-indigo-600 mb-2">
            The Flyweight Pattern allows programs to support vast quantities of objects by keeping their memory consumption low.
          </p>
          <ul className="list-none font-medium space-y-1 text-sm text-indigo-600">
            <li>• <strong>Structural Pattern</strong>: Focuses on efficient data sharing across objects</li>
            <li>• <strong>Intent</strong>: Use sharing to support large numbers of fine-grained objects efficiently</li>
            <li>• <strong>Also Known As</strong>: Cache Pattern</li>
          </ul>
          <p className="text-sm font-medium text-indigo-600 mt-4">
            Flyweight achieves memory efficiency by sharing parts of object state between multiple objects. In other words, the Flyweight saves RAM by caching the same data used by different objects.
          </p>
        </div>

        <div className="flex flex-col items-center mt-10">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Real-World Examples</h3>
          <p className="text-sm font-medium text-indigo-600 mb-4">
            Imagine a text editor where each character is represented as an object with properties like font, size, and color. Creating a separate object for each character in a large document would be extremely memory-intensive. Instead, the Flyweight pattern would store character formatting information separately and share it across all instances of the same character.
          </p>
          <img src="https://refactoring.guru/images/patterns/diagrams/flyweight/example-2x.png" alt="Flyweight Pattern Example" className="mt-4 w-1/2 h-1/2" />
         
        </div>

      </div>

      {/* Characteristics Table */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Flyweight Characteristics</h2>
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
              <td className="border border-indigo-200 p-2">Focuses on object composition for memory efficiency</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Complexity</td>
              <td className="border border-indigo-200 p-2">Medium</td>
              <td className="border border-indigo-200 p-2">Requires careful separation of state</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Usage Frequency</td>
              <td className="border border-indigo-200 p-2">Medium</td>
              <td className="border border-indigo-200 p-2">Used when memory optimization is critical</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Key Benefit</td>
              <td className="border border-indigo-200 p-2">Memory efficiency</td>
              <td className="border border-indigo-200 p-2">Reduces memory footprint for large numbers of objects</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Key Tradeoff</td>
              <td className="border border-indigo-200 p-2">Runtime complexity</td>
              <td className="border border-indigo-200 p-2">May increase CPU usage to compute extrinsic state</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Structure */}

      <div className="mt-8 bg-white flex flex-col items-center p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-lg font-semibold text-indigo-700 mb-2">Structure</h2>
        <img src="https://refactoring.guru/images/patterns/diagrams/flyweight/structure-2x.png" alt="Flyweight Pattern Diagram" className="mt-4 w-3/4 h-3/4" />
      </div>

      {/* Problem Statement */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Problem Statement</h2>
        <p className="text-gray-700 mb-4">
          Imagine you're creating a game with thousands of tree objects in a forest. Each tree has properties like position, texture, and color. Creating separate objects for each tree would consume enormous amounts of memory.
        </p>
        <p className="text-gray-700">
          How can you represent thousands of individual trees efficiently without duplicating shared data like textures and colors for each instance? The Flyweight pattern solves this by separating intrinsic state (shared data like textures) from extrinsic state (unique data like position), allowing many tree objects to share the same texture data.
        </p>
      </div>

      {/* Implementation */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl w-full mt-8">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">Implementation</h3>
              <CodeLanguageSwitcherV2 codeSnippets={flyweightSnippets} />
              
              <div className="mt-8 ">
                <h4 className="text-lg font-semibold text-indigo-700 mb-2">Implementation Notes</h4>
                <p className="text-gray-700 mb-4">
                  The Flyweight pattern consists of these key components:
                </p>
                <ul className="list-disc pl-5 flex flex-col items-start text-gray-700 mb-4 ">
                  <li><strong>Flyweight</strong>: The interface or class that contains shared (intrinsic) state</li>
                  <li><strong>ConcreteFlyweight</strong>: Implements the Flyweight interface and stores intrinsic state</li>
                  <li><strong>FlyweightFactory</strong>: Creates and manages flyweight objects, ensuring they are shared properly</li>
                  <li><strong>Client</strong>: Computes or stores the extrinsic state and passes it to flyweight methods</li>
                </ul>
                <p className="text-gray-700">
                  The pattern divides object state into two parts:
                </p>
                <ul className="list-disc pl-5 flex flex-col items-start text-gray-700">
                  <li><strong>Intrinsic State</strong>: Shared data stored in the flyweight (e.g., textures, colors)</li>
                  <li><strong>Extrinsic State</strong>: Context-dependent data stored or computed by clients (e.g., positions)</li>
                </ul>
              </div>
        </div>
       
 

      {/* Related Patterns */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Related Patterns</h2>
        <ul className="list-disc flex flex-col items-start pl-5 text-gray-700">
          <li><strong>Composite Pattern</strong>: Often uses Flyweight to share leaf components.</li>
          <li><strong>Singleton Pattern</strong>: The Flyweight Factory is often implemented as a Singleton.</li>
          <li><strong>State Pattern</strong>: Can use Flyweight to share state objects between contexts.</li>
          <li><strong>Proxy Pattern</strong>: Like Flyweight, Proxy controls access to an object, but typically for a single object rather than shared instances.</li>
        </ul>
      </div>

      {/* Consequences */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Consequences</h2>
        
        <h3 className="text-lg font-medium mb-2 text-indigo-600">Benefits</h3>
        <ul className="list-disc flex flex-col items-start pl-5 mb-4 text-gray-700">
          <li><strong>Reduced memory usage</strong>: Saves RAM by sharing common data across multiple objects</li>
          <li><strong>Improved scalability</strong>: Allows applications to support many more objects</li>
          <li><strong>Centralized state management</strong>: Shared state is managed in one place</li>
          <li><strong>Immutability</strong>: Flyweights are typically immutable, which improves thread safety</li>
        </ul>
        
        <h3 className="text-lg font-medium mb-2 text-indigo-600">Tradeoffs</h3>
        <ul className="list-disc flex flex-col items-start pl-5 text-gray-700">
          <li><strong>Increased CPU usage</strong>: May require additional computation for extrinsic state</li>
          <li><strong>Complexity</strong>: Requires careful separation of intrinsic and extrinsic state</li>
          <li><strong>Indirection</strong>: Adds another layer of indirection which can complicate debugging</li>
          <li><strong>Context dependency</strong>: Clients must manage extrinsic state, which can be error-prone</li>
        </ul>
      </div>
    </div>
  );
};

export default Flyweight; 