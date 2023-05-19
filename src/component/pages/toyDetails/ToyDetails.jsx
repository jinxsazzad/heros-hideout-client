import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    _id,
    name,
    pictureUrl,
    sellerMail,
    sellerName,
    subCategory,
    price,
    quantity,
    rating,
    description,
  } = toy;
  console.log(toy);
  return (
    <div className=" bg-slate-200 p-8">
      {/* <div className="flex justify-center items-center py-8">
      <div className="card w-3/4 bg-base-100 shadow-xl">
        <div className="flex justify-center items-center border-2 border-black rounded-md">
          <figure className="w-1/4 h-2/4 p-2">
            <img src={toy?.pictureUrl} alt="Shoes" />
          </figure>
        </div>
        <div className="my-4 card-body items-center text-center">
          <h2 className="text-2xl font-bold card-title">{name}</h2>
          <p className="text-lg">Seller:{sellerName}</p>
          <p className="text-lg">Email: {sellerMail}</p>
          <p className="text-lg">Sub Category: {subCategory}</p>
          <p className="text-lg">Price: ${price}</p>
          <p className="text-lg">Rating: {rating}</p>
          <p className="text-lg">Available Quantity: {quantity}</p>
          <p className="text-lg">Detail Description:</p>
          <p className="text-base">{description}</p>
        </div>
        <Link to={'/allToy'} className="btn btn-sm">Go Back</Link>
      </div>
    </div> */}
      <div className="card card-side bg-base-100 shadow-xl w-3/4 mx-auto">
        <figure className="w-2/5 p-3">
          <img src={toy?.pictureUrl} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Toy Name:{name}</h2>
          <p>
            Seller:{sellerName}
            <br />
            Email: {sellerMail}
            <br />
            Sub Category: {subCategory}
            <br />
            Price: ${price}
            <br />
            Available Quantity: {quantity}
            <br />
            Details: <br />
            {description}
            <br />
            <Link to={'/allToy'} className="btn btn-sm btn-primary mt-56 ">Go Back</Link>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
