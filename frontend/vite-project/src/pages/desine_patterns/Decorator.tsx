import { CodeLanguageSwitcherV2 } from '../../components/code-language-switcher-v2';
import { decoratorSnippets } from '../../CodeSnippets/designPatterns/DecoratorSnippets';

const Decorator = () => {
  return (
    <div className="flex flex-col items-center justify-start mb-8">
      <div className="flex items-center w-full justify-center mb-4">
        <img src="https://refactoring.guru/images/patterns/cards/decorator-mini-2x.png" alt="Decorator Pattern Diagram" className="h-16 mr-4" />
        <h2 className="text-4xl font-semibold text-indigo-700">Decorator Pattern</h2>
      </div>
      
      {/* Overview Card */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl">
        <div className="mb-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Decorator Pattern Overview</h3>
          <p className="text-sm font-medium text-indigo-600 mb-2">
            The Decorator Pattern attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
          </p>
          <ul className="list-none font-medium space-y-1 text-sm text-indigo-600">
            <li>• <strong>Structural Pattern</strong>: Focuses on object composition</li>
            <li>• <strong>Intent</strong>: Add responsibilities to objects dynamically without affecting other objects</li>
            <li>• <strong>Also Known As</strong>: Wrapper Pattern</li>
          </ul>
          <p className="text-sm font-medium text-indigo-600 mt-4">
            Decorators follow the same interface as the components they decorate, allowing objects to be wrapped with any number of decorators. Each decorator adds its own behavior either before or after delegating to the wrapped object.
          </p>
        </div>

        <div className="flex flex-col items-center mt-10">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Real-World Examples</h3>
          <p className="text-sm font-medium text-indigo-600 mb-4">
          Wearing clothes is an example of using decorators. When you’re cold, you wrap yourself in a sweater. If you’re still cold with a sweater, you can wear a jacket on top. If it’s raining, you can put on a raincoat. All of these garments “extend” your basic behavior but aren’t part of you, and you can easily take off any piece of clothing whenever you don’t need it.
          </p>
          <img src="https://refactoring.guru/images/patterns/content/decorator/decorator-comic-1-2x.png" alt="Decorator Pattern Diagram" className="mt-4 w-1/4 h-1/4" />
        </div>
      </div>

      {/* Characteristics Table */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Decorator Characteristics</h2>
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
              <td className="border border-indigo-200 p-2">Focuses on object composition over inheritance</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Complexity</td>
              <td className="border border-indigo-200 p-2">Medium</td>
              <td className="border border-indigo-200 p-2">Simple concept but requires careful interface design</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Usage Frequency</td>
              <td className="border border-indigo-200 p-2">High</td>
              <td className="border border-indigo-200 p-2">Common in UI frameworks, I/O streams, and middleware</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Key Benefit</td>
              <td className="border border-indigo-200 p-2">Dynamic extension</td>
              <td className="border border-indigo-200 p-2">Allows adding behaviors at runtime without modifying original code</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Key Tradeoff</td>
              <td className="border border-indigo-200 p-2">Complexity</td>
              <td className="border border-indigo-200 p-2">Many small objects with similar interfaces can be confusing</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Structure */}
      <div className="mt-8 bg-white flex flex-col items-center p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-lg font-semibold text-indigo-700 mb-2">Structure</h2>
        <img src="https://refactoring.guru/images/patterns/diagrams/decorator/structure-2x.png" alt="Decorator Pattern Diagram" className="mt-4 w-1/2 h-1/2" />
      </div>

      {/* Problem Statement */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Problem Statement</h2>
        <p className="text-gray-700 mb-4">
          Imagine you're developing a text processing library that needs to handle various operations on text, such as encryption, compression, or formatting. You want users to be able to combine these operations in any order and add new operations without modifying existing code.
        </p>
        <p className="text-gray-700">
          How can you add functionality to objects dynamically and transparently without affecting other objects of the same class? How can you combine multiple behaviors in a flexible way that doesn't lead to an explosion of subclasses?
        </p>
      </div>

      {/* Implementation */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl w-full mt-8">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Implementation</h3>
        <CodeLanguageSwitcherV2 codeSnippets={decoratorSnippets} />
        
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-indigo-700 mb-2">Implementation Notes</h4>
          <p className="text-gray-700 mb-4">
            The Decorator pattern consists of these key components:
          </p>
          <ul className="list-disc pl-5 flex flex-col items-start text-gray-700 mb-4">
            <li><strong>Component</strong>: The interface for objects that can have responsibilities added to them</li>
            <li><strong>ConcreteComponent</strong>: The basic object to which additional responsibilities can be attached</li>
            <li><strong>Decorator</strong>: The abstract class that maintains a reference to a Component object and implements the Component interface</li>
            <li><strong>ConcreteDecorator</strong>: Adds responsibilities to the component</li>
          </ul>
          <p className="text-gray-700">
            The key insight of the Decorator pattern is that both the original component and its decorators implement the same interface. This allows decorators to be stacked on top of each other, adding behavior incrementally and in any order.
          </p>
        </div>
      </div>

      {/* Real-World Use Case */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Real-World Use Case: Data Processing Pipeline</h2>
        <p className="text-gray-700 mb-4">
          Consider a data processing system that needs to handle various transformations on data:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <pre className="text-sm text-gray-800">
{`// Base component
interface DataSource {
  writeData(data: string): void;
  readData(): string;
}

// Concrete component
class FileDataSource implements DataSource {
  private fileName: string;
  private data: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  writeData(data: string): void {
    console.log(\`Writing to file: \${this.fileName}, data: \${data}\`);
    this.data = data;
  }

  readData(): string {
    console.log(\`Reading from file: \${this.fileName}\`);
    return this.data;
  }
}

// Base decorator
class DataSourceDecorator implements DataSource {
  protected source: DataSource;

  constructor(source: DataSource) {
    this.source = source;
  }

  writeData(data: string): void {
    this.source.writeData(data);
  }

  readData(): string {
    return this.source.readData();
  }
}

// Concrete decorators
class EncryptionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    console.log(\`Encrypting data: \${data}\`);
    const encrypted = btoa(data); // Simple base64 "encryption"
    this.source.writeData(encrypted);
  }

  readData(): string {
    const data = this.source.readData();
    console.log(\`Decrypting data: \${data}\`);
    return atob(data); // Decode base64
  }
}

class CompressionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    console.log(\`Compressing data: \${data}\`);
    // Simple "compression" - just a placeholder
    const compressed = data.replace(/\s+/g, '');
    this.source.writeData(compressed);
  }

  readData(): string {
    const data = this.source.readData();
    console.log(\`Decompressing data: \${data}\`);
    // In real life, we would decompress here
    return data;
  }
}

// Usage
const file = new FileDataSource("data.txt");
const encrypted = new EncryptionDecorator(file);
const compressedEncrypted = new CompressionDecorator(encrypted);

compressedEncrypted.writeData("Hello World!"); // Applies compression then encryption
const data = compressedEncrypted.readData(); // Applies decryption then decompression`}
          </pre>
        </div>
        <p className="text-gray-700 mt-4">
          In this example, we can dynamically add encryption and compression behaviors to a basic file data source. The decorators can be applied in any order, allowing for flexible combinations of behaviors.
        </p>
      </div>

      {/* Related Patterns */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Related Patterns</h2>
        <ul className="list-disc flex flex-col items-start pl-5 text-gray-700">
          <li><strong>Adapter Pattern</strong>: Changes the interface of an existing object, while Decorator enhances an object without changing its interface.</li>
          <li><strong>Composite Pattern</strong>: Decorator can be viewed as a degenerate Composite with only one component. However, Decorator adds additional responsibilities, while Composite just "sums up" its children's results.</li>
          <li><strong>Strategy Pattern</strong>: Decorator changes the skin of an object, while Strategy changes the guts (internal behavior).</li>
          <li><strong>Proxy Pattern</strong>: Proxy controls access to an object, while Decorator adds responsibilities to an object.</li>
        </ul>
      </div>

      {/* Consequences */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Consequences</h2>
        
        <h3 className="text-lg font-medium mb-2 text-indigo-600">Benefits</h3>
        <ul className="list-disc flex flex-col items-start pl-5 mb-4 text-gray-700">
          <li><strong>More flexibility than static inheritance</strong>: Behaviors can be added and removed at runtime</li>
          <li><strong>Avoids feature-laden classes high up in the hierarchy</strong>: Functionality can be composed from simple pieces</li>
          <li><strong>Single Responsibility Principle</strong>: Divides a monolithic class with many variants into several smaller classes</li>
          <li><strong>Open/Closed Principle</strong>: New functionality can be added without modifying existing code</li>
        </ul>
        
        <h3 className="text-lg font-medium mb-2 text-indigo-600">Tradeoffs</h3>
        <ul className="list-disc flex flex-col items-start pl-5 text-gray-700">
          <li><strong>Difficult to remove a specific wrapper</strong>: You have to unwrap the entire stack and rebuild it</li>
          <li><strong>Hard to implement decorators that don't depend on the order</strong>: Some combinations might not make sense</li>
          <li><strong>Initial configuration code can get complicated</strong>: Setting up the decorator stack can be verbose</li>
          <li><strong>Can be confusing for developers</strong>: Many similar small objects with slightly different behaviors</li>
        </ul>
      </div>
    </div>
  );
};

export default Decorator; 