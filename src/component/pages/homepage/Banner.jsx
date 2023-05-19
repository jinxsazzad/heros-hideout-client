import React from "react";

const Banner = () => {
  return (
    <div className="card lg:card-side bg-pink-500 rounded-none">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1599623560574-39d485900c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Album"
        />
      </figure>
      <div className="card-body flex justify-center items-center text-white">
        <div className="p-4">
          <h2 className="card-title text-4xl font-extrabold mb-8">
            Collect Your Favorites Heros Toy Now !
          </h2>
          <p className="text-xl font-base mb-8">
            Here you can bur you favorites action heros toys!
          </p>
          <div className="card-actions justify-center mb-8">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
