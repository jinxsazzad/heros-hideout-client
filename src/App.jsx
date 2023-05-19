import { Link } from "react-router-dom";
import "./App.css";
import Marquee from "react-fast-marquee";
import {
  FaLocationArrow,
  FaMap,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaMapSigns,
  FaStar,
} from "react-icons/fa";

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

function App() {
  const img1Url =
    "https://a-static.mlcdn.com.br/800x560/kit-festa-toy-story-com-displays-de-mesa-e-painel-poli-banner-companhia-do-m-d-f/companhiadomdf/109p/f3142d5bb0af4451733992a2521aaa66.jpg";
  const img2Url =
    "https://www.shutterstock.com/image-vector/red-robot-transformer-cartoon-vector-600w-1577018869.jpg";
  return (
    <>
      <div className="border-y-[1px] border-stone-600 bg-base-100 my-2">
        <h1 className="text-3xl font-bold text-primary text-center ">
          Deals and Discounts
        </h1>
        <p className=" text-center p-2 font-medium">
          Mega Deals & Discounts!{" "}
          <span className=" badge badge-info p-2 font-semibold">
            Grape Now!
          </span>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4  m-4">
        <div className="card bg-base-100 shadow-xl image-full">
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
        <div className="card bg-base-100 shadow-xl image-full">
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
      <div className="border-y-[1px] border-stone-600 bg-base-100 my-2">
        <h1 className="text-3xl font-bold text-primary text-center ">
          Our Outlet
        </h1>
        <p className=" text-center p-2 font-medium">
          Our Marketplace outlet is everywhere!{" "}
          <span className=" badge badge-info p-2 font-semibold">
            Visit Now!
          </span>
        </p>
      </div>
      <div>
        <Marquee
          pauseOnHover={true}
          gradient={true}
          gradientColor={[255, 181, 216]}
          className="py-8 bg-slate-200"
        >
          <div className="flex gap-4">
            {ourOutlet.map((outlet) => (
              <div className="card bg-base-100 shadow-xl ml-4 ">
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
      <div>
        <div className="border-y-[1px] border-stone-600 bg-base-100 my-2">
          <h1 className="text-3xl font-bold text-primary text-center ">
          Superhero Showcase
          </h1>
          <p className=" text-center p-2 font-medium">
            Hey! Who is your favorite hero? 
            <span className=" badge badge-info p-2 font-semibold ml-1">
              Find Now!
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-slate-200 p-10">
          {superheroShowcase.map((superhero) => (
            <div
              key={superhero._id}
              className="relative overflow-hidden group bg-white border-4 border-gray-400 rounded-md"
            >
              <img
                src={superhero.pictureUrl}
                alt={superhero.name}
                className="w-full h-auto p-4 "
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-black bg-opacity-70 group-hover:opacity-100 transition-opacity duration-300 text-left ">
                <div className=" p-8 border-4 border-pink-600 rounded-lg">
                  <p className="text-white text-lg">{superhero.name}</p>
                  <p className="text-white text-lg">${superhero.price}</p>
                  <p className="text-white text-lg flex items-center">
                    {superhero.rating}
                    <FaStar className="ml-1"></FaStar>
                  </p>
                  <span className="btn btn-xs btn-primary">Buy Now</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
