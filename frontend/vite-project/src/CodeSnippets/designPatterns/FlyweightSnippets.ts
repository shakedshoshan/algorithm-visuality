export const flyweightSnippets = {
  javascript: `// JavaScript implementation
// Flyweight class
class Flyweight {
  constructor(sharedState) {
    this.sharedState = sharedState;
  }

  operation(uniqueState) {
    const shared = JSON.stringify(this.sharedState);
    const unique = JSON.stringify(uniqueState);
    console.log(\`Flyweight: Displaying shared (\${shared}) and unique (\${unique}) state.\`);
  }
}

// Flyweight Factory
class FlyweightFactory {
  constructor(initialFlyweights) {
    this.flyweights = {};
    
    for (const state of initialFlyweights) {
      this.flyweights[this.getKey(state)] = new Flyweight(state);
    }
  }

  // Returns a Flyweight's string hash for a given state
  getKey(state) {
    return state.join('_');
  }

  // Returns an existing Flyweight with a given state or creates a new one
  getFlyweight(sharedState) {
    const key = this.getKey(sharedState);

    if (!(key in this.flyweights)) {
      console.log('FlyweightFactory: Cannot find a flyweight, creating new one.');
      this.flyweights[key] = new Flyweight(sharedState);
    } else {
      console.log('FlyweightFactory: Reusing existing flyweight.');
    }

    return this.flyweights[key];
  }

  // Lists all flyweights
  listFlyweights() {
    const count = Object.keys(this.flyweights).length;
    console.log(\`\\nFlyweightFactory: I have \${count} flyweights:\`);
    for (const key in this.flyweights) {
      console.log(key);
    }
  }
}

// Client code
const factory = new FlyweightFactory([
  ['Chevrolet', 'Camaro2018', 'pink'],
  ['Mercedes Benz', 'C300', 'black'],
  ['Mercedes Benz', 'C500', 'red'],
  ['BMW', 'M5', 'red'],
  ['BMW', 'X6', 'white']
]);

factory.listFlyweights();

// Client code uses the factory to get flyweight objects.
// The client doesn't create flyweights directly.
function addCarToPoliceDatabase(
  factory, plates, owner,
  brand, model, color
) {
  console.log('\\nClient: Adding a car to database.');
  
  // The client code looks for an existing flyweight
  const flyweight = factory.getFlyweight([brand, model, color]);
  
  // The client code passes the extrinsic state to the flyweight's methods
  flyweight.operation([plates, owner]);
}

addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');
addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');

factory.listFlyweights();`,

  python: `# Python implementation
import json
from typing import Dict, List, Any

# Flyweight class
class Flyweight:
    def __init__(self, shared_state: List) -> None:
        self.shared_state = shared_state

    def operation(self, unique_state: List) -> None:
        s = json.dumps(self.shared_state)
        u = json.dumps(unique_state)
        print(f"Flyweight: Displaying shared ({s}) and unique ({u}) state.")

# Flyweight Factory
class FlyweightFactory:
    _flyweights: Dict[str, Flyweight] = {}

    def __init__(self, initial_flyweights: List) -> None:
        for state in initial_flyweights:
            self._flyweights[self.get_key(state)] = Flyweight(state)

    # Returns a Flyweight's string hash for a given state
    def get_key(self, state: List) -> str:
        return "_".join(sorted(state))

    # Returns an existing Flyweight with a given state or creates a new one
    def get_flyweight(self, shared_state: List) -> Flyweight:
        key = self.get_key(shared_state)

        if key not in self._flyweights:
            print("FlyweightFactory: Cannot find a flyweight, creating new one.")
            self._flyweights[key] = Flyweight(shared_state)
        else:
            print("FlyweightFactory: Reusing existing flyweight.")

        return self._flyweights[key]

    # Lists all flyweights
    def list_flyweights(self) -> None:
        count = len(self._flyweights)
        print(f"\\nFlyweightFactory: I have {count} flyweights:")
        print("\\n".join(self._flyweights.keys()))

# Client code
if __name__ == "__main__":
    factory = FlyweightFactory([
        ["Chevrolet", "Camaro2018", "pink"],
        ["Mercedes Benz", "C300", "black"],
        ["Mercedes Benz", "C500", "red"],
        ["BMW", "M5", "red"],
        ["BMW", "X6", "white"]
    ])

    factory.list_flyweights()

    # Client code uses the factory to get flyweight objects
    def add_car_to_police_database(
        factory: FlyweightFactory, plates: str, owner: str,
        brand: str, model: str, color: str
    ) -> None:
        print("\\nClient: Adding a car to database.")
        
        # The client code looks for an existing flyweight
        flyweight = factory.get_flyweight([brand, model, color])
        
        # The client code passes the extrinsic state to the flyweight's methods
        flyweight.operation([plates, owner])

    add_car_to_police_database(factory, "CL234IR", "James Doe", "BMW", "M5", "red")
    add_car_to_police_database(factory, "CL234IR", "James Doe", "BMW", "X1", "red")

    factory.list_flyweights()`,

  java: `// Java implementation
import java.util.HashMap;
import java.util.Map;
import java.util.Arrays;

// Flyweight class
class Flyweight {
    private final String[] sharedState;

    public Flyweight(String[] sharedState) {
        this.sharedState = sharedState;
    }

    public void operation(String[] uniqueState) {
        String s = Arrays.toString(sharedState);
        String u = Arrays.toString(uniqueState);
        System.out.println("Flyweight: Displaying shared (" + s + ") and unique (" + u + ") state.");
    }
}

// Flyweight Factory
class FlyweightFactory {
    private Map<String, Flyweight> flyweights = new HashMap<>();

    public FlyweightFactory(String[][] initialFlyweights) {
        for (String[] state : initialFlyweights) {
            flyweights.put(getKey(state), new Flyweight(state));
        }
    }

    // Returns a Flyweight's string hash for a given state
    private String getKey(String[] state) {
        return String.join("_", state);
    }

    // Returns an existing Flyweight with a given state or creates a new one
    public Flyweight getFlyweight(String[] sharedState) {
        String key = getKey(sharedState);

        if (!flyweights.containsKey(key)) {
            System.out.println("FlyweightFactory: Cannot find a flyweight, creating new one.");
            flyweights.put(key, new Flyweight(sharedState));
        } else {
            System.out.println("FlyweightFactory: Reusing existing flyweight.");
        }

        return flyweights.get(key);
    }

    // Lists all flyweights
    public void listFlyweights() {
        int count = flyweights.size();
        System.out.println("\\nFlyweightFactory: I have " + count + " flyweights:");
        flyweights.keySet().forEach(System.out::println);
    }
}

// Client code
public class FlyweightDemo {
    public static void main(String[] args) {
        FlyweightFactory factory = new FlyweightFactory(new String[][] {
            {"Chevrolet", "Camaro2018", "pink"},
            {"Mercedes Benz", "C300", "black"},
            {"Mercedes Benz", "C500", "red"},
            {"BMW", "M5", "red"},
            {"BMW", "X6", "white"}
        });

        factory.listFlyweights();

        // Client code uses the factory to get flyweight objects
        addCarToPoliceDatabase(factory, "CL234IR", "James Doe", "BMW", "M5", "red");
        addCarToPoliceDatabase(factory, "CL234IR", "James Doe", "BMW", "X1", "red");

        factory.listFlyweights();
    }

    // Client code
    private static void addCarToPoliceDatabase(
        FlyweightFactory factory, String plates, String owner,
        String brand, String model, String color
    ) {
        System.out.println("\\nClient: Adding a car to database.");
        
        // The client code looks for an existing flyweight
        Flyweight flyweight = factory.getFlyweight(new String[] {brand, model, color});
        
        // The client code passes the extrinsic state to the flyweight's methods
        flyweight.operation(new String[] {plates, owner});
    }
}`,

  c: `// C# implementation
using System;
using System.Collections.Generic;
using System.Linq;

// Flyweight class
class Flyweight
{
    private readonly string[] _sharedState;

    public Flyweight(string[] sharedState)
    {
        _sharedState = sharedState;
    }

    public void Operation(string[] uniqueState)
    {
        string s = string.Join(",", _sharedState);
        string u = string.Join(",", uniqueState);
        Console.WriteLine($"Flyweight: Displaying shared ({s}) and unique ({u}) state.");
    }
}

// Flyweight Factory
class FlyweightFactory
{
    private Dictionary<string, Flyweight> _flyweights = new Dictionary<string, Flyweight>();

    public FlyweightFactory(string[][] initialFlyweights)
    {
        foreach (var state in initialFlyweights)
        {
            _flyweights[GetKey(state)] = new Flyweight(state);
        }
    }

    // Returns a Flyweight's string hash for a given state
    private string GetKey(string[] state)
    {
        return string.Join("_", state);
    }

    // Returns an existing Flyweight with a given state or creates a new one
    public Flyweight GetFlyweight(string[] sharedState)
    {
        var key = GetKey(sharedState);

        if (!_flyweights.ContainsKey(key))
        {
            Console.WriteLine("FlyweightFactory: Cannot find a flyweight, creating new one.");
            _flyweights[key] = new Flyweight(sharedState);
        }
        else
        {
            Console.WriteLine("FlyweightFactory: Reusing existing flyweight.");
        }

        return _flyweights[key];
    }

    // Lists all flyweights
    public void ListFlyweights()
    {
        var count = _flyweights.Count;
        Console.WriteLine($"\\nFlyweightFactory: I have {count} flyweights:");
        foreach (var key in _flyweights.Keys)
        {
            Console.WriteLine(key);
        }
    }
}

// Client code
class Program
{
    static void Main(string[] args)
    {
        var factory = new FlyweightFactory(new string[][] {
            new string[] {"Chevrolet", "Camaro2018", "pink"},
            new string[] {"Mercedes Benz", "C300", "black"},
            new string[] {"Mercedes Benz", "C500", "red"},
            new string[] {"BMW", "M5", "red"},
            new string[] {"BMW", "X6", "white"}
        });

        factory.ListFlyweights();

        // Client code uses the factory to get flyweight objects
        AddCarToPoliceDatabase(factory, "CL234IR", "James Doe", "BMW", "M5", "red");
        AddCarToPoliceDatabase(factory, "CL234IR", "James Doe", "BMW", "X1", "red");

        factory.ListFlyweights();
    }

    // Client code
    private static void AddCarToPoliceDatabase(
        FlyweightFactory factory, string plates, string owner,
        string brand, string model, string color
    )
    {
        Console.WriteLine("\\nClient: Adding a car to database.");
        
        // The client code looks for an existing flyweight
        var flyweight = factory.GetFlyweight(new string[] {brand, model, color});
        
        // The client code passes the extrinsic state to the flyweight's methods
        flyweight.Operation(new string[] {plates, owner});
    }
}`,

  typescript: `// TypeScript implementation
// Flyweight class
class Flyweight {
    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState: any): void {
        const s = JSON.stringify(this.sharedState);
        const u = JSON.stringify(uniqueState);
        console.log(\`Flyweight: Displaying shared (\${s}) and unique (\${u}) state.\`);
    }
}

// Flyweight Factory
class FlyweightFactory {
    private flyweights: {[key: string]: Flyweight} = {};

    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }

    // Returns a Flyweight's string hash for a given state
    private getKey(state: string[]): string {
        return state.join('_');
    }

    // Returns an existing Flyweight with a given state or creates a new one
    public getFlyweight(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState);

        if (!(key in this.flyweights)) {
            console.log('FlyweightFactory: Cannot find a flyweight, creating new one.');
            this.flyweights[key] = new Flyweight(sharedState);
        } else {
            console.log('FlyweightFactory: Reusing existing flyweight.');
        }

        return this.flyweights[key];
    }

    // Lists all flyweights
    public listFlyweights(): void {
        const count = Object.keys(this.flyweights).length;
        console.log(\`\\nFlyweightFactory: I have \${count} flyweights:\`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}

// Client code
const factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white']
]);

factory.listFlyweights();

// Client code uses the factory to get flyweight objects
function addCarToPoliceDatabase(
    factory: FlyweightFactory, plates: string, owner: string,
    brand: string, model: string, color: string
): void {
    console.log('\\nClient: Adding a car to database.');
    
    // The client code looks for an existing flyweight
    const flyweight = factory.getFlyweight([brand, model, color]);
    
    // The client code passes the extrinsic state to the flyweight's methods
    flyweight.operation([plates, owner]);
}

addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');
addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');

factory.listFlyweights();`
}; 