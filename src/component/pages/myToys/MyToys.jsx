import { useContext, useEffect, useState } from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";

const myToys = () => {
  useEffect(()=>{
    document.title = "HH | My Toys"
  },[])
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  console.log(myToys)
  const [sort,setSort] = useState(0)
  const handelSort = () => {
    setSort(1)
  };

  const handelDelete = (id) => {
    const confirmPopUp = confirm("You are deleting a product");

    if (confirmPopUp) {
      fetch(`https://assignment-eleven-server-phi.vercel.app/toyDetails/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully DELETED");
            const currentMyToys = myToys.filter((toys) => toys._id !== id);
            setMyToys(currentMyToys);
          }
        });
    }
  };
  useEffect(() => {
    fetch(`https://assignment-eleven-server-phi.vercel.app/mytoys/${user?.email}?sort=${sort}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data))
      .catch((error) => console.log(error));
  }, [user,sort]);
  return (
    <>
      <Navigation></Navigation>
      <div className="bg-base-100 my-2">
        <h1 className="text-3xl font-bold text-primary text-center ">
          Your Toys
        </h1>
        <p className=" text-center p-2 font-medium">
          Here you can see all your toy with details! You can edit and delete
          here !
        </p>
      </div>
      <div className="flex justify-center items-center">
        {" "}
        <button onClick={handelSort} className=" btn btn-xs btn-outline text-center">
          Sort By Price
        </button>
      </div>

      <div className="overflow-x-auto w-full my-2 border-2 border-pink-700 rounded-md">
        <table className="table w-full text-center table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <tr key={toy._id}>
                <td>
                  <div className="avatar border-2 border-black rounded-md">
                    <div className="mask mask-squircle w-12 h-12 ">
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
                    className="btn btn-primary btn-sm mr-2"
                  >
                    Edit<FaRegEdit className="ms-2"></FaRegEdit>
                  </Link>
                  <button
                    onClick={() => handelDelete(toy?._id)}
                    htmlFor="my-modal-6"
                    className="btn btn-primary btn-sm"
                  >
                    Delete <FaTrash className="ms-2"></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </>
  );
};

export default myToys;
