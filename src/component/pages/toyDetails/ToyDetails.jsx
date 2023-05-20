import React from "react";
import { FaStar } from "react-icons/fa";
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
  } = toy || [];
  console.log(toy);
  return (
    <div className=" bg-slate-200 p-8">
      <div className="card card-side bg-base-100 shadow-xl w-3/4 mx-auto">
        <figure className="w-2/5 p-3">
          <img src={pictureUrl} alt="" />
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
            Rating: {rating} <FaStar className="ml-1"></FaStar>
            <br />
            Available Quantity: {quantity}
            <br />
            Details: <br />
            {description}
            <br />
            <Link to={"/allToy"} className="btn btn-sm btn-primary mt-56 ">
              Go Back
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
