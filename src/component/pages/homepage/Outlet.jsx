import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ourOutlet = [
  {
    id: 1,
    pictureUrl:
      "https://imageio.forbes.com/specials-images/imageserve/5dde81cdea103f0006538749/The-Toys-R-Us-mascot-Geoffrey-standing-in-front-of-the-new-Toys-R-Us-store-in/0x0.jpg?format=jpg&crop=3769,2513,x61,y0,safe&width=960",
    shopName: "Whimsical Wonders",
    address: "123 Main Street",
    city: "Cedarville",
    state: "Ohio",
    zipCode: "43011",
    phone: "(123) 456-7890",
  },
  {
    id: 2,
    pictureUrl:
      "https://imageio.forbes.com/specials-images/imageserve/5dde81cdea103f0006538749/The-Toys-R-Us-mascot-Geoffrey-standing-in-front-of-the-new-Toys-R-Us-store-in/0x0.jpg?format=jpg&crop=3769,2513,x61,y0,safe&width=960",
    shopName: "Playful Paradise",
    address: "456 Elm Avenue",
    city: "Meadowville",
    state: "California",
    zipCode: "90210",
    phone: "(987) 654-3210",
  },
  {
    id: 3,
    pictureUrl:
      "https://imageio.forbes.com/specials-images/imageserve/5dde81cdea103f0006538749/The-Toys-R-Us-mascot-Geoffrey-standing-in-front-of-the-new-Toys-R-Us-store-in/0x0.jpg?format=jpg&crop=3769,2513,x61,y0,safe&width=960",
    shopName: "Toytropolis",
    address: "789 Oak Road",
    city: "Harborville",
    state: "New York",
    zipCode: "10001",
    phone: "(555) 123-4567",
  },
];


const Outlet = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS
  }, []);
  return (
    <>
      <div
        className="border-y-[1px] border-stone-600 bg-base-100 my-2"
        data-aos="fade"
      >
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
        <div style={{ background: 'linear-gradient(135deg, #ff8a87, #ff3366)' }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-slate-200 p-4">
          {ourOutlet.map((shop) => (
            <div
              key={shop.id}
              className="card bg-base-100 rounded-md shadow-md p-4 flex flex-col"
              data-aos="fade-up"
            >
              <img
                src={shop.pictureUrl}
                alt={shop.shopName}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-pink-600 mb-2">
                {shop.shopName}
              </h2>
              <div className="flex items-center text-gray-600 mb-2">
                <FaMapMarkerAlt className="mr-1" />
                <p className="text-sm">{shop.address}</p>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <FaPhone className="mr-1" />
                <p className="text-sm">{shop.phone}</p>
              </div>
              <p className="text-sm text-gray-600">
                {shop.city}, {shop.state} {shop.zipCode}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Outlet;
