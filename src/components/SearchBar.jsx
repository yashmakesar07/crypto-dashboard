export const SearchBar = () => {
    return (
      <div className="text-white bg-gray-900 h-[90vh] flex justify-center items-center">
        <div className="relative w-3/4">
          <input
            type="search"
            placeholder=" Search Coin"
            className="w-full py-5 px-6 text-lg text-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <div className="absolute right-4 pr-4 top-1/2 -translate-y-1/2">
            <svg
              className="text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };