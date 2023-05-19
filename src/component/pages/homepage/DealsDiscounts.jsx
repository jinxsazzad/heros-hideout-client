import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const img1Url =
  "https://a-static.mlcdn.com.br/800x560/kit-festa-toy-story-com-displays-de-mesa-e-painel-poli-banner-companhia-do-m-d-f/companhiadomdf/109p/f3142d5bb0af4451733992a2521aaa66.jpg";
const img2Url =
  "https://www.shutterstock.com/image-vector/red-robot-transformer-cartoon-vector-600w-1577018869.jpg";

const DealsDiscounts = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
  return (
    <div>
      <div className="border-y-[1px] border-stone-600 bg-base-100 my-2" data-aos="fade">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  m-4">
        <div className="card bg-base-100 shadow-xl image-full"data-aos="fade-right">
          <figure>
            <img src="https://www.shutterstock.com/image-vector/red-robot-transformer-cartoon-vector-600w-1577018869.jpg" />
          </figure>
          <div className="card-body flex justify-center text-white">
            <div className="p-4">
              <h2 className="card-title font-extrabold mb-8 text-bold text-2xl p-2">
                Discount UpTo
                <span class="ms-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                  <span class="relative text-white px-4">70 %</span>
                </span>
              </h2>
              <p className="text-xl font-base mb-8">
                Collect your favorites toys now
              </p>
              <div className="card-actions mb-8 ">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl image-full" data-aos="fade-left">
          <figure>
            <img src="https://a-static.mlcdn.com.br/800x560/kit-festa-toy-story-com-displays-de-mesa-e-painel-poli-banner-companhia-do-m-d-f/companhiadomdf/109p/f3142d5bb0af4451733992a2521aaa66.jpg" />
          </figure>
          <div className="card-body flex justify-center items-end text-right text-white">
            <div className="p-4">
              <h2 className="card-title font-extrabold mb-8 text-bold text-2xl p-4">
                Discount UpTo
                <span class="ms-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                  <span class="relative text-white px-4">70 %</span>
                </span>
              </h2>
              <p className="text-xl font-base mb-8">
                Collect your favorites toys now
              </p>
              <div className="card-actions mb-8 justify-end">
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
