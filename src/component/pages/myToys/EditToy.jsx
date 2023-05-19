import React from "react";
import { useForm } from "react-hook-form";
import Navigation from "../../shared/Navigation";
import Footer from "../../shared/Footer";
import { useLoaderData } from "react-router-dom";

const EditToy = () => {
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
  } = toy;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const confirmPopUp = confirm("Your Toy Details wil update");
    if (confirmPopUp) {
      fetch(`http://localhost:5000/toyDetails/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.acknowledged == true) {
            alert("Updated Successful.");
          }
        });
    }

    // Perform form submission logic here
  };
  return (
    <div>
      <Navigation></Navigation>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto grid grid-cols-1 gap-4 lg:grid-cols-4 border-4 border-blue-600 m-4 p-6"
        >
          <div className="mb-4 lg:col-span-2">
            <label htmlFor="name" className="block mb-1">
              Toy Name:
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              defaultValue={name}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4 lg:col-span-2">
            <label htmlFor="pictureUrl" className="block mb-1">
              Picture URL of the toy:
            </label>
            <input
              type="text"
              id="pictureUrl"
              {...register("pictureUrl", { required: true })}
              defaultValue={pictureUrl}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.pictureUrl && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4 lg:col-span-2">
            <label htmlFor="sellerName" className="block mb-1">
              Seller Name:
            </label>
            <input
              type="text"
              id="sellerName"
              {...register("sellerName", { required: true })}
              defaultValue={sellerName}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.sellerName && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4 lg:col-span-2">
            <label htmlFor="sellerMail" className="block mb-1">
              Seller Mail:
            </label>
            <input
              type="email"
              id="sellerMail"
              {...register("sellerMail", { required: true })}
              defaultValue={sellerMail}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.sellerMail && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-4 lg:col-span-2">
            <label htmlFor="subCategory" className="block mb-1">
              Sub-category:
            </label>
            <select
              id="subCategory"
              {...register("subCategory", { required: true })}
              defaultValue={subCategory}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="avengers">Add-Sub-category</option>
              <option value="avengers">avengers</option>
              <option value="transformers">transformers</option>
              <option value="toyStory">toyStory</option>
            </select>
            {errors.subCategory && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block mb-1">
              Price:
            </label>
            <input
              type="number"
              id="price"
              {...register("price", { required: true })}
              defaultValue={price}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.price && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="rating" className="block mb-1">
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              {...register("rating", { required: true })}
              defaultValue={rating}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.rating && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-4 lg:col-span-2">
            <label htmlFor="quantity" className="block mb-1">
              Available Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              {...register("quantity", { required: true })}
              defaultValue={quantity}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.quantity && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-4 lg:col-span-2">
            <label htmlFor="description" className="block mb-1">
              Detail Description:
            </label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              defaultValue={description}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
            {errors.description && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded lg:col-span-4"
          >
            Edit Toy Details
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EditToy;
