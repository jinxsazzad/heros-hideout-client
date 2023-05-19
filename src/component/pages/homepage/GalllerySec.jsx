import React from "react";

import Marquee from "react-fast-marquee";

const GalllerySec = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary my-2 p-4 text-center border-y-[1px] border-stone-600 bg-base-100">
        Popular Products
      </h1>
      <Marquee pauseOnHover={true}gradient={true}gradientColor={[255, 181, 216]}>
      <div className="flex gap-3 my-4">
          <div className="card w-60 bg-base-100 shadow-xl hover:border-2">
            <figure className="p-2">
              <img
                src="https://i.ibb.co/FHwb3Hg/Png-Item-44371.png"
                alt="Toy"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <h2 className="card-title">
                Minion!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p></p>
              <div className="card-actions">
                <div className="badge badge-outline">$ 15</div>
                <div className="badge badge-outline">Buy</div>
              </div>
            </div>
          </div>
          <div className="card w-60 bg-base-100 shadow-xl hover:border-2">
            <figure className="p-2">
              <img
                src="https://i.ibb.co/FHwb3Hg/Png-Item-44371.png"
                alt="Toy"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <h2 className="card-title">
                Minion!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p></p>
              <div className="card-actions">
                <div className="badge badge-outline">$ 15</div>
                <div className="badge badge-outline">Buy</div>
              </div>
            </div>
          </div>
          <div className="card w-60 bg-base-100 shadow-xl hover:border-2">
            <figure className="p-2">
              <img
                src="https://i.ibb.co/FHwb3Hg/Png-Item-44371.png"
                alt="Toy"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <h2 className="card-title">
                Minion!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p></p>
              <div className="card-actions">
                <div className="badge badge-outline">$ 15</div>
                <div className="badge badge-outline">Buy</div>
              </div>
            </div>
          </div>
          <div className="card w-60 bg-base-100 shadow-xl hover:border-2">
            <figure className="p-2">
              <img
                src="https://i.ibb.co/FHwb3Hg/Png-Item-44371.png"
                alt="Toy"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <h2 className="card-title">
                Minion!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p></p>
              <div className="card-actions">
                <div className="badge badge-outline">$ 15</div>
                <div className="badge badge-outline">Buy</div>
              </div>
            </div>
          </div>
      </div>
      
      </Marquee>
      <div className="flex justify-center items-center m-8">
        <button className="btn btn-outline">View All</button>
      </div>
    </div>
  );
};

export default GalllerySec;
