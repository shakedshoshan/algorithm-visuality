export const proxySnippets = {
  javascript: `
/**
 * Subject Interface: defines the common interface for RealSubject and Proxy
 */
class Subject {
  request() {
    throw new Error('Method not implemented');
  }
}

/**
 * RealSubject: the real object that the proxy represents
 */
class RealSubject extends Subject {
  request() {
    console.log('RealSubject: Handling request');
  }
}

/**
 * Proxy: maintains a reference to the RealSubject and controls access to it
 */
class Proxy extends Subject {
  constructor(realSubject) {
    super();
    this.realSubject = realSubject;
  }

  request() {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }

  checkAccess() {
    console.log('Proxy: Checking access before forwarding the request');
    return true;
  }

  logAccess() {
    console.log('Proxy: Logging the time of request');
  }
}

// Client code
const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);

console.log('Client: Executing the client code with a proxy:');
proxy.request();
`,

  python: `
# Subject Interface: defines the common interface for RealSubject and Proxy
from abc import ABC, abstractmethod

class Subject(ABC):
    @abstractmethod
    def request(self) -> None:
        pass

# RealSubject: the real object that the proxy represents
class RealSubject(Subject):
    def request(self) -> None:
        print("RealSubject: Handling request")

# Proxy: maintains a reference to the RealSubject and controls access to it
class Proxy(Subject):
    def __init__(self, real_subject: RealSubject) -> None:
        self._real_subject = real_subject

    def request(self) -> None:
        if self.check_access():
            self._real_subject.request()
            self.log_access()

    def check_access(self) -> bool:
        print("Proxy: Checking access before forwarding the request")
        return True

    def log_access(self) -> None:
        print("Proxy: Logging the time of request")

# Client code
def client_code(subject: Subject) -> None:
    subject.request()

if __name__ == "__main__":
    print("Client: Executing the client code with a real subject:")
    real_subject = RealSubject()
    client_code(real_subject)

    print("")

    print("Client: Executing the same client code with a proxy:")
    proxy = Proxy(real_subject)
    client_code(proxy)
`,

  java: `
// Subject Interface: defines the common interface for RealSubject and Proxy
interface Subject {
    void request();
}

// RealSubject: the real object that the proxy represents
class RealSubject implements Subject {
    @Override
    public void request() {
        System.out.println("RealSubject: Handling request");
    }
}

// Proxy: maintains a reference to the RealSubject and controls access to it
class Proxy implements Subject {
    private RealSubject realSubject;

    public Proxy(RealSubject realSubject) {
        this.realSubject = realSubject;
    }

    @Override
    public void request() {
        if (checkAccess()) {
            realSubject.request();
            logAccess();
        }
    }

    private boolean checkAccess() {
        System.out.println("Proxy: Checking access before forwarding the request");
        return true;
    }

    private void logAccess() {
        System.out.println("Proxy: Logging the time of request");
    }
}

// Client code
public class Client {
    public static void main(String[] args) {
        System.out.println("Client: Executing the client code with a real subject:");
        RealSubject realSubject = new RealSubject();
        realSubject.request();

        System.out.println("");

        System.out.println("Client: Executing the same client code with a proxy:");
        Proxy proxy = new Proxy(realSubject);
        proxy.request();
    }
}
`,

  csharp: `
// Subject Interface: defines the common interface for RealSubject and Proxy
public interface ISubject
{
    void Request();
}

// RealSubject: the real object that the proxy represents
public class RealSubject : ISubject
{
    public void Request()
    {
        Console.WriteLine("RealSubject: Handling request");
    }
}

// Proxy: maintains a reference to the RealSubject and controls access to it
public class Proxy : ISubject
{
    private RealSubject _realSubject;

    public Proxy(RealSubject realSubject)
    {
        _realSubject = realSubject;
    }

    public void Request()
    {
        if (CheckAccess())
        {
            _realSubject.Request();
            LogAccess();
        }
    }

    private bool CheckAccess()
    {
        Console.WriteLine("Proxy: Checking access before forwarding the request");
        return true;
    }

    private void LogAccess()
    {
        Console.WriteLine("Proxy: Logging the time of request");
    }
}

// Client code
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Client: Executing the client code with a real subject:");
        var realSubject = new RealSubject();
        realSubject.Request();

        Console.WriteLine();

        Console.WriteLine("Client: Executing the same client code with a proxy:");
        var proxy = new Proxy(realSubject);
        proxy.Request();
    }
}
`,

  typescript: `
/**
 * Subject Interface: defines the common interface for RealSubject and Proxy
 */
interface Subject {
    request(): void;
}

/**
 * RealSubject: the real object that the proxy represents
 */
class RealSubject implements Subject {
    public request(): void {
        console.log('RealSubject: Handling request');
    }
}

/**
 * Proxy: maintains a reference to the RealSubject and controls access to it
 */
class Proxy implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    public request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        console.log('Proxy: Checking access before forwarding the request');
        return true;
    }

    private logAccess(): void {
        console.log('Proxy: Logging the time of request');
    }
}

// Client code
const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);

console.log('Client: Executing the client code with a proxy:');
proxy.request();
`
}; 