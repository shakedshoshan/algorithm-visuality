import QueueSort from '../../components/sort/queueSort/QueueSort';

const SortPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Queue Sorting Algorithms</h2>
      <QueueSort />
    </div>
  );
};

export default SortPage; 