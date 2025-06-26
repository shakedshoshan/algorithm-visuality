import { CodeLanguageSwitcherV2 } from '../../components/code-language-switcher-v2';
import { facadeSnippets } from '../../CodeSnippets/designPatterns/FacadeSnippets';

const Facade = () => {
  return (
    <div className="flex flex-col items-center justify-start mb-8">
      <div className="flex items-center w-full justify-center mb-4">
        <img src="https://refactoring.guru/images/patterns/cards/facade-mini-2x.png" alt="Facade Pattern Diagram" className="h-16 mr-4" />
        <h2 className="text-4xl font-semibold text-indigo-700">Facade Pattern</h2>
      </div>
      
      {/* Overview Card */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl">
        <div className="mb-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Facade Pattern Overview</h3>
          <p className="text-sm font-medium text-indigo-600 mb-2">
            The Facade Pattern provides a simplified interface to a complex subsystem. It defines a higher-level interface that makes the subsystem easier to use.
          </p>
          <ul className="list-none font-medium space-y-1 text-sm text-indigo-600">
            <li>• <strong>Structural Pattern</strong>: Simplifies complex systems</li>
            <li>• <strong>Intent</strong>: Provide a unified interface to a set of interfaces in a subsystem</li>
            <li>• <strong>Also Known As</strong>: Wrapper Pattern</li>
          </ul>
          <p className="text-sm font-medium text-indigo-600 mt-4">
            Facade acts as a convenient entry point to a complex system, handling the initialization and proper sequencing of subsystem components without exposing their complexity to clients.
          </p>
        </div>

        <div className="flex flex-col items-center mt-10">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Real-World Examples</h3>
          <p className="text-sm font-medium text-indigo-600 mb-4">
          When you call a shop to place a phone order, an operator is your facade to all services and departments of the shop. The operator provides you with a simple voice interface to the ordering system, payment gateways, and various delivery services.
          </p>
          <img src="https://refactoring.guru/images/patterns/diagrams/facade/live-example-en-2x.png" alt="Facade Pattern Diagram" className="mt-4 w-1/4 h-1/4" />
        </div>
      </div>

      {/* Structure */}
      <div className="mt-8 bg-white flex flex-col items-center p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-lg font-semibold text-indigo-700 mb-2">Structure</h2>
        <img src="https://refactoring.guru/images/patterns/diagrams/facade/structure-2x.png" alt="Facade Pattern Structure Diagram" className="mt-4 w-1/2 h-1/2" />
      </div>

      {/* Characteristics Table */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Facade Characteristics</h2>
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
              <td className="border border-indigo-200 p-2">Focuses on simplifying complex interfaces</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Complexity</td>
              <td className="border border-indigo-200 p-2">Low</td>
              <td className="border border-indigo-200 p-2">Simple to implement, easy to understand</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Usage Frequency</td>
              <td className="border border-indigo-200 p-2">High</td>
              <td className="border border-indigo-200 p-2">Common in libraries, frameworks, and complex systems</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Key Benefit</td>
              <td className="border border-indigo-200 p-2">Simplification</td>
              <td className="border border-indigo-200 p-2">Isolates clients from subsystem components</td>
            </tr>
            <tr>
              <td className="border border-indigo-200 p-2">Key Tradeoff</td>
              <td className="border border-indigo-200 p-2">Limited flexibility</td>
              <td className="border border-indigo-200 p-2">May not expose all features of the subsystem</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Problem Statement */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Problem Statement</h2>
        <p className="text-gray-700 mb-4">
          Imagine you're developing an application that needs to interact with a complex third-party library for cloud storage. The library has dozens of classes and methods, and using it directly would require your code to be tightly coupled to its implementation details.
        </p>
        <p className="text-gray-700">
          How can you simplify the interaction between your application and this complex library? How can you avoid tight coupling while still providing all the functionality your application needs?
        </p>
      </div>

      {/* Implementation */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl w-full mt-8">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Implementation</h3>
        <CodeLanguageSwitcherV2 codeSnippets={facadeSnippets} />
        
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-indigo-700 mb-2">Implementation Notes</h4>
          <p className="text-gray-700 mb-4">
            The Facade pattern consists of these key components:
          </p>
          <ul className="list-disc pl-5 flex flex-col items-start text-gray-700 mb-4">
            <li><strong>Facade</strong>: Provides a simplified interface to the complex subsystem</li>
            <li><strong>Subsystem Classes</strong>: Implement the functionality of the subsystem</li>
            <li><strong>Client</strong>: Interacts with the subsystem through the facade</li>
          </ul>
          <p className="text-gray-700">
            The key insight of the Facade pattern is that it doesn't encapsulate the subsystem classes; it just provides a simplified interface to their functionality. Clients can still use the subsystem classes directly if they need more specific functionality.
          </p>
        </div>
      </div>

      {/* Real-World Use Case */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Real-World Use Case: Cloud Storage Integration</h2>
        <p className="text-gray-700 mb-4">
          Consider an application that needs to upload files to a cloud storage service:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <pre className="text-sm text-gray-800">
{`// Complex subsystem
class CloudProviderService {
  isLoggedIn(): boolean {
    console.log("Checking if user is logged in...");
    return false; // Simulating not logged in initially
  }

  logIn(): void {
    console.log("Logging in...");
    // Complex authentication logic
  }

  convertFile(file: string): string {
    console.log("Converting file...", file);
    return file + ".converted"; // Simulating conversion
  }

  uploadFile(file: string): void {
    console.log("Uploading file...", file);
    // Complex upload logic
  }

  getFileLink(file: string): string {
    console.log("Getting file link...", file);
    return "https://example.com/" + file; // Simulating link generation
  }
}

// Facade
class CloudProviderFacade {
  private service: CloudProviderService;

  constructor() {
    this.service = new CloudProviderService();
  }

  uploadFile(file: string): string {
    // Handle all the complex interactions with the subsystem
    if (!this.service.isLoggedIn()) {
      this.service.logIn();
    }

    const convertedFile = this.service.convertFile(file);
    this.service.uploadFile(convertedFile);

    return this.service.getFileLink(convertedFile);
  }
}

// Client code
const facade = new CloudProviderFacade();
const fileLink = facade.uploadFile("file.txt");
console.log("File link:", fileLink);

// Output:
// Checking if user is logged in...
// Logging in...
// Converting file... file.txt
// Uploading file... file.txt.converted
// Getting file link... file.txt.converted
// File link: https://example.com/file.txt.converted`}
          </pre>
        </div>
        <p className="text-gray-700 mt-4">
          In this example, the CloudProviderFacade hides all the complexity of working with the cloud storage service. The client code only needs to call a single method to upload a file and get its link, without worrying about the details of authentication, file conversion, or the upload process.
        </p>
      </div>

      {/* Related Patterns */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Related Patterns</h2>
        <ul className="list-disc flex flex-col items-start pl-5 text-gray-700">
          <li><strong>Adapter Pattern</strong>: While Facade defines a new interface for a subsystem, Adapter makes an existing interface usable through another interface.</li>
          <li><strong>Mediator Pattern</strong>: Similar to Facade in that it abstracts functionality of existing classes, but Mediator centralizes communication between objects while Facade just simplifies the interface.</li>
          <li><strong>Singleton Pattern</strong>: Facades are often implemented as singletons since only one facade object is needed.</li>
          <li><strong>Abstract Factory Pattern</strong>: Can be used with Facade to provide an interface for creating subsystem objects.</li>
        </ul>
      </div>

      {/* Consequences */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Consequences</h2>
        
        <h3 className="text-lg font-medium mb-2 text-indigo-600">Benefits</h3>
        <ul className="list-disc flex flex-col items-start pl-5 mb-4 text-gray-700">
          <li><strong>Isolation</strong>: Shields clients from subsystem components, reducing coupling</li>
          <li><strong>Simplification</strong>: Provides a simple interface to a complex subsystem</li>
          <li><strong>Decoupling</strong>: Promotes loose coupling between clients and the subsystem</li>
          <li><strong>Layer isolation</strong>: Helps layer your system and control dependencies</li>
        </ul>
        
        <h3 className="text-lg font-medium mb-2 text-indigo-600">Tradeoffs</h3>
        <ul className="list-disc flex flex-col items-start pl-5 text-gray-700">
          <li><strong>Limited flexibility</strong>: May not expose all features of the subsystem</li>
          <li><strong>Potential bottleneck</strong>: The facade can become a god object with too many responsibilities</li>
          <li><strong>Abstraction cost</strong>: Adds another layer of indirection which can impact performance</li>
          <li><strong>Maintenance overhead</strong>: The facade must be updated when the subsystem changes</li>
        </ul>
      </div>
    </div>
  );
};

export default Facade; 