export const adapterSnippets = {
  javascript: `// JavaScript implementation
// Target interface
class Target {
  request() {
    return "Target: The default target's behavior.";
  }
}

// The class that needs adapting (Adaptee)
class Adaptee {
  specificRequest() {
    return "Adaptee: Special behavior";
  }
}

// Adapter class
class Adapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request() {
    // Translate the Target interface into Adaptee interface
    const result = this.adaptee.specificRequest();
    return "Adapter: (TRANSLATED) " + result;
  }
}

// Client code
function clientCode(target) {
  console.log(target.request());
}

// Usage
console.log('Client: I can work with Target objects:');
const target = new Target();
clientCode(target);

console.log('\\nClient: But I need to work with Adaptee objects:');
const adaptee = new Adaptee();
console.log("Adaptee: " + adaptee.specificRequest());

console.log('\\nClient: With adapter I can use Adaptee:');
const adapter = new Adapter(adaptee);
clientCode(adapter);`,

  python: `# Python implementation
from abc import ABC, abstractmethod

# Target interface
class Target(ABC):
    @abstractmethod
    def request(self) -> str:
        pass

# Concrete Target implementation
class ConcreteTarget(Target):
    def request(self) -> str:
        return "Target: The default target's behavior."

# The class that needs adapting (Adaptee)
class Adaptee:
    def specific_request(self) -> str:
        return "Adaptee: Special behavior"

# Adapter class
class Adapter(Target):
    def __init__(self, adaptee: Adaptee) -> None:
        self.adaptee = adaptee

    def request(self) -> str:
        # Translate the Target interface into Adaptee interface
        result = self.adaptee.specific_request()
        return f"Adapter: (TRANSLATED) {result}"

# Client code
def client_code(target: Target) -> None:
    print(target.request())

# Usage
if __name__ == "__main__":
    print("Client: I can work with Target objects:")
    target = ConcreteTarget()
    client_code(target)

    print("\\nClient: But I need to work with Adaptee objects:")
    adaptee = Adaptee()
    print(f"Adaptee: {adaptee.specific_request()}")

    print("\\nClient: With adapter I can use Adaptee:")
    adapter = Adapter(adaptee)
    client_code(adapter)`,

  java: `// Java implementation
// Target interface
interface Target {
    String request();
}

// Concrete Target implementation
class ConcreteTarget implements Target {
    @Override
    public String request() {
        return "Target: The default target's behavior.";
    }
}

// The class that needs adapting (Adaptee)
class Adaptee {
    public String specificRequest() {
        return "Adaptee: Special behavior";
    }
}

// Adapter class
class Adapter implements Target {
    private final Adaptee adaptee;

    public Adapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }

    @Override
    public String request() {
        // Translate the Target interface into Adaptee interface
        String result = adaptee.specificRequest();
        return "Adapter: (TRANSLATED) " + result;
    }
}

// Client code
class Client {
    public static void clientCode(Target target) {
        System.out.println(target.request());
    }

    public static void main(String[] args) {
        System.out.println("Client: I can work with Target objects:");
        Target target = new ConcreteTarget();
        clientCode(target);

        System.out.println("\\nClient: But I need to work with Adaptee objects:");
        Adaptee adaptee = new Adaptee();
        System.out.println("Adaptee: " + adaptee.specificRequest());

        System.out.println("\\nClient: With adapter I can use Adaptee:");
        Target adapter = new Adapter(adaptee);
        clientCode(adapter);
    }
}`,

  c: `// C# implementation
using System;

// Target interface
interface ITarget
{
    string Request();
}

// Concrete Target implementation
class ConcreteTarget : ITarget
{
    public string Request()
    {
        return "Target: The default target's behavior.";
    }
}

// The class that needs adapting (Adaptee)
class Adaptee
{
    public string SpecificRequest()
    {
        return "Adaptee: Special behavior";
    }
}

// Adapter class
class Adapter : ITarget
{
    private readonly Adaptee _adaptee;

    public Adapter(Adaptee adaptee)
    {
        _adaptee = adaptee;
    }

    public string Request()
    {
        // Translate the Target interface into Adaptee interface
        var result = _adaptee.SpecificRequest();
        return $"Adapter: (TRANSLATED) {result}";
    }
}

// Client code
class Program
{
    static void ClientCode(ITarget target)
    {
        Console.WriteLine(target.Request());
    }

    static void Main(string[] args)
    {
        Console.WriteLine("Client: I can work with Target objects:");
        var target = new ConcreteTarget();
        ClientCode(target);

        Console.WriteLine("\\nClient: But I need to work with Adaptee objects:");
        var adaptee = new Adaptee();
        Console.WriteLine($"Adaptee: {adaptee.SpecificRequest()}");

        Console.WriteLine("\\nClient: With adapter I can use Adaptee:");
        var adapter = new Adapter(adaptee);
        ClientCode(adapter);
    }
}`
}; 