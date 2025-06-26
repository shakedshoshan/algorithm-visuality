export const bridgeSnippets = {
  javascript: `// JavaScript implementation
// Abstraction
class Abstraction {
  constructor(implementation) {
    this.implementation = implementation;
  }

  operation() {
    const result = this.implementation.operationImplementation();
    return \`Abstraction: Base operation with:\n\${result}\`;
  }
}

// Refined Abstraction
class ExtendedAbstraction extends Abstraction {
  operation() {
    const result = this.implementation.operationImplementation();
    return \`ExtendedAbstraction: Extended operation with:\n\${result}\`;
  }
}

// Implementation interface
class Implementation {
  operationImplementation() {
    throw new Error("Operation implementation must be overridden");
  }
}

// Concrete Implementation A
class ConcreteImplementationA extends Implementation {
  operationImplementation() {
    return "ConcreteImplementationA: Here's the result on platform A";
  }
}

// Concrete Implementation B
class ConcreteImplementationB extends Implementation {
  operationImplementation() {
    return "ConcreteImplementationB: Here's the result on platform B";
  }
}

// Client code
function clientCode(abstraction) {
  console.log(abstraction.operation());
}

// Usage
let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log("");

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);`,

  python: `# Python implementation
from abc import ABC, abstractmethod

# Implementation interface
class Implementation(ABC):
    @abstractmethod
    def operation_implementation(self) -> str:
        pass

# Concrete Implementation A
class ConcreteImplementationA(Implementation):
    def operation_implementation(self) -> str:
        return "ConcreteImplementationA: Here's the result on platform A"

# Concrete Implementation B
class ConcreteImplementationB(Implementation):
    def operation_implementation(self) -> str:
        return "ConcreteImplementationB: Here's the result on platform B"

# Abstraction
class Abstraction:
    def __init__(self, implementation: Implementation) -> None:
        self.implementation = implementation

    def operation(self) -> str:
        result = self.implementation.operation_implementation()
        return f"Abstraction: Base operation with:\\n{result}"

# Refined Abstraction
class ExtendedAbstraction(Abstraction):
    def operation(self) -> str:
        result = self.implementation.operation_implementation()
        return f"ExtendedAbstraction: Extended operation with:\\n{result}"

# Client code
def client_code(abstraction: Abstraction) -> None:
    print(abstraction.operation())

# Usage
if __name__ == "__main__":
    implementation = ConcreteImplementationA()
    abstraction = Abstraction(implementation)
    client_code(abstraction)

    print("")

    implementation = ConcreteImplementationB()
    abstraction = ExtendedAbstraction(implementation)
    client_code(abstraction)`,

  java: `// Java implementation
// Implementation interface
interface Implementation {
    String operationImplementation();
}

// Concrete Implementation A
class ConcreteImplementationA implements Implementation {
    @Override
    public String operationImplementation() {
        return "ConcreteImplementationA: Here's the result on platform A";
    }
}

// Concrete Implementation B
class ConcreteImplementationB implements Implementation {
    @Override
    public String operationImplementation() {
        return "ConcreteImplementationB: Here's the result on platform B";
    }
}

// Abstraction
class Abstraction {
    protected Implementation implementation;

    public Abstraction(Implementation implementation) {
        this.implementation = implementation;
    }

    public String operation() {
        String result = implementation.operationImplementation();
        return "Abstraction: Base operation with:\\n" + result;
    }
}

// Refined Abstraction
class ExtendedAbstraction extends Abstraction {
    public ExtendedAbstraction(Implementation implementation) {
        super(implementation);
    }

    @Override
    public String operation() {
        String result = implementation.operationImplementation();
        return "ExtendedAbstraction: Extended operation with:\\n" + result;
    }
}

// Client code
class Client {
    public static void clientCode(Abstraction abstraction) {
        System.out.println(abstraction.operation());
    }

    public static void main(String[] args) {
        Implementation implementation = new ConcreteImplementationA();
        Abstraction abstraction = new Abstraction(implementation);
        clientCode(abstraction);

        System.out.println();

        implementation = new ConcreteImplementationB();
        abstraction = new ExtendedAbstraction(implementation);
        clientCode(abstraction);
    }
}`,

  c: `// C# implementation
using System;

// Implementation interface
interface IImplementation
{
    string OperationImplementation();
}

// Concrete Implementation A
class ConcreteImplementationA : IImplementation
{
    public string OperationImplementation()
    {
        return "ConcreteImplementationA: Here's the result on platform A";
    }
}

// Concrete Implementation B
class ConcreteImplementationB : IImplementation
{
    public string OperationImplementation()
    {
        return "ConcreteImplementationB: Here's the result on platform B";
    }
}

// Abstraction
class Abstraction
{
    protected IImplementation _implementation;

    public Abstraction(IImplementation implementation)
    {
        _implementation = implementation;
    }

    public virtual string Operation()
    {
        var result = _implementation.OperationImplementation();
        return $"Abstraction: Base operation with:\\n{result}";
    }
}

// Refined Abstraction
class ExtendedAbstraction : Abstraction
{
    public ExtendedAbstraction(IImplementation implementation) : base(implementation)
    {
    }

    public override string Operation()
    {
        var result = _implementation.OperationImplementation();
        return $"ExtendedAbstraction: Extended operation with:\\n{result}";
    }
}

// Client code
class Program
{
    static void ClientCode(Abstraction abstraction)
    {
        Console.WriteLine(abstraction.Operation());
    }

    static void Main(string[] args)
    {
        var implementation = new ConcreteImplementationA();
        var abstraction = new Abstraction(implementation);
        ClientCode(abstraction);

        Console.WriteLine();

        implementation = new ConcreteImplementationB();
        abstraction = new ExtendedAbstraction(implementation);
        ClientCode(abstraction);
    }
}`
}; 