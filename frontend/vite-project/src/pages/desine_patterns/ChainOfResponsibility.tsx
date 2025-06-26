const ChainOfResponsibility = () => (
  <div className="max-w-2xl mx-auto p-8 bg-white rounded shadow">
    <h1 className="text-3xl font-bold mb-4">Chain of Responsibility Pattern</h1>
    <p className="text-lg text-gray-700">
      The Chain of Responsibility Pattern passes a request along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.
    </p>
  </div>
);

export default ChainOfResponsibility; 