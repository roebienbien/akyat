import React from 'react';
import { FaSearch } from 'react-icons/fa';

export const SearchBar = () => {
  return (
    <div className="flex h-full w-1/2 items-center justify-start rounded-full border border-gray-400 px-4">
      <div className="flex w-full items-center gap-x-4">
        <input type="text" placeholder="Search Trail" className="h-full w-full flex-grow bg-transparent outline-none focus:ring-0" />
        <button className="flex items-center justify-center rounded-full bg-green-600 p-2">
          <FaSearch className="text-gray-200" />
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
