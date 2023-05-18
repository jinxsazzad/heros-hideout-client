import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const cards = [
    {
      picture: "image1.jpg",
      name: "Product 1",
      price: "$19.99",
      rating: 4.5,
    },
    {
      picture: "image2.jpg",
      name: "Product 2",
      price: "$24.99",
      rating: 3.8,
    },
    {
      picture: "image3.jpg",
      name: "Product 3",
      price: "$14.99",
      rating: 4.2,
    },
  ];
  return (
    <>
      <h1
        id="chefs"
        className="text-3xl font-bold text-gray-800 my-6 text-center"
      >
        Categories
      </h1>
      <Tabs>
        <TabList className="flex justify-center items-center mb-4">
          <Tab className="mr-2 px-4 py-2 bg-gray-200 rounded-md cursor-pointer">
            Category 1
          </Tab>
          <Tab className="mr-2 px-4 py-2 bg-gray-200 rounded-md cursor-pointer">
            Category 2
          </Tab>
          <Tab className="px-4 py-2 bg-gray-200 rounded-md cursor-pointer">
            Category 3
          </Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card) => (
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src={""}
                  alt={""}
                  className="w-full h-auto rounded-md mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{card.name}</h3>
                <p className="text-gray-700 mb-2">Price: {card.price}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 mr-1">{card.rating}</span>
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
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card) => (
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src={""}
                  alt={""}
                  className="w-full h-auto rounded-md mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{card.name}</h3>
                <p className="text-gray-700 mb-2">Price: {card.price}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 mr-1">{card.rating}</span>
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
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card) => (
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src={""}
                  alt={""}
                  className="w-full h-auto rounded-md mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{card.name}</h3>
                <p className="text-gray-700 mb-2">Price: {card.price}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 mr-1">{card.rating}</span>
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
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ShopByCategory;
