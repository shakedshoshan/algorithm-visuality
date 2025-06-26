export const facadeSnippets = {
  javascript: `// JavaScript implementation
// Subsystem 1
class Subsystem1 {
  operation1() {
    return "Subsystem1: Ready!\\n";
  }
  
  operationN() {
    return "Subsystem1: Go!\\n";
  }
}

// Subsystem 2
class Subsystem2 {
  operation1() {
    return "Subsystem2: Get ready!\\n";
  }
  
  operationZ() {
    return "Subsystem2: Fire!\\n";
  }
}

// Facade
class Facade {
  constructor(subsystem1 = null, subsystem2 = null) {
    this.subsystem1 = subsystem1 || new Subsystem1();
    this.subsystem2 = subsystem2 || new Subsystem2();
  }
  
  operation() {
    let result = "Facade initializes subsystems:\\n";
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation1();
    result += "Facade orders subsystems to perform the action:\\n";
    result += this.subsystem1.operationN();
    result += this.subsystem2.operationZ();
    return result;
  }
}

// Client code
function clientCode(facade) {
  console.log(facade.operation());
}

// The client code may have some of the subsystem's objects already created
const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);
clientCode(facade);

// Output:
// Facade initializes subsystems:
// Subsystem1: Ready!
// Subsystem2: Get ready!
// Facade orders subsystems to perform the action:
// Subsystem1: Go!
// Subsystem2: Fire!`,

  python: `# Python implementation
class Subsystem1:
    def operation1(self):
        return "Subsystem1: Ready!\\n"
    
    def operation_n(self):
        return "Subsystem1: Go!\\n"

class Subsystem2:
    def operation1(self):
        return "Subsystem2: Get ready!\\n"
    
    def operation_z(self):
        return "Subsystem2: Fire!\\n"

class Facade:
    def __init__(self, subsystem1=None, subsystem2=None):
        self._subsystem1 = subsystem1 or Subsystem1()
        self._subsystem2 = subsystem2 or Subsystem2()
    
    def operation(self):
        results = []
        results.append("Facade initializes subsystems:")
        results.append(self._subsystem1.operation1())
        results.append(self._subsystem2.operation1())
        results.append("Facade orders subsystems to perform the action:")
        results.append(self._subsystem1.operation_n())
        results.append(self._subsystem2.operation_z())
        return "".join(results)

# Client code
def client_code(facade):
    print(facade.operation())

# The client code may have some of the subsystem's objects already created
subsystem1 = Subsystem1()
subsystem2 = Subsystem2()
facade = Facade(subsystem1, subsystem2)
client_code(facade)

# Output:
# Facade initializes subsystems:
# Subsystem1: Ready!
# Subsystem2: Get ready!
# Facade orders subsystems to perform the action:
# Subsystem1: Go!
# Subsystem2: Fire!`,

  java: `// Java implementation
// Subsystem 1
class Subsystem1 {
    public String operation1() {
        return "Subsystem1: Ready!\\n";
    }

    public String operationN() {
        return "Subsystem1: Go!\\n";
    }
}

// Subsystem 2
class Subsystem2 {
    public String operation1() {
        return "Subsystem2: Get ready!\\n";
    }

    public String operationZ() {
        return "Subsystem2: Fire!\\n";
    }
}

// Facade
class Facade {
    protected Subsystem1 subsystem1;
    protected Subsystem2 subsystem2;

    public Facade(Subsystem1 subsystem1, Subsystem2 subsystem2) {
        this.subsystem1 = subsystem1 != null ? subsystem1 : new Subsystem1();
        this.subsystem2 = subsystem2 != null ? subsystem2 : new Subsystem2();
    }

    public String operation() {
        StringBuilder result = new StringBuilder();
        result.append("Facade initializes subsystems:\\n");
        result.append(subsystem1.operation1());
        result.append(subsystem2.operation1());
        result.append("Facade orders subsystems to perform the action:\\n");
        result.append(subsystem1.operationN());
        result.append(subsystem2.operationZ());
        return result.toString();
    }
}

// Client code
public class Client {
    public static void clientCode(Facade facade) {
        System.out.println(facade.operation());
    }

    public static void main(String[] args) {
        // The client code may have some of the subsystem's objects already created
        Subsystem1 subsystem1 = new Subsystem1();
        Subsystem2 subsystem2 = new Subsystem2();
        Facade facade = new Facade(subsystem1, subsystem2);
        clientCode(facade);
    }
}

// Output:
// Facade initializes subsystems:
// Subsystem1: Ready!
// Subsystem2: Get ready!
// Facade orders subsystems to perform the action:
// Subsystem1: Go!
// Subsystem2: Fire!`,

  c: `// C# implementation
using System;

// Subsystem 1
public class Subsystem1
{
    public string Operation1()
    {
        return "Subsystem1: Ready!\\n";
    }

    public string OperationN()
    {
        return "Subsystem1: Go!\\n";
    }
}

// Subsystem 2
public class Subsystem2
{
    public string Operation1()
    {
        return "Subsystem2: Get ready!\\n";
    }

    public string OperationZ()
    {
        return "Subsystem2: Fire!\\n";
    }
}

// Facade
public class Facade
{
    protected Subsystem1 _subsystem1;
    protected Subsystem2 _subsystem2;

    public Facade(Subsystem1 subsystem1 = null, Subsystem2 subsystem2 = null)
    {
        _subsystem1 = subsystem1 ?? new Subsystem1();
        _subsystem2 = subsystem2 ?? new Subsystem2();
    }

    public string Operation()
    {
        string result = "Facade initializes subsystems:\\n";
        result += _subsystem1.Operation1();
        result += _subsystem2.Operation1();
        result += "Facade orders subsystems to perform the action:\\n";
        result += _subsystem1.OperationN();
        result += _subsystem2.OperationZ();
        return result;
    }
}

// Client code
class Client
{
    public static void ClientCode(Facade facade)
    {
        Console.WriteLine(facade.Operation());
    }

    static void Main(string[] args)
    {
        // The client code may have some of the subsystem's objects already created
        Subsystem1 subsystem1 = new Subsystem1();
        Subsystem2 subsystem2 = new Subsystem2();
        Facade facade = new Facade(subsystem1, subsystem2);
        ClientCode(facade);
    }
}

// Output:
// Facade initializes subsystems:
// Subsystem1: Ready!
// Subsystem2: Get ready!
// Facade orders subsystems to perform the action:
// Subsystem1: Go!
// Subsystem2: Fire!`,

  typescript: `// TypeScript implementation
// Subsystem 1
class Subsystem1 {
    public operation1(): string {
        return "Subsystem1: Ready!\\n";
    }

    public operationN(): string {
        return "Subsystem1: Go!\\n";
    }
}

// Subsystem 2
class Subsystem2 {
    public operation1(): string {
        return "Subsystem2: Get ready!\\n";
    }

    public operationZ(): string {
        return "Subsystem2: Fire!\\n";
    }
}

// Facade
class Facade {
    protected subsystem1: Subsystem1;
    protected subsystem2: Subsystem2;

    constructor(subsystem1?: Subsystem1, subsystem2?: Subsystem2) {
        this.subsystem1 = subsystem1 || new Subsystem1();
        this.subsystem2 = subsystem2 || new Subsystem2();
    }

    public operation(): string {
        let result = "Facade initializes subsystems:\\n";
        result += this.subsystem1.operation1();
        result += this.subsystem2.operation1();
        result += "Facade orders subsystems to perform the action:\\n";
        result += this.subsystem1.operationN();
        result += this.subsystem2.operationZ();
        return result;
    }
}

// Client code
function clientCode(facade: Facade) {
    console.log(facade.operation());
}

// The client code may have some of the subsystem's objects already created
const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);
clientCode(facade);

// Output:
// Facade initializes subsystems:
// Subsystem1: Ready!
// Subsystem2: Get ready!
// Facade orders subsystems to perform the action:
// Subsystem1: Go!
// Subsystem2: Fire!`
}; 