import React, { useEffect, useState } from "react";
import Navigation from "../../shared/Navigation";
import Footer from "../../shared/Footer";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";

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
      <div className="bg-base-100 my-2">
        <h1 className="text-3xl font-bold text-primary text-center ">
          All Toy
        </h1>
        <p className=" text-center p-2 font-medium">
          Here you can see all toy with details!
        </p>
      </div>
      <div className="overflow-x-auto w-full my-4 border-2 border-pink-700 rounded-md">
        <table className="table w-full table-zebra text-center">
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Toy Name </th>
              <th>Seller Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToy.map((toy) => (
              <>
                <tr>
                  <td>
                    <div className="avatar border-2 border-black rounded-md">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={toy?.pictureUrl} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{toy?.name}</td>
                  <td>{toy?.sellerName}</td>
                  <td>{toy?.subCategory}</td>
                  <td>${toy?.price}</td>
                  <td>{toy?.quantity}</td>
                  <td>
                    <Link
                      to={`/viewDetails/${toy._id}`}
                      className="btn btn-sm btn-primary"
                    >
                      View Details <FaRegEye className="ms-2"></FaRegEye>
                    </Link>
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
