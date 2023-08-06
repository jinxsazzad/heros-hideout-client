import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { MdFavorite } from "react-icons/md";

const DealsDiscounts = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <div
        className="relative bg-cover bg-center py-6 h-[40vh] flex flex-col justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 182, 193, 0.8), rgba(255, 182, 193, 0.8)), url(https://www.shutterstock.com/image-vector/red-robot-transformer-cartoon-vector-600w-1577018869.jpg)`,
        }}
      >
        <div className=" w-[80%] mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Mega Toy Sale!
              </h2>
              <p className="text-gray-800 text-lg md:text-xl">
                Limited time offer: Up to{" "}
                <span className="font-bold">40% OFF</span> on all toys!
              </p>
            </div>
            <div className="flex items-center justify-center md:mt-0">
              <button className="btn btn-primary border-black border-2 hover:border-black font-semibold">
                Explore Sale
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsDiscounts;
