import React, { useContext, useEffect, useState } from "react";
import Navigation from "../../shared/Navigation";
import Footer from "../../shared/Footer";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const myToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const handelDelete = (id) => {
    const confirmPopUp = confirm("You are deleting a product");

    if (confirmPopUp) {
      fetch(`http://localhost:5000/toyDetails/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Successfully DELETE");
            const currentMyToys = myToys.filter((toys) => toys._id !== id);
            setMyToys(currentMyToys);
          }
        });
    }
  };

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
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data))
      .catch((error) => console.log(error));
  }, [user]);
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
            {myToys.map((toy) => (
              <>
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
                    <Link
                      to={`/editToy/${toy?._id}`}
                      htmlFor="my-modal-6"
                      className="btn btn-sm"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handelDelete(toy?._id)}
                      htmlFor="my-modal-6"
                      className="btn btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </>
  );
};

export default myToys;
