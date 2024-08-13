const Shimmer = () => {
  return (
    <div className="lg:mx-32 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 shadow-md rounded-lg p-4 animate-pulse"
        >
          <div className="h-48 bg-gray-200 rounded-lg mb-4 w-full"></div>
          <div className="space-y-4">
            <div className="w-full h-6 bg-gray-200 rounded"></div>
            <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
            <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
