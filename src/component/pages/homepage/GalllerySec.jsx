import React from "react";

import { FaStar } from "react-icons/fa";
import { MdFavorite, MdStar, MdStarBorder } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const superheroShowcase = [
  {
    _id: "6466eed8996c43a275b85523",
    name: "Super Man",
    pictureUrl:
      "https://www.pngmart.com/files/15/Marvel-Superhero-Toy-PNG-Photos.png",
    price: "50",
    rating: "9",
  },
  {
    _id: "6466ef1c996c43a275b85524",
    name: "Captain America",
    pictureUrl:
      "https://www.pngmart.com/files/15/Super-Hero-Transparent-Background.png",
    price: "60",
    rating: "9",
  },
  {
    _id: "6466ef4a996c43a275b85525",
    name: "Iron Man",
    pictureUrl:
      "https://www.pngmart.com/files/15/Superhero-Toy-Transparent-PNG.png",
    price: "70",
    rating: "9",
  },
  {
    _id: "6466f21f996c43a275b85526",
    name: "Dead Pool",
    pictureUrl:
      "https://www.pngmart.com/files/15/Superhero-Toy-Transparent-Background.png",
    price: "25",
    rating: "7",
  },
  {
    _id: "6466f3de996c43a275b85527",
    name: "Bumblebee",
    pictureUrl: "https://i.ibb.co/82vSQmq/Png-Item-4294668.png",
    price: "100",
    rating: "10",
  },
  {
    _id: "6466f4c1996c43a275b85528",
    name: "The Last Knight Canopy",
    pictureUrl: "https://i.ibb.co/rv4LLys/Png-Item-5362772.png",
    price: "80",
    rating: "7",
  },
  {
    _id: "6466f568996c43a275b85529",
    name: "The Last Knight Sqweeks",
    pictureUrl: "https://i.ibb.co/cXJLHBK/Png-Item-5362808.png",
    price: "70",
    rating: "7",
  },
  {
    _id: "6466f5a0996c43a275b8552a",
    name: "Optimus Prime",
    pictureUrl: "https://i.ibb.co/FbBD04s/Png-Item-125726.png",
    price: "100",
    rating: "10",
  },
];

const GalllerySec = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div
        className="border-y-[1px] border-stone-600 bg-base-100 my-2"
        data-aos="fade"
      >
        <h1 className="text-3xl font-bold text-primary text-center ">
          Popular Toys
        </h1>
        <p className=" text-center p-2 font-medium">
          Hey! What About You?
          <span className=" badge badge-info p-2 font-semibold ml-1">
            Find Now!
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
      {superheroShowcase.map((superhero) => (
        <div
          key={superhero._id}
          className="relative overflow-hidden group border border-gray-300 bg-white rounded-md shadow-lg"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center h-48">
              <img
                className="h-40 w-auto max-w-full"
                src={superhero.pictureUrl}
                alt="Product"
              />
            </div>
            <div className="p-4 md:p-6 bg-[#E9E8E4]">
              <div className="flex items-center justify-between">
                <span className="font-bold text-pink-600">Price: ${superhero.price}</span>
                <span className="font-semibold text-pink-600 flex items-center gap-1">
                  Rating: {superhero.rating} <MdStar className="text-pink-600" />
                </span>
              </div>
              <h2 className="mt-2 text-xl font-semibold text-gray-800">{superhero.name}</h2>
              <div className="mt-2 text-gray-600">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-black bg-opacity-70 group-hover:opacity-100 transition-opacity duration-300 text-white p-4">
            <div className="text-center">
              <button className="btn btn-primary mt-4">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default GalllerySec;
