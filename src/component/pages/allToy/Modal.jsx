import React from 'react';

const Modal = () => {
    return (
        <div>
            <>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box card bg-base-100 shadow-xl w-full">
            <div className="card-body">
              <figure>
                <img
                  src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="my-4">
                <h2 className="text-2xl font-bold">Toy Name</h2>
                <p className="text-lg">Seller: Seller Name</p>
                <p className="text-lg">Email: seller@example.com</p>
                <p className="text-lg">Price: $99.99</p>
                <p className="text-lg">Rating: 4.5</p>
                <p className="text-lg">Available Quantity: 10</p>
                <p className="text-lg">Detail Description:</p>
                <p className="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vel sem a arcu placerat aliquet. Aenean sagittis
                  malesuada mauris, in sagittis orci semper nec. Nulla aliquam
                  velit nec purus malesuada tempus.
                </p>
              </div>
            </div>

            <div className="modal-action flex justify-center items-center">
              <label htmlFor="my-modal-6" className="btn">
                OK
              </label>
            </div>
          </div>
        </div>
      </>
        </div>
    );
};

export default Modal;