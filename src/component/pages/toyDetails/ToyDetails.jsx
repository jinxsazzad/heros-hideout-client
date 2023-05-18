import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  //   const {
  //     _id,
  //     name,
  //     pictureUrl,
  //     sellerMail,
  //     sellerName,
  //     subCategory,
  //     price,
  //     quantity,
  //     rating,
  //     description,
  //   } = toy;
  console.log(toy);
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="card w-2/4 bg-base-100 shadow-xl">
        <div className="flex justify-center items-center">
          <figure className="w-1/4 h-1/4">
            <img src={toy?.pictureUrl} alt="Shoes" />
          </figure>
        </div>
        <div className="my-4 card-body items-center text-center">
          <h2 className="text-2xl font-bold card-title">{toy?.name}</h2>
          <p className="text-lg">Seller:{toy?.sellerName}</p>
          <p className="text-lg">Email: {toy?.sellerMail}</p>
          <p className="text-lg">Sub Category: {toy?.subCategory}</p>
          <p className="text-lg">Price: ${toy?.price}</p>
          <p className="text-lg">Rating: {toy?.rating}</p>
          <p className="text-lg">Available Quantity: {toy?.quantity}</p>
          <p className="text-lg">Detail Description:</p>
          <p className="text-base">{toy?.description}</p>
        </div>
        <Link to={'/allToy'} className="btn btn-sm">Go Back</Link>
      </div>
    </div>
  );
};

export default ToyDetails;
