import React from "react";
import Marquee from "react-fast-marquee";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const ourOutlet = [
  {
    pictureUrl:
      "https://imageio.forbes.com/specials-images/imageserve/5dde81cdea103f0006538749/The-Toys-R-Us-mascot-Geoffrey-standing-in-front-of-the-new-Toys-R-Us-store-in/0x0.jpg?format=jpg&crop=3769,2513,x61,y0,safe&width=960",
    shopName: "Whimsical Wonders",
    address: "123 Main Street",
    city: "Cedarville",
    state: "Ohio",
    zipCode: "43011",
  },
  {
    pictureUrl:
      "https://imageio.forbes.com/specials-images/imageserve/5dde81cdea103f0006538749/The-Toys-R-Us-mascot-Geoffrey-standing-in-front-of-the-new-Toys-R-Us-store-in/0x0.jpg?format=jpg&crop=3769,2513,x61,y0,safe&width=960",
    shopName: "Playful Paradise",
    address: "456 Elm Avenue",
    city: "Meadowville",
    state: "California",
    zipCode: "90210",
  },
  {
    pictureUrl:
      "https://imageio.forbes.com/specials-images/imageserve/5dde81cdea103f0006538749/The-Toys-R-Us-mascot-Geoffrey-standing-in-front-of-the-new-Toys-R-Us-store-in/0x0.jpg?format=jpg&crop=3769,2513,x61,y0,safe&width=960",
    shopName: "Toytropolis",
    address: "789 Oak Road",
    city: "Harborville",
    state: "New York",
    zipCode: "10001",
  },
  {
    pictureUrl:
      "https://imageio.forbes.com/specials-images/imageserve/5dde81cdea103f0006538749/The-Toys-R-Us-mascot-Geoffrey-standing-in-front-of-the-new-Toys-R-Us-store-in/0x0.jpg?format=jpg&crop=3769,2513,x61,y0,safe&width=960",
    shopName: "Imagination Station",
    address: "987 Pine Lane",
    city: "Sunnyville",
    state: "Florida",
    zipCode: "33139",
  },
  {
    pictureUrl:
      "https://imageio.forbes.com/specials-images/imageserve/5dde81cdea103f0006538749/The-Toys-R-Us-mascot-Geoffrey-standing-in-front-of-the-new-Toys-R-Us-store-in/0x0.jpg?format=jpg&crop=3769,2513,x61,y0,safe&width=960",
    shopName: "WhizKid Toys",
    address: "321 Cedar Street",
    city: "Wonderville",
    state: "Texas",
    zipCode: "75001",
  },
];

const Outlet = () => {
    useEffect(() => {
        AOS.init({duration:2000}); // Initialize AOS
      }, []);
  return (
    <div>
      <div className="border-y-[1px] border-stone-600 bg-base-100 my-2" data-aos="fade">
        <h1 className="text-3xl font-bold text-primary text-center ">
          Our Outlet
        </h1>
        <p className=" text-center p-2 font-medium">
          Our Marketplace outlet is everywhere!
          <span className=" badge badge-info p-2 font-semibold">
            Visit Now!
          </span>
        </p>
      </div>
      <div>
        <Marquee
          pauseOnHover={true}
          className="py-8 bg-slate-200"
        >
          <div className="flex gap-4">
            {ourOutlet.map((outlet) => (
              <div className="card bg-base-100 shadow-xl ml-4 " data-aos="flip-right">
                <figure className="px-2 pt-2">
                  <img
                    src={outlet.pictureUrl}
                    alt="Shoes"
                    className="rounded-xl h-60 w-60"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{outlet.shopName}</h2>
                  <div className="flex gap-2">
                    <p className=" text-sm font-semibold">
                      {outlet.state},{outlet.city} <br />
                      {outlet.address},{outlet.zipCode} <br />
                    </p>
                  </div>
                  <Link className="badge bg-info  hover:bg-pink-600 p-4">
                    Open Map <FaMapMarkerAlt className="mx-2"></FaMapMarkerAlt>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Outlet;
