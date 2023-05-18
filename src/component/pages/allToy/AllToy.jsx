import React, { useEffect, useState } from "react";
import Navigation from "../../shared/Navigation";
import Footer from "../../shared/Footer";

const AllToy = () => {
  const [allToy, setAllToy] = useState([]);

  const Toys = [
    {
      _id: "6465b8d84f77b055c2f6ef56",
      name: "Toy Name",
      pictureUrl:
        "https://dynamic-cdn.catchme.lk/products/12575/13-inch-spider-man-action-figure-16027553554909.jpg",
      sellerName: "JINX SAZZAD",
      sellerMail: "nooruddinsumon55555@gmail.com",
      subCategory: "subCat1",
      price: "10",
      rating: "4",
      quantity: "5",
      description: "spider man toy for kids.",
    },
    {
      _id: "6465b9f44f77b055c2f6ef57",
      name: "Toy Name",
      pictureUrl:
        "https://dynamic-cdn.catchme.lk/products/12575/13-inch-spider-man-action-figure-16027553554909.jpg",
      sellerName: "JINX SAZZAD",
      sellerMail: "nooruddinsumon55555@gmail.com",
      subCategory: "subCat1",
      price: "10",
      rating: "4",
      quantity: "5",
      description: "spider man toy for kids.",
    },
    {
      _id: "6465bad24f77b055c2f6ef58",
      name: "Toy Name",
      pictureUrl:
        "https://dynamic-cdn.catchme.lk/products/12575/13-inch-spider-man-action-figure-16027553554909.jpg",
      sellerName: "JINX SAZZAD",
      sellerMail: "nooruddinsumon55555@gmail.com",
      subCategory: "subCat1",
      price: "10",
      rating: "4",
      quantity: "10",
      description: "spider man toy for kids.",
    },
    {
      _id: "6465bb2f4f77b055c2f6ef59",
      name: "Toy Name",
      pictureUrl:
        "https://dynamic-cdn.catchme.lk/products/12575/13-inch-spider-man-action-figure-16027553554909.jpg",
      sellerName: "JINX SAZZAD",
      sellerMail: "nooruddinsumon55555@gmail.com",
      subCategory: "subCat2",
      price: "10",
      rating: "4",
      quantity: "10",
      description: "spider man toy for kids.",
    },
    {
      _id: "6465bb334f77b055c2f6ef5a",
      name: "Toy Name",
      pictureUrl:
        "https://dynamic-cdn.catchme.lk/products/12575/13-inch-spider-man-action-figure-16027553554909.jpg",
      sellerName: "JINX SAZZAD",
      sellerMail: "nooruddinsumon55555@gmail.com",
      subCategory: "subCat3",
      price: "10",
      rating: "4",
      quantity: "10",
      description: "spider man toy for kids.",
    },
    {
      _id: "6465bb384f77b055c2f6ef5b",
      name: "Toy Name",
      pictureUrl:
        "https://dynamic-cdn.catchme.lk/products/12575/13-inch-spider-man-action-figure-16027553554909.jpg",
      sellerName: "JINX SAZZAD",
      sellerMail: "nooruddinsumon55555@gmail.com",
      subCategory: "subCat2",
      price: "10",
      rating: "4",
      quantity: "10",
      description: "spider man toy for kids.",
    },
    {
      _id: "6465bb3c4f77b055c2f6ef5c",
      name: "Toy Name",
      pictureUrl:
        "https://dynamic-cdn.catchme.lk/products/12575/13-inch-spider-man-action-figure-16027553554909.jpg",
      sellerName: "JINX SAZZAD",
      sellerMail: "nooruddinsumon55555@gmail.com",
      subCategory: "subCat3",
      price: "10",
      rating: "4",
      quantity: "10",
      description: "spider man toy for kids.",
    },
    {
      _id: "6465bb404f77b055c2f6ef5d",
      name: "Toy Name",
      pictureUrl:
        "https://dynamic-cdn.catchme.lk/products/12575/13-inch-spider-man-action-figure-16027553554909.jpg",
      sellerName: "JINX SAZZAD",
      sellerMail: "nooruddinsumon55555@gmail.com",
      subCategory: "subCat3",
      price: "10",
      rating: "4",
      quantity: "10",
      description: "spider man toy for kids.",
    },
    {
      _id: "6465bb454f77b055c2f6ef5e",
      name: "Toy Name",
      pictureUrl:
        "https://dynamic-cdn.catchme.lk/products/12575/13-inch-spider-man-action-figure-16027553554909.jpg",
      sellerName: "JINX SAZZAD",
      sellerMail: "nooruddinsumon55555@gmail.com",
      subCategory: "subCat2",
      price: "10",
      rating: "4",
      quantity: "10",
      description: "spider man toy for kids.",
    },
  ];
  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((data) => setAllToy(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navigation></Navigation>
      {/* code for modal */}

      {/* data table */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToy.map((toy) => (
              <>
                <>
                  <input
                    type="checkbox"
                    id="my-modal-6"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box card bg-base-100 shadow-xl w-full">
                      <div className="card-body">
                        <figure>
                          <img src={toy?.pictureUrl} alt="Shoes" />
                        </figure>
                        <div className="my-4">
                          <h2 className="text-2xl font-bold">{toy?.name}</h2>
                          <p className="text-lg">Seller:{toy?.sellerName}</p>
                          <p className="text-lg">Email: {toy?.sellerMail}</p>
                          <p className="text-lg">Sub Category: {toy?.subCategory}</p>
                          <p className="text-lg">Price: ${toy?.price}</p>
                          <p className="text-lg">Rating: {toy?.rating}</p>
                          <p className="text-lg">
                            Available Quantity: {toy?.quantity}
                          </p>
                          <p className="text-lg">Detail Description:</p>
                          <p className="text-base">{toy?.description}</p>
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
                <tr>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={toy?.pictureUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{toy?.name}</td>
                  <td>{toy?.sellerName}</td>
                  <td>{toy?.subCategory}</td>
                  <td>${toy?.price}</td>
                  <td>{toy?.quantity}</td>
                  <td>
                    <label htmlFor="my-modal-6" className="btn btn-sm">
                      View Details
                    </label>
                  </td>
                </tr>
              </>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AllToy;
