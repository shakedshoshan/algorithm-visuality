import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [dataStructuresOpen, setDataStructuresOpen] = useState(false);
  const [designPatternsOpen, setDesignPatternsOpen] = useState(false);
  const dataStructuresRef = useRef<HTMLLIElement>(null);
  const designPatternsRef = useRef<HTMLLIElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dataStructuresRef.current && !dataStructuresRef.current.contains(event.target as Node)) {
        setDataStructuresOpen(false);
      }
      if (designPatternsRef.current && !designPatternsRef.current.contains(event.target as Node)) {
        setDesignPatternsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const dataStructures = [
    { to: "/array", label: "Array" },
    { to: "/linked-list", label: "Linked List" },
    { to: "/stack", label: "Stack" },
    { to: "/queue", label: "Queue" },
    { to: "/hash-table", label: "Hash Table" },
  ];

  const designPatterns = [
    { to: "/creational", label: "Creational Patterns", submenu: [
      { to: "/singleton", label: "Singleton" },
      { to: "/factory", label: "Factory" },
      { to: "/abstract-factory", label: "Abstract Factory" },
      { to: "/builder", label: "Builder" },
      { to: "/prototype", label: "Prototype" },
    ]},
    { to: "/structural", label: "Structural Patterns", submenu: [
      { to: "/adapter", label: "Adapter" },
      { to: "/bridge", label: "Bridge" },
      { to: "/composite", label: "Composite" },
      { to: "/decorator", label: "Decorator" },
      { to: "/facade", label: "Facade" },
      { to: "/flyweight", label: "Flyweight" },
      { to: "/proxy", label: "Proxy" },
    ]},
    { to: "/behavioral", label: "Behavioral Patterns", submenu: [
      { to: "/observer", label: "Observer" },
      { to: "/strategy", label: "Strategy" },
      { to: "/command", label: "Command" },
      { to: "/state", label: "State" },
      { to: "/template-method", label: "Template Method" },
      { to: "/chain-of-responsibility", label: "Chain of Responsibility" },
      { to: "/iterator", label: "Iterator" },
      { to: "/mediator", label: "Mediator" },
      { to: "/memento", label: "Memento" },
      { to: "/visitor", label: "Visitor" },
    ]},
  ];

  return (
    <div className="sticky top-0 z-50 pb-10">
      <header className="bg-gradient-to-r from-indigo-800 to-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img src='/visualization-logo.png' alt="Logo" className="h-12 w-auto mr-4 transition-transform duration-300 transform group-hover:scale-110" />
            <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
              Algorithm & Pattern Visualizer
            </span>
          </Link>
          <nav>
            <ul className="flex space-x-6 items-center">
              
              {/* Data Structures Dropdown */}
              <li className="relative" ref={dataStructuresRef}>
                <button
                  className="px-4 py-2 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 text-sm font-medium flex items-center"
                  onClick={() => {
                    setDataStructuresOpen(!dataStructuresOpen);
                    setDesignPatternsOpen(false);
                  }}
                >
                  Data Structures
                  <svg className={`ml-1 w-4 h-4 transform transition-transform ${dataStructuresOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dataStructuresOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                  >
                    {dataStructures.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                        onClick={() => setDataStructuresOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Design Patterns Dropdown */}
              <li className="relative" ref={designPatternsRef}>
                <button
                  className="px-4 py-2 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 text-sm font-medium flex items-center"
                  onClick={() => {
                    setDesignPatternsOpen(!designPatternsOpen);
                    setDataStructuresOpen(false);
                  }}
                >
                  Design Patterns
                  <svg className={`ml-1 w-4 h-4 transform transition-transform ${designPatternsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {designPatternsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-lg py-2 z-50 max-h-[80vh] overflow-y-auto"
                  >
                    {designPatterns.map((category) => (
                      <div key={category.to} className="group">
                        <div className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-50 border-b border-gray-200 sticky top-0">
                          {category.label}
                        </div>
                        <div className="grid grid-cols-1 gap-0">
                          {category.submenu.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              className="block px-6 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                              onClick={() => setDesignPatternsOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </li>

              {/* Home Link */}
              <li>
                <Link
                  to="/"
                  className="px-4 py-2 rounded-lg bg-white text-indigo-800 hover:bg-indigo-200 transition-all duration-300 text-sm font-bold"
                >
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
