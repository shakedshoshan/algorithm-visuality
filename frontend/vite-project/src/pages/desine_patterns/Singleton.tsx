const Singleton = () => (
  <div className="max-w-2xl mx-auto p-8 bg-white rounded shadow">
    <h1 className="text-3xl font-bold mb-4">Singleton Pattern</h1>
    <p className="text-lg text-gray-700">
      The Singleton Pattern ensures a class has only one instance and provides a global point of access to it. This is useful when exactly one object is needed to coordinate actions across the system, such as a configuration manager or a connection pool.
    </p>
  </div>
);

export default Singleton; 