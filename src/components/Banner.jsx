import React, { useState } from "react";
import { FiMap, FiMapPin, FiSearch } from "react-icons/fi";

const Banner = ({ query, handleInputChange }) => {
  return (
    <div className="max-w-screen-2xl contaienr mx-auto x1:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-black mb-3">
        Find your
        <span className="text-blue-700"> new job </span>
        today
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Unlock Your Future: Where Opportunities and Ambitions Meet Your Journey
        Starts Here!
      </p>
      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-500 focus:within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 2-full">
            <input
              type="text"
              name="title"
              placeholder="Search"
              id="title"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:loading-6"
              onChange={handleInputChange}
              value={query}
            />
            <FiSearch className="absolute mt-3 ml-2 text-gray-400" />
          </div>
          <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-500 focus:within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 2-full">
            <input
              type="text"
              name="title"
              placeholder="Location"
              id="title"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:loading-6"
            />
            <FiMapPin className="absolute mt-3 ml-2 text-gray-400" />
          </div>
          <button
            type="submit"
            className="bg-blue-600 py-2 px-8 text-white md:rounded-s-none rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
