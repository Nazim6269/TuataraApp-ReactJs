import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex-col space-y-4 text-left px-6">
        <div className="text-7xl font-bold text-indigo-700">404</div>
        <div className="text-stone-500 font-medium">
          Oops, you still haven't found what you lookng for?
        </div>
        <div className="flex space-x-4 items-center justify-start">
          <Link to="/">
            <div className="bg-indigo-700 px-4 py-1 text-white font-medium border-2 border-gray-400  hover:scale-105 cursor-pointer">
              <svg className="fill-current mr-2 w-4" viewBox="0 0 448 512">
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
            </div>
          </Link>
          <div className="text-sm font-medium text-stone-500">
            Back to Home Page
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
