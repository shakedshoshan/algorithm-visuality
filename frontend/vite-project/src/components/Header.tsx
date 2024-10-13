import { Link } from 'react-router-dom';


const Header= () => {
  return (
    <div className="sticky top-0 z-50 pb-10">
      <header className="bg-gradient-to-r from-indigo-800 to-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img src='/visualization-logo.png' alt="Logo" className="h-12 w-auto mr-4 transition-transform duration-300 transform group-hover:scale-110" />
            <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
              Data Structures Visualizer
            </span>
          </Link>
          <nav>
            <ul className="flex space-x-6 items-center">
              
              {[
                { to: "/array", label: "Array" },
                { to: "/linked-list", label: "Linked List" },
                { to: "/stack", label: "Stack" },
                { to: "/hash-table", label: "Hash Table" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="px-4 py-2 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
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
