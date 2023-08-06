import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { MdFavorite, MdStar } from "react-icons/md";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../../context/AuthProvider";

const ShopByCategory = () => {
  const { user } = useContext(AuthContext);
  // for AOS
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const subCat = {
    subCat1: "Avengers",
    subCat2: "Transformers",
    subCat3: "Star-Wars",
  };
  const [subCatToys, setSubCatToys] = useState([]);
  const [subCategory, setSubCategory] = useState(subCat.subCat1);
  useEffect(() => {
    fetch(
      `http://localhost:5000/toysBySubCategory/${subCategory}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSubCatToys(data);
      });
  }, [subCategory]);
  const handelLoadData = (subCat) => {
    setSubCategory(subCat);
  };
  const warning = () => {
    if (!user) {
      alert("You must be logged in");
    }
  };

  return (
    <>
      <div
        className="border-y-[1px] border-stone-600 bg-base-100 my-2"
        data-aos="fade"
      >
        <h1 className="text-3xl font-bold text-primary text-center ">
          Categories
        </h1>
        <p className=" text-center p-2 font-medium">
          You May Choose By Sub-Category
        </p>
      </div>

      <Tabs className="justify-center items-center pt-2 p-8">
        <TabList
          className="flex justify-center items-center mb-2"
          data-aos="fade"
        >
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
            className="px-4 py-2 bg-pink-600 text-white font-semibold rounded-md"
          >
            Star-Wars
          </Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  p-10">
            {subCatToys.map((toy) => (
              <div
                key={toy._id}
                className="bg-white rounded-xl border border-gray-300 shadow-md overflow-hidden max-w-xs transition-transform hover:shadow-lg transform hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center justify-center h-48">
                  <img
                    className="h-40 w-auto max-w-full"
                    src={toy.pictureUrl}
                    alt="Product"
                  />
                </div>
                <div className="p-4 md:p-6 bg-[#E9E8E4]">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-pink-600">
                      Price: ${toy.price}
                    </span>
                    <span className="font-semibold text-pink-600 flex items-center gap-1">
                      Rating: {toy.rating} <MdStar className="text-pink-600" />
                    </span>
                  </div>
                  <h2 className="mt-2 text-xl font-semibold text-gray-800">
                    {toy.name}
                  </h2>
                  <div className="mt-2 text-gray-600">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <button className="btn btn-sm text-sm bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors">
                      Buy Now
                    </button>
                    <button className="btn btn-sm btn-outline text-xl hover:text-pink-600 hover:bg-white focus:text-pink-600 transition-colors">
                      <MdFavorite />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {subCatToys.map((toy) => (
              <div
              key={toy._id}
              className="bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden max-w-xs transition-transform hover:shadow-lg transform hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center justify-center h-48">
                <img
                  className="h-40 w-auto max-w-full"
                  src={toy.pictureUrl}
                  alt="Product"
                />
              </div>
              <div className="p-4 md:p-6 bg-[#E9E8E4]">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-pink-600">
                    Price: ${toy.price}
                  </span>
                  <span className="font-semibold text-pink-600 flex items-center gap-1">
                    Rating: {toy.rating} <MdStar className="text-pink-600" />
                  </span>
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-800">
                  {toy.name}
                </h2>
                <div className="mt-2 text-gray-600">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="btn btn-sm text-sm bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors">
                    Buy Now
                  </button>
                  <button className="btn btn-sm btn-outline text-xl hover:text-pink-600 hover:bg-white focus:text-pink-600 transition-colors">
                    <MdFavorite />
                  </button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {subCatToys.map((toy) => (
              <div
              key={toy._id}
              className="bg-white rounded-xl shadow-md border border-gray-300 overflow-hidden max-w-xs transition-transform hover:shadow-lg transform hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center justify-center h-48">
                <img
                  className="h-40 w-auto max-w-full"
                  src={toy.pictureUrl}
                  alt="Product"
                />
              </div>
              <div className="p-4 md:p-6 bg-[#E9E8E4]">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-pink-600">
                    Price: ${toy.price}
                  </span>
                  <span className="font-semibold text-pink-600 flex items-center gap-1">
                    Rating: {toy.rating} <MdStar className="text-pink-600" />
                  </span>
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-800">
                  {toy.name}
                </h2>
                <div className="mt-2 text-gray-600">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="btn btn-sm text-sm bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors">
                    Buy Now
                  </button>
                  <button className="btn btn-sm btn-outline text-xl hover:text-pink-600 hover:bg-white focus:text-pink-600 transition-colors">
                    <MdFavorite />
                  </button>
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
