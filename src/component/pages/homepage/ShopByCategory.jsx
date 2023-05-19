import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const subCat = {
    subCat1: "avengers",
    subCat2: "transformers",
    subCat3: "toyStory",
  };
  const [subCatToys, setSubCatToys] = useState([]);
  console.log(subCatToys);
  const [subCategory, setSubCategory] = useState(subCat.subCat1);
  console.log(subCategory);
  useEffect(() => {
    fetch(`https://assignment-eleven-server-4h09kq527-jinxsazzad.vercel.app/toysBySubCategory/${subCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setSubCatToys(data);
      });
  }, [subCategory]);
  const handelLoadData = (subCat) => {
    setSubCategory(subCat);
  };
  
  return (
    <>
      <div className="border-y-[1px] border-stone-600 bg-base-100 my-2">
        <h1 className="text-3xl font-bold text-primary text-center ">
          Categories
        </h1>
        <p className=" text-center p-2 font-medium">
          You May Choose By Sub-Category
        </p>
      </div>

      <Tabs className="justify-center items-center bg-slate-300 pt-2 p-8">
        <TabList className="flex justify-center items-center mb-2">
          <Tab
            onClick={() => {
              handelLoadData(subCat.subCat1);
            }}
            className="mr-2 px-4 py-2 bg-pink-500 text-white font-semibold rounded-md"
          >
            Avengers
          </Tab>
          <Tab
            onClick={() => {
              handelLoadData(subCat.subCat2);
            }}
            className="mr-2 px-4 py-2 bg-pink-500 text-white font-semibold rounded-md"
          >
            Transformer
          </Tab>
          <Tab
            onClick={() => {
              handelLoadData(subCat.subCat3);
            }}
            className="px-4 py-2 bg-pink-500 text-white font-semibold rounded-md"
          >
            Toy Story
          </Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {subCatToys.map((toy) => (
              <div className="card bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                  <img
                    src={toy.pictureUrl}
                    alt="Shoes"
                    className="rounded-xl h-40  w-24"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{toy.name}</h2>
                  <p>Price: $ {toy.price}</p>
                  <div className="flex items-center mb-2">
                    Ratting:
                    <span className="text-yellow-500 mr-1 ml-2">
                      {toy.rating}
                    </span>
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
                  <div className="card-actions">
                  <Link to={`/viewDetails/${toy._id}`}className="btn btn-sm btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {subCatToys.map((toy) => (
              <div className="card bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                  <img
                    src={toy.pictureUrl}
                    alt="Shoes"
                    className="rounded-xl h-40  w-24"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{toy.name}</h2>
                  <p>Price: $ {toy.price}</p>
                  <div className="flex items-center mb-2">
                    Ratting:
                    <span className="text-yellow-500 mr-1 ml-2">
                      {toy.rating}
                    </span>
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
                  <div className="card-actions">
                  <Link to={`/viewDetails/${toy._id}`}className="btn btn-sm btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {subCatToys.map((toy) => (
              <div className="card bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                  <img
                    src={toy.pictureUrl}
                    alt="Shoes"
                    className="rounded-xl h-40  w-24"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{toy.name}</h2>
                  <p>Price: $ {toy.price}</p>
                  <div className="flex items-center mb-2">
                    Ratting:
                    <span className="text-yellow-500 mr-1 ml-2">
                      {toy.rating}
                    </span>
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
                  <div className="card-actions">
                  <Link to={`/viewDetails/${toy._id}`}className="btn btn-sm btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ShopByCategory;
