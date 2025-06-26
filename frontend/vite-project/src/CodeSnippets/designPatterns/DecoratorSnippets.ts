export const decoratorSnippets = {
  javascript: `// JavaScript implementation
// Component interface
class Component {
  operation() {
    throw new Error("Operation method must be implemented");
  }
}

// Concrete Component
class ConcreteComponent extends Component {
  operation() {
    return "ConcreteComponent";
  }
}

// Base Decorator
class Decorator extends Component {
  constructor(component) {
    super();
    this.component = component;
  }

  operation() {
    return this.component.operation();
  }
}

// Concrete Decorator A
class ConcreteDecoratorA extends Decorator {
  operation() {
    return \`ConcreteDecoratorA(\${this.component.operation()})\`;
  }
}

// Concrete Decorator B
class ConcreteDecoratorB extends Decorator {
  operation() {
    return \`ConcreteDecoratorB(\${this.component.operation()})\`;
  }
}

// Client code
const simple = new ConcreteComponent();
console.log("Result with simple component:");
console.log(simple.operation());

// Decorating the component
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log("\\nResult with decorated component:");
console.log(decorator2.operation());

// Output:
// Result with simple component:
// ConcreteComponent
//
// Result with decorated component:
// ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))`,

  python: `# Python implementation
from abc import ABC, abstractmethod

# Component interface
class Component(ABC):
    @abstractmethod
    def operation(self):
        pass

# Concrete Component
class ConcreteComponent(Component):
    def operation(self):
        return "ConcreteComponent"

# Base Decorator
class Decorator(Component):
    def __init__(self, component):
        self._component = component

    def operation(self):
        return self._component.operation()

# Concrete Decorator A
class ConcreteDecoratorA(Decorator):
    def operation(self):
        return f"ConcreteDecoratorA({self._component.operation()})"

# Concrete Decorator B
class ConcreteDecoratorB(Decorator):
    def operation(self):
        return f"ConcreteDecoratorB({self._component.operation()})"

# Client code
if __name__ == "__main__":
    simple = ConcreteComponent()
    print("Result with simple component:")
    print(simple.operation())

    # Decorating the component
    decorator1 = ConcreteDecoratorA(simple)
    decorator2 = ConcreteDecoratorB(decorator1)
    print("\\nResult with decorated component:")
    print(decorator2.operation())

# Output:
# Result with simple component:
# ConcreteComponent
#
# Result with decorated component:
# ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))`,

  java: `// Java implementation
// Component interface
interface Component {
    String operation();
}

// Concrete Component
class ConcreteComponent implements Component {
    @Override
    public String operation() {
        return "ConcreteComponent";
    }
}

// Base Decorator
abstract class Decorator implements Component {
    protected Component component;

    public Decorator(Component component) {
        this.component = component;
    }

    @Override
    public String operation() {
        return component.operation();
    }
}

// Concrete Decorator A
class ConcreteDecoratorA extends Decorator {
    public ConcreteDecoratorA(Component component) {
        super(component);
    }

    @Override
    public String operation() {
        return "ConcreteDecoratorA(" + super.operation() + ")";
    }
}

// Concrete Decorator B
class ConcreteDecoratorB extends Decorator {
    public ConcreteDecoratorB(Component component) {
        super(component);
    }

    @Override
    public String operation() {
        return "ConcreteDecoratorB(" + super.operation() + ")";
    }
}

// Client code
public class DecoratorDemo {
    public static void main(String[] args) {
        Component simple = new ConcreteComponent();
        System.out.println("Result with simple component:");
        System.out.println(simple.operation());

        // Decorating the component
        Component decorator1 = new ConcreteDecoratorA(simple);
        Component decorator2 = new ConcreteDecoratorB(decorator1);
        System.out.println("\\nResult with decorated component:");
        System.out.println(decorator2.operation());
    }
}

// Output:
// Result with simple component:
// ConcreteComponent
//
// Result with decorated component:
// ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))`,

  c: `// C# implementation
using System;

// Component interface
public interface IComponent
{
    string Operation();
}

// Concrete Component
public class ConcreteComponent : IComponent
{
    public string Operation()
    {
        return "ConcreteComponent";
    }
}

// Base Decorator
public abstract class Decorator : IComponent
{
    protected IComponent _component;

    public Decorator(IComponent component)
    {
        _component = component;
    }

    public virtual string Operation()
    {
        return _component.Operation();
    }
}

// Concrete Decorator A
public class ConcreteDecoratorA : Decorator
{
    public ConcreteDecoratorA(IComponent component) : base(component)
    {
    }

    public override string Operation()
    {
        return $"ConcreteDecoratorA({base.Operation()})";
    }
}

// Concrete Decorator B
public class ConcreteDecoratorB : Decorator
{
    public ConcreteDecoratorB(IComponent component) : base(component)
    {
    }

    public override string Operation()
    {
        return $"ConcreteDecoratorB({base.Operation()})";
    }
}

// Client code
class Program
{
    static void Main(string[] args)
    {
        IComponent simple = new ConcreteComponent();
        Console.WriteLine("Result with simple component:");
        Console.WriteLine(simple.Operation());

        // Decorating the component
        IComponent decorator1 = new ConcreteDecoratorA(simple);
        IComponent decorator2 = new ConcreteDecoratorB(decorator1);
        Console.WriteLine("\\nResult with decorated component:");
        Console.WriteLine(decorator2.Operation());
    }
}

// Output:
// Result with simple component:
// ConcreteComponent
//
// Result with decorated component:
// ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))`,

  typescript: `// TypeScript implementation
// Component interface
interface Component {
    operation(): string;
}

// Concrete Component
class ConcreteComponent implements Component {
    public operation(): string {
        return 'ConcreteComponent';
    }
}

// Base Decorator
class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

// Concrete Decorator A
class ConcreteDecoratorA extends Decorator {
    public operation(): string {
        return \`ConcreteDecoratorA(\${super.operation()})\`;
    }
}

// Concrete Decorator B
class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return \`ConcreteDecoratorB(\${super.operation()})\`;
    }
}

// Client code
function clientCode(component: Component) {
    console.log(\`RESULT: \${component.operation()}\`);
}

// Simple component usage
const simple = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

// Decorated component usage
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);

// Output:
// Client: I've got a simple component:
// RESULT: ConcreteComponent
//
// Client: Now I've got a decorated component:
// RESULT: ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))`
}; 