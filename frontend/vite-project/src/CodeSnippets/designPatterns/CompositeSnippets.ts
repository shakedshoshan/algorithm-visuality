export const compositeSnippets = {
  javascript: `// JavaScript implementation
// Component interface
class Component {
  constructor(name) {
    this.name = name;
  }

  operation() {
    throw new Error("Operation method must be implemented");
  }

  add(component) {
    throw new Error("Add method not implemented");
  }

  remove(component) {
    throw new Error("Remove method not implemented");
  }

  getChild(index) {
    throw new Error("GetChild method not implemented");
  }
}

// Leaf class
class Leaf extends Component {
  constructor(name) {
    super(name);
  }

  operation() {
    return \`Leaf \${this.name} operation\`;
  }
}

// Composite class
class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }

  operation() {
    const results = [\`Composite \${this.name} operation\`];
    for (const child of this.children) {
      results.push(child.operation());
    }
    return results.join('\\n');
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  getChild(index) {
    return this.children[index];
  }
}

// Client code
const leaf1 = new Leaf("A");
const leaf2 = new Leaf("B");
const leaf3 = new Leaf("C");

const composite1 = new Composite("X");
composite1.add(leaf1);
composite1.add(leaf2);

const composite2 = new Composite("Y");
composite2.add(leaf3);

const composite3 = new Composite("Z");
composite3.add(composite1);
composite3.add(composite2);

console.log(composite3.operation());`,

  python: `# Python implementation
from abc import ABC, abstractmethod

# Component interface
class Component(ABC):
    def __init__(self, name):
        self.name = name
    
    @abstractmethod
    def operation(self):
        pass
    
    def add(self, component):
        pass
    
    def remove(self, component):
        pass
    
    def get_child(self, index):
        pass

# Leaf class
class Leaf(Component):
    def operation(self):
        return f"Leaf {self.name} operation"

# Composite class
class Composite(Component):
    def __init__(self, name):
        super().__init__(name)
        self.children = []
    
    def operation(self):
        results = [f"Composite {self.name} operation"]
        for child in self.children:
            results.append(child.operation())
        return "\\n".join(results)
    
    def add(self, component):
        self.children.append(component)
    
    def remove(self, component):
        if component in self.children:
            self.children.remove(component)
    
    def get_child(self, index):
        return self.children[index]

# Client code
if __name__ == "__main__":
    leaf1 = Leaf("A")
    leaf2 = Leaf("B")
    leaf3 = Leaf("C")
    
    composite1 = Composite("X")
    composite1.add(leaf1)
    composite1.add(leaf2)
    
    composite2 = Composite("Y")
    composite2.add(leaf3)
    
    composite3 = Composite("Z")
    composite3.add(composite1)
    composite3.add(composite2)
    
    print(composite3.operation())`,

  java: `// Java implementation
// Component interface
interface Component {
    String operation();
    void add(Component component);
    void remove(Component component);
    Component getChild(int index);
}

// Leaf class
class Leaf implements Component {
    private String name;
    
    public Leaf(String name) {
        this.name = name;
    }
    
    @Override
    public String operation() {
        return "Leaf " + name + " operation";
    }
    
    @Override
    public void add(Component component) {
        throw new UnsupportedOperationException("Cannot add to a leaf");
    }
    
    @Override
    public void remove(Component component) {
        throw new UnsupportedOperationException("Cannot remove from a leaf");
    }
    
    @Override
    public Component getChild(int index) {
        throw new UnsupportedOperationException("Leaf has no children");
    }
}

// Composite class
class Composite implements Component {
    private String name;
    private List<Component> children = new ArrayList<>();
    
    public Composite(String name) {
        this.name = name;
    }
    
    @Override
    public String operation() {
        StringBuilder result = new StringBuilder("Composite " + name + " operation\\n");
        for (Component child : children) {
            result.append(child.operation()).append("\\n");
        }
        return result.toString().trim();
    }
    
    @Override
    public void add(Component component) {
        children.add(component);
    }
    
    @Override
    public void remove(Component component) {
        children.remove(component);
    }
    
    @Override
    public Component getChild(int index) {
        return children.get(index);
    }
}

// Client code
public class CompositeDemo {
    public static void main(String[] args) {
        Component leaf1 = new Leaf("A");
        Component leaf2 = new Leaf("B");
        Component leaf3 = new Leaf("C");
        
        Composite composite1 = new Composite("X");
        composite1.add(leaf1);
        composite1.add(leaf2);
        
        Composite composite2 = new Composite("Y");
        composite2.add(leaf3);
        
        Composite composite3 = new Composite("Z");
        composite3.add(composite1);
        composite3.add(composite2);
        
        System.out.println(composite3.operation());
    }
}`,

  c: `// C# implementation
using System;
using System.Collections.Generic;
using System.Text;

// Component interface
public interface IComponent
{
    string Operation();
    void Add(IComponent component);
    void Remove(IComponent component);
    IComponent GetChild(int index);
}

// Leaf class
public class Leaf : IComponent
{
    private string _name;
    
    public Leaf(string name)
    {
        _name = name;
    }
    
    public string Operation()
    {
        return $"Leaf {_name} operation";
    }
    
    public void Add(IComponent component)
    {
        throw new NotSupportedException("Cannot add to a leaf");
    }
    
    public void Remove(IComponent component)
    {
        throw new NotSupportedException("Cannot remove from a leaf");
    }
    
    public IComponent GetChild(int index)
    {
        throw new NotSupportedException("Leaf has no children");
    }
}

// Composite class
public class Composite : IComponent
{
    private string _name;
    private List<IComponent> _children = new List<IComponent>();
    
    public Composite(string name)
    {
        _name = name;
    }
    
    public string Operation()
    {
        StringBuilder result = new StringBuilder($"Composite {_name} operation\\n");
        foreach (var child in _children)
        {
            result.Append(child.Operation()).Append("\\n");
        }
        return result.ToString().TrimEnd();
    }
    
    public void Add(IComponent component)
    {
        _children.Add(component);
    }
    
    public void Remove(IComponent component)
    {
        _children.Remove(component);
    }
    
    public IComponent GetChild(int index)
    {
        return _children[index];
    }
}

// Client code
class Program
{
    static void Main(string[] args)
    {
        IComponent leaf1 = new Leaf("A");
        IComponent leaf2 = new Leaf("B");
        IComponent leaf3 = new Leaf("C");
        
        Composite composite1 = new Composite("X");
        composite1.Add(leaf1);
        composite1.Add(leaf2);
        
        Composite composite2 = new Composite("Y");
        composite2.Add(leaf3);
        
        Composite composite3 = new Composite("Z");
        composite3.Add(composite1);
        composite3.Add(composite2);
        
        Console.WriteLine(composite3.Operation());
    }
}`
}; 