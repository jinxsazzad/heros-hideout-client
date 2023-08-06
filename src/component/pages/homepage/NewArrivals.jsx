import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { MdFavorite, MdStar, MdStarBorder } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const newToys = [
  {
    _id: "6466eed8996c43a275b85523",
    name: "Super Man",
    pictureUrl:
      "https://www.pngmart.com/files/15/Marvel-Superhero-Toy-PNG-Photos.png",
    sellerName: "JINX SAZZAD",
    sellerMail: "nooruddinsumon55555@gmail.com",
    subCategory: "avengers",
    price: "50",
    rating: "9",
    quantity: "30",
    description: "Super Man",
  },
  {
    _id: "6466ef1c996c43a275b85524",
    name: "Captain America",
    pictureUrl:
      "https://www.pngmart.com/files/15/Super-Hero-Transparent-Background.png",
    sellerName: "JINX SAZZAD",
    sellerMail: "nooruddinsumon55555@gmail.com",
    subCategory: "avengers",
    price: "60",
    rating: "9",
    quantity: "30",
    description: "Captain America",
  },
  {
    _id: "6466ef4a996c43a275b85525",
    name: "Iron Man",
    pictureUrl:
      "https://www.pngmart.com/files/15/Superhero-Toy-Transparent-PNG.png",
    sellerName: "JINX SAZZAD",
    sellerMail: "nooruddinsumon55555@gmail.com",
    subCategory: "avengers",
    price: "70",
    rating: "9",
    quantity: "30",
    description: "Iron Man",
  },
  {
    _id: "6466f21f996c43a275b85526",
    name: "Dead Pool",
    pictureUrl:
      "https://www.pngmart.com/files/15/Superhero-Toy-Transparent-Background.png",
    sellerName: "JINX SAZZAD",
    sellerMail: "nooruddinsumon55555@gmail.com",
    subCategory: "avengers",
    price: "25",
    rating: "7",
    quantity: "20",
    description: "Dead Pool",
  },
  {
    _id: "6466f3de996c43a275b85527",
    name: "Bumblebee",
    pictureUrl: "https://i.ibb.co/82vSQmq/Png-Item-4294668.png",
    sellerName: "JINX SAZZAD",
    sellerMail: "nooruddinsumon55555@gmail.com",
    subCategory: "transformers",
    price: "100",
    rating: "10",
    quantity: "15",
    description: "bumblebeee",
  },
  {
    _id: "6466f4c1996c43a275b85528",
    name: "The Last Knight Canopy",
    pictureUrl: "https://i.ibb.co/rv4LLys/Png-Item-5362772.png",
    sellerName: "JINX SAZZAD",
    sellerMail: "nooruddinsumon55555@gmail.com",
    subCategory: "transformers",
    price: "80",
    rating: "7",
    quantity: "15",
    description: "The Last Knight Canopy",
  },
  {
    _id: "6466f568996c43a275b85529",
    name: "The Last Knight Sqweeks",
    pictureUrl: "https://i.ibb.co/cXJLHBK/Png-Item-5362808.png",
    sellerName: "JINX SAZZAD",
    sellerMail: "nooruddinsumon55555@gmail.com",
    subCategory: "transformers",
    price: "70",
    rating: "7",
    quantity: "17",
    description: "The Last Knight Sqweeks",
  },
  {
    _id: "6466f5a0996c43a275b8552a",
    name: "Optimus Prime",
    pictureUrl: "https://i.ibb.co/FbBD04s/Png-Item-125726.png",
    sellerName: "JINX SAZZAD",
    sellerMail: "nooruddinsumon55555@gmail.com",
    subCategory: "transformers",
    price: "100",
    rating: "10",
    quantity: "40",
    description: "Optimus Prime",
  },
  {
    _id: "6466f845996c43a275b8552b",
    name: "Buzz Lightyear",
    pictureUrl: "https://i.ibb.co/BjWPZg5/Png-Item-2140009.png",
    sellerName: "JINX SAZZAD",
    sellerMail: "nooruddinsumon55555@gmail.com",
    subCategory: "toyStory",
    price: "15",
    rating: "6",
    quantity: "11",
    description: "Buzz Lightyear",
  },
  {
    _id: "6466f8bc996c43a275b8552c",
    name: "Woody",
    pictureUrl: "https://i.ibb.co/JjppP27/Png-Item-305997.png",
    sellerName: "JINX SAZZAD",
    sellerMail: "nooruddinsumon55555@gmail.com",
    subCategory: "toyStory",
    price: "60",
    rating: "9",
    quantity: "13",
    description: "woody",
  },
  {
    _id: "6466f922996c43a275b8552d",
    name: "REX",
    pictureUrl: "https://i.ibb.co/mTBPSPv/Png-Item-1199391.png",
    sellerName: "JINX SAZZAD",
    sellerMail: "nooruddinsumon55555@gmail.com",
    subCategory: "toyStory",
    price: "60",
    rating: "10",
    quantity: "13",
    description: "rex",
  },
];

const NewArrivals = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div >
      <div
        className="border-y-[1px] border-stone-600 bg-base-100 my-2"
        data-aos="fade"
      >
        <h1 className="text-3xl font-bold text-primary text-center ">
          New Arrivals
        </h1>
        <p className=" text-center p-2 font-medium">
          Marketplace is updated ! Collect new toys Now!
        </p>
      </div>
      <Marquee pauseOnHover={true} className="py-8">
        <div className="flex justify-between items-center gap-4 ml-4">
          {newToys.map((toy) => (
            <div
            key={toy._id}
            className=" rounded-xl shadow-md overflow-hidden max-w-xs transition-transform hover:shadow-lg transform hover:scale-105 cursor-pointer border border-gray-300"
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
                <span className="font-bold text-pink-600">Price: ${toy.price}</span>
                <span className="font-semibold text-pink-600 flex items-center gap-1">
                  Rating: {toy.rating} <MdStar className="text-pink-600" />
                </span>
              </div>
              <h2 className="mt-2 text-xl font-semibold text-gray-800">{toy.name}</h2>
              <div className="mt-2 text-gray-600">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
      </Marquee>
    </div>
  );
};

export default NewArrivals;
