
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">Welcome to Data Structure Visualizer</h1>
      <p className="text-xl text-gray-700 mb-8 text-center max-w-3xl">
        This website is designed to help you understand and visualize common data structures used in computer science and programming. 
        Our interactive visualizations make it easier to grasp these fundamental concepts and their applications in real-world scenarios.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Popular Data Structures</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-xl font-semibold text-indigo-600">1. Array</h3>
            <p className="text-gray-700">A collection of elements stored at contiguous memory locations. Arrays provide fast access to elements using indices and are efficient for storing and accessing sequential data.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-indigo-600">2. Linked List</h3>
            <p className="text-gray-700">A linear collection of data elements connected via pointers. Linked lists allow for efficient insertion and deletion of elements, but have slower access times compared to arrays.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-indigo-600">3. Stack</h3>
            <p className="text-gray-700">A Last-In-First-Out (LIFO) data structure. Stacks are useful for managing function calls, undo mechanisms, and parsing expressions.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-indigo-600">4. Queue</h3>
            <p className="text-gray-700">A First-In-First-Out (FIFO) data structure. Queues are commonly used in breadth-first search algorithms, managing tasks in multi-threading, and handling requests in computer systems. <Link to="/queue" className="text-indigo-600 hover:underline font-semibold">Try our Queue visualizer!</Link></p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-indigo-600">5. Hash Table</h3>
            <p className="text-gray-700">A structure that maps keys to values for efficient lookup. Hash tables provide constant-time average case complexity for insertions, deletions, and lookups, making them ideal for implementing dictionaries and caches.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-indigo-600">6. Tree</h3>
            <p className="text-gray-700">A hierarchical structure with a root value and subtrees of children. Trees are used in file systems, organization charts, and for representing hierarchical relationships.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-indigo-600">7. Graph</h3>
            <p className="text-gray-700">A non-linear data structure consisting of nodes and edges. Graphs are used to represent networks, social connections, and complex relationships between entities.</p>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <Link to="/array" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
          Start Exploring
        </Link>
      </div>
    </div>
  );
};

export default Home;
