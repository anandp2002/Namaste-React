const ShimmerMenu = () => {
  return (
    <div className="flex flex-col items-center p-6 sm:p-10 bg-gray-50 min-h-screen mt-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center p-6 border-b animate-pulse">
          <div className="w-32 h-32 bg-gray-200 rounded-lg shadow-md"></div>
          <div className="mt-4 sm:mt-0 sm:ml-6 space-y-4">
            <div className="w-48 h-6 bg-gray-200 rounded"></div>
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
            <div className="w-24 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="p-6">
          <h2 className="w-32 h-6 bg-gray-200 rounded mb-5 animate-pulse"></h2>
          <ul className="space-y-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row justify-between items-center p-3 border rounded-md bg-white shadow animate-pulse"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start">
                  <div className="w-48 h-4 bg-gray-200 rounded"></div>
                  <div className="w-24 h-4 bg-gray-200 rounded ml-0 sm:ml-4 mt-1 sm:mt-0"></div>
                </div>
                <div className="flex items-center mt-2 sm:mt-0">
                  <div className="w-20 h-4 bg-gray-200 rounded"></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShimmerMenu;
