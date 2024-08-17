import React from "react";
import { Link } from "react-router-dom";
import shoponicon from "../../assests/s-high-resolution-logo-transparent.png";

function Header() {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link
          to={`/`}
          className="flex  cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img className="w-12 h-12" src={shoponicon} alt="logo" />
          <span className="ml-3 text-xl">ShopOn</span>
        </Link>

        <div className="relative lg:w-1/3 w-3/4">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for Products..."
            required
          />
        </div>

        <Link
          to={"/cart"}
          className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none
     hover:bg-indigo-700 rounded text-base mt-4 md:mt-0"
        >
          Go To Cart
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;
