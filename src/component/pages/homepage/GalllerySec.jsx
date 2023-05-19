import React from "react";

const GalllerySec = () => {
  return (
    <div>
      <h1
        id="chefs"
        className="text-3xl font-bold text-gray-800 my-6 text-center"
      >
        Trending Toys
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="Image 1"
            className="w-full h-auto rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md">
            <div className="bg-black bg-opacity-50 text-white absolute inset-0 flex items-center justify-center m-0">
              <div className="bg-white rounded shadow-lg p-4">
                <p className="text-gray-700 mb-2">Toy Name</p>
                <p className="text-gray-700 mb-2">Price: 5 $</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 mr-1">Rating: 5</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1.317l3.09 6.212 6.905 1.002-4.997 4.87L15.091 19 10 15.795 4.909 19l1.003-6.599L0 8.531l6.905-1.002L10 1.317z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded btn-sm">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Add more images as needed */}
      </div>
      <div className="flex justify-center items-center m-8">
        <button className="btn btn-outline">View All</button>
      </div>
    </div>
  );
};

export default GalllerySec;
