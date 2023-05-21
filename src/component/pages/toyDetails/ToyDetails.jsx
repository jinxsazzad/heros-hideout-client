import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  useEffect(()=>{
    document.title = "HH | Toy Details"
  },[])
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
    <div className=" bg-slate-200 p-8 h-screen flex justify-center items-center">
      <div className="card card-side bg-base-100 shadow-xl w-3/4 mx-auto">
        <figure className="p-3">
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
            Rating: {rating} Stars
            <br />
            Available Quantity: {quantity}
            <br />
            Details: <br />
            {description}
            <br />
            <Link to={"/allToy"} className="btn btn-sm btn-primary m-5">
              Go Back
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
