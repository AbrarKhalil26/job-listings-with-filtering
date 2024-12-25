import React from "react";

const SearchContent = ({ listSearch, setListSearch }) => {
  return (
    <div className="flex justify-between items-center gap-5 bg-white px-6 py-3 rounded-md shadow-custom-cyan -mt-7">
      <div className="flex flex-wrap gap-4">
        {listSearch.map((search) => (
          <div key={search} className="flex items-center">
            <p className="tags tags-noHover rounded-right-none">{search}</p>
            <button
              className="text-white bg-primary duration-300 hover:bg-veryDarkGrayishCyan w-full h-full px-1 rounded-r-md"
              onClick={() =>
                setListSearch((prev) => prev.filter((item) => item !== search))
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      {listSearch.length > 1 && (
        <button
          className="text-darkGrayishCyan hover:text-primary text-sm font-semibold hover:underline duration-300"
          onClick={() => setListSearch([])}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchContent;
