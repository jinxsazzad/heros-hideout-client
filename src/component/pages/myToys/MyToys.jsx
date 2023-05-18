import React from "react";
import Navigation from "../../shared/Navigation";
import Footer from "../../shared/Footer";
import { Link } from "react-router-dom";

const myToys = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>Alex</td>
              <td>Toy A</td>
              <td>Category X</td>
              <td>$19.99</td>
              <td>5</td>
              <td>
                <Link to={'/editToy'} htmlFor="my-modal-6" className="btn btn-sm">
                  Edit 
                </Link>
              </td>
              <td>
                <button htmlFor="my-modal-6" className="btn btn-sm">
                  Delete
                </button>
              </td>
            </tr>
            {/* row 2 */}

            {/* row 3 */}

            {/* row 4 */}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </>
  );
};

export default myToys;
