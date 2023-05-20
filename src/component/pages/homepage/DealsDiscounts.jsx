import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const DealsDiscounts = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div
        className="border-y-[1px] border-stone-600 bg-base-100 my-2"
        data-aos="fade"
      >
        <h1 className="text-3xl font-bold text-primary text-center ">
          Deals and Discounts
        </h1>
        <p className=" text-center p-2 font-medium">
          Mega Deals & Discounts!
          <span className=" badge badge-info p-2 font-semibold">
            Grape Now!
          </span>
        </p>
      </div>
      <div>
        <div
          className="card bg-base-100 shadow-xl image-full"
          data-aos="fade-right"
        >
          <figure>
            <img src="https://www.shutterstock.com/image-vector/red-robot-transformer-cartoon-vector-600w-1577018869.jpg" />
          </figure>
          <div className="card-body flex justify-center text-white">
            <div className="p-4">
              <h2 className="card-title font-extrabold mb-8 text-bold text-2xl p-2">
                Discount UpTo
                <span className="ms-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                  <span className="relative text-white px-4">30 %</span>
                </span>
                On Transformer Toy!
              </h2>
              <p className="text-xl font-base mb-8">
                Collect your favorites toys{" "}
                <span className="badge badge-sm badge-primary  p-5 ml-2">
                  NOW
                </span>
              </p>
              <div className="card-actions mb-8 ">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsDiscounts;
