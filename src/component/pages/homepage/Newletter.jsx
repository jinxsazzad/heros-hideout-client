import React from "react";

const Newletter = () => {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-pink-600 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-pink-600 text-lg mb-8">
            Stay updated with the latest deals, promotions, and news about our
            toys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-pink-100 rounded-lg border-2 border-pink-200 focus:ring-2 focus:ring-pink-400 focus:outline-none px-4 py-2 text-pink-600 text-lg"
            />
            <button className="btn btn-primary py-2 px-6 flex-shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newletter;
