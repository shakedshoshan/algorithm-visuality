import { CodeLanguageSwitcherV2 } from '../../components/code-language-switcher-v2';
import { bridgeSnippets } from '../../CodeSnippets/designPatterns/BridgeSnippets';

const Bridge = () => {
  return (
    <div className="flex flex-col items-center justify-start mb-8">
      <div className="flex items-center w-full justify-center mb-4">
        <img src="https://refactoring.guru/images/patterns/cards/bridge-mini-2x.png" alt="Bridge Pattern Diagram" className="h-16 mr-4" />
        <h2 className="text-4xl font-semibold text-indigo-700">Bridge Pattern</h2>
      </div>
      
      {/* Overview Card */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl">
        <div className="mb-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Bridge Pattern Overview</h3>
          <p className="text-sm font-medium text-indigo-600 mb-2">
            The Bridge Pattern decouples an abstraction from its implementation so that the two can vary independently.
          </p>
          <ul className="list-none font-medium space-y-1 text-sm text-indigo-600">
            <li>• <strong>Structural Pattern</strong>: Separates abstraction from implementation</li>
            <li>• <strong>Intent</strong>: Decouple an abstraction from its implementation so that the two can vary independently</li>
            <li>• <strong>Also Known As</strong>: Handle/Body Pattern</li>
          </ul>
          <p className="text-sm font-medium text-indigo-600 mt-4">
            Bridge uses composition over inheritance to let abstractions and implementations evolve separately, like having <code className="bg-indigo-100 px-1 rounded">abstraction.operation()</code> call <code className="bg-indigo-100 px-1 rounded">implementation.operationImplementation()</code>
          </p>
        </div>

        <div className="flex flex-col items-center mt-10">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Real-World Examples</h3>
          <p className="text-sm font-medium text-indigo-600 mb-4">
            Consider a cross-platform GUI toolkit that must work across Windows, macOS, and Linux. Instead of creating separate class hierarchies for each platform (WindowsButton, MacButton, LinuxButton), the Bridge pattern would separate the abstraction (Button) from its implementation (WindowsRenderer, MacRenderer, LinuxRenderer).
          </p>
          <img src="https://refactoring.guru/images/patterns/diagrams/bridge/solution-en-2x.png" alt="Bridge Pattern Diagram" className="mt-4 w-1/2 h-1/2" />
        </div>
      </div>

      {/* Characteristics Table */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Bridge Characteristics</h2>
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
              <td className="border border-indigo-200 p-2">Medium</td>
              <td className="border border-indigo-200 p-2">Requires careful planning of class hierarchies</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Usage Frequency</td>
              <td className="border border-indigo-200 p-2">Medium</td>
              <td className="border border-indigo-200 p-2">Common in frameworks and complex systems</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Key Benefit</td>
              <td className="border border-indigo-200 p-2">Independent evolution</td>
              <td className="border border-indigo-200 p-2">Abstractions and implementations can evolve separately</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Key Tradeoff</td>
              <td className="border border-indigo-200 p-2">Increased complexity</td>
              <td className="border border-indigo-200 p-2">Adds another level of indirection</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Structure */}
      <div className="mt-8 bg-white flex flex-col items-center p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-lg font-semibold text-indigo-700 mb-2">Structure</h2>
        <img src="https://refactoring.guru/images/patterns/diagrams/bridge/structure-en-2x.png" alt="Bridge Pattern Diagram" className="mt-4 w-1/2 h-1/2" />
      </div>

      {/* Problem Statement */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Problem Statement</h2>
        <p className="text-gray-700 mb-4">
          Imagine you're developing a shape-drawing application that needs to work with different shapes (circles, squares) and different rendering methods (vector, raster). Using inheritance alone would lead to an explosion of class combinations (VectorCircle, RasterCircle, VectorSquare, RasterSquare).
        </p>
        <p className="text-gray-700">
          How can you structure your code to avoid this combinatorial explosion of classes while still allowing both shapes and rendering methods to vary independently? The Bridge pattern solves this by separating the shape hierarchy from the rendering method hierarchy.
        </p>
      </div>

      {/* Implementation */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl w-full mt-8">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Implementation</h3>
        <CodeLanguageSwitcherV2 codeSnippets={bridgeSnippets} />
        
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-indigo-700 mb-2">Implementation Notes</h4>
          <p className="text-gray-700 mb-4">
            The Bridge pattern consists of these key components:
          </p>
          <ul className="list-disc pl-5 flex flex-col items-start text-gray-700 mb-4">
            <li><strong>Abstraction</strong>: Defines the abstraction's interface and maintains a reference to the implementation</li>
            <li><strong>RefinedAbstraction</strong>: Extends the interface defined by Abstraction</li>
            <li><strong>Implementation</strong>: Defines the interface for implementation classes</li>
            <li><strong>ConcreteImplementation</strong>: Implements the Implementation interface</li>
          </ul>
          <p className="text-gray-700">
            The key insight of the Bridge pattern is to prefer composition over inheritance. Instead of creating a complex inheritance hierarchy, the abstraction contains a reference to an implementation object.
          </p>
        </div>
      </div>

      {/* Related Patterns */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Related Patterns</h2>
        <ul className="list-disc flex flex-col items-start pl-5 text-gray-700">
          <li><strong>Adapter Pattern</strong>: While Bridge is designed up-front to let abstractions and implementations vary independently, Adapter makes unrelated classes work together after they're designed.</li>
          <li><strong>Abstract Factory Pattern</strong>: Can be used to create platform-specific implementation objects.</li>
          <li><strong>Strategy Pattern</strong>: Like Bridge, Strategy uses composition to change behavior. However, Strategy focuses on changing algorithms, while Bridge focuses on separating abstraction from implementation.</li>
          <li><strong>State Pattern</strong>: Like Bridge, State uses composition. However, State allows an object to change its behavior when its internal state changes.</li>
        </ul>
      </div>

      {/* Consequences */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Consequences</h2>
        
        <h3 className="text-lg font-medium mb-2 text-indigo-600">Benefits</h3>
        <ul className="list-disc flex flex-col items-start pl-5 mb-4 text-gray-700">
          <li><strong>Decoupling interface and implementation</strong>: Helps avoid permanent binding between interface and implementation</li>
          <li><strong>Improved extensibility</strong>: Abstractions and implementations can be extended independently</li>
          <li><strong>Hiding implementation details</strong>: Clients interact only with high-level abstractions</li>
          <li><strong>Open/Closed Principle</strong>: New abstractions and implementations can be added without affecting existing code</li>
        </ul>
        
        <h3 className="text-lg font-medium mb-2 text-indigo-600">Tradeoffs</h3>
        <ul className="list-disc flex flex-col items-start pl-5 text-gray-700">
          <li><strong>Increased complexity</strong>: Introduces more classes and indirection</li>
          <li><strong>Performance overhead</strong>: May introduce slight performance costs due to the extra level of indirection</li>
          <li><strong>Design up-front</strong>: Requires identifying dimensions of change early in the design process</li>
          <li><strong>Learning curve</strong>: Can be more difficult to understand for developers new to the pattern</li>
        </ul>
      </div>
    </div>
  );
};

export default Bridge; 