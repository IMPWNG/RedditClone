import React from 'react';
import { SearchIcon } from '@heroicons/react/solid'

export default function Search() {
  return (
    <>
      <form
        action=""
        className="px-3 flex rounded-md border bg-reddit_dark-brighter border-reddit_border mx-4 flex-grow"
      >
        <SearchIcon className="text-gray-300 h-6 w-6 mt-1" />
        <input
          type="text"
          className="bg-reddit_dark-brighter text-sm p-1 pl-2 pr-0 focus:outline-none text-white block"
          placeholder="Search"
        />
      </form>
    </>
  );
};