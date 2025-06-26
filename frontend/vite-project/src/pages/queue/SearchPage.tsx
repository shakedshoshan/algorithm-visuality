import QueueSearch from '../../components/search/queueSearch/QueueSearch';

const SearchPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Queue Search Algorithms</h2>
      <QueueSearch />
    </div>
  );
};

export default SearchPage; 