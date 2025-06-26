import { CodeLanguageSwitcherV2 } from '../../components/code-language-switcher-v2';
import { compositeSnippets } from '../../CodeSnippets/designPatterns/CompositeSnippets';

const Composite = () => {
  return (
    <div className="flex flex-col items-center justify-start mb-8">
      <div className="flex items-center w-full justify-center mb-4">
        <img src="https://refactoring.guru/images/patterns/cards/composite-mini-2x.png" alt="Composite Pattern Diagram" className="h-16 mr-4" />
        <h2 className="text-4xl font-semibold text-indigo-700">Composite Pattern</h2>
      </div>
      
      {/* Overview Card */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl">
        <div className="mb-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Composite Pattern Overview</h3>
          <p className="text-sm font-medium text-indigo-600 mb-2">
            The Composite Pattern composes objects into tree structures to represent part-whole hierarchies. It lets clients treat individual objects and compositions of objects uniformly.
          </p>
          <ul className="list-none font-medium space-y-1 text-sm text-indigo-600">
            <li>• <strong>Structural Pattern</strong>: Organizes objects into tree structures</li>
            <li>• <strong>Intent</strong>: Compose objects into tree structures to represent part-whole hierarchies</li>
            <li>• <strong>Also Known As</strong>: Object Tree Pattern</li>
          </ul>
          <p className="text-sm font-medium text-indigo-600 mt-4">
            The key insight is that both individual objects (Leaf) and compositions of objects (Composite) implement the same interface, allowing clients to work with complex hierarchies through a simple, uniform interface.
          </p>
        </div>

        <div className="flex flex-col items-center mt-10">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Real-World Examples</h3>
          <p className="text-sm font-medium text-indigo-600 mb-4">
          Armies of most countries are structured as hierarchies. An army consists of several divisions; a division is a set of brigades, and a brigade consists of platoons, which can be broken down into squads. Finally, a squad is a small group of real soldiers. Orders are given at the top of the hierarchy and passed down onto each level until every soldier knows what needs to be done.
          </p>
          <img src="https://refactoring.guru/images/patterns/diagrams/composite/live-example-2x.png" alt="Composite Pattern Diagram" className="mt-4 w-1/4 h-1/4" />
        </div>
      </div>

      {/* Characteristics Table */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Composite Characteristics</h2>
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
              <td className="border border-indigo-200 p-2">Focuses on composition of objects in tree structures</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Complexity</td>
              <td className="border border-indigo-200 p-2">Medium</td>
              <td className="border border-indigo-200 p-2">Simple concept but requires careful interface design</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Usage Frequency</td>
              <td className="border border-indigo-200 p-2">High</td>
              <td className="border border-indigo-200 p-2">Common in UI frameworks, file systems, and organizational structures</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Key Benefit</td>
              <td className="border border-indigo-200 p-2">Uniform treatment</td>
              <td className="border border-indigo-200 p-2">Simplifies client code by treating individual and composite objects the same way</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Key Tradeoff</td>
              <td className="border border-indigo-200 p-2">Interface design</td>
              <td className="border border-indigo-200 p-2">May make the Component interface too general for specific leaf classes</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Structure */}
      <div className="mt-8 bg-white flex flex-col items-center p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-lg font-semibold text-indigo-700 mb-2">Structure</h2>
        <img src="https://refactoring.guru/images/patterns/diagrams/composite/structure-en-2x.png" alt="Decorator Pattern Diagram" className="mt-4 w-1/2 h-1/2" />
      </div>

      {/* Problem Statement */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Problem Statement</h2>
        <p className="text-gray-700 mb-4">
          Imagine you're building a text editor application that needs to represent both simple text elements (characters, words) and complex elements (paragraphs, sections, documents). Each element needs to be rendered on the screen, but the rendering process differs based on the element's complexity.
        </p>
        <p className="text-gray-700">
          How can you design your system to handle both simple and complex elements without making the client code aware of their concrete classes? How can you allow complex elements to contain other elements (both simple and complex) while maintaining a consistent interface for all elements?
        </p>
      </div>

      {/* Implementation */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl w-full mt-8">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Implementation</h3>
        <CodeLanguageSwitcherV2 codeSnippets={compositeSnippets} />
        
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-indigo-700 mb-2">Implementation Notes</h4>
          <p className="text-gray-700 mb-4">
            The Composite pattern consists of these key components:
          </p>
          <ul className="list-disc pl-5 flex flex-col items-start text-gray-700 mb-4">
            <li><strong>Component</strong>: The common interface that defines operations for both simple and complex elements</li>
            <li><strong>Leaf</strong>: Represents individual objects with no children</li>
            <li><strong>Composite</strong>: Represents complex elements that can contain other elements (both Leafs and other Composites)</li>
            <li><strong>Client</strong>: Manipulates objects through the Component interface</li>
          </ul>
          <p className="text-gray-700">
            The key insight of the Composite pattern is that both Leaf and Composite classes implement the same Component interface, allowing clients to treat individual objects and compositions uniformly. The Composite class typically delegates operations to its child components, creating a recursive structure.
          </p>
        </div>
      </div>

      {/* Related Patterns */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Related Patterns</h2>
        <ul className="list-disc flex flex-col items-start pl-5 text-gray-700">
          <li><strong>Decorator Pattern</strong>: Like Composite, Decorator also relies on recursive composition. However, Decorator adds responsibilities to objects without creating a tree structure.</li>
          <li><strong>Iterator Pattern</strong>: Can be used to traverse Composite structures without exposing their internal representation.</li>
          <li><strong>Visitor Pattern</strong>: Can be used to define operations to be performed on elements of a Composite structure without changing the classes of the elements.</li>
          <li><strong>Chain of Responsibility Pattern</strong>: Often used with Composite. Component parents can act as links in the chain of responsibility.</li>
        </ul>
      </div>

      {/* Consequences */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Consequences</h2>
        
        <h3 className="text-lg font-medium mb-2 text-indigo-600">Benefits</h3>
        <ul className="list-disc flex flex-col items-start pl-5 mb-4 text-gray-700">
          <li><strong>Uniform treatment</strong>: Clients can treat individual objects and compositions uniformly</li>
          <li><strong>Simplified client code</strong>: Clients don't need to know whether they're working with a leaf or composite object</li>
          <li><strong>Easy to add new component types</strong>: New leaf or composite types can be added without changing existing code</li>
          <li><strong>Open/Closed Principle</strong>: New components can be added without modifying existing code</li>
        </ul>
        
        <h3 className="text-lg font-medium mb-2 text-indigo-600">Tradeoffs</h3>
        <ul className="list-disc flex flex-col items-start pl-5 text-gray-700">
          <li><strong>Overly general component interface</strong>: Making the component interface general enough for both leaf and composite classes can sometimes make it less specific than ideal</li>
          <li><strong>Difficulty restricting components</strong>: It can be challenging to restrict what components can be added to a composite</li>
          <li><strong>Implementation complexity</strong>: Implementing a consistent error handling strategy across the component hierarchy can be complex</li>
          <li><strong>Performance considerations</strong>: Operations that traverse the entire tree structure can be expensive for deep hierarchies</li>
        </ul>
      </div>

      {/* Real-World Use Cases */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Real-World Use Cases</h2>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2 text-indigo-600">UI Components</h3>
          <p className="text-gray-700">
            GUI frameworks often use the Composite pattern to represent UI elements. Simple components like buttons and text fields are leaves, while containers like panels and windows are composites that can contain other UI elements.
          </p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2 text-indigo-600">File Systems</h3>
          <p className="text-gray-700">
            Files (leaves) and directories (composites) share a common interface, allowing operations like search, copy, and delete to work on both individual files and entire directory structures.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2 text-indigo-600">Organization Structures</h3>
          <p className="text-gray-700">
            Employee management systems often use the Composite pattern to represent organizational hierarchies. Individual contributors are leaves, while managers are composites that can contain both individual contributors and other managers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Composite; 