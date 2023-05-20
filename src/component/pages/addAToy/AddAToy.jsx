import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AuthProvider";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://assignment-eleven-server-phi.vercel.app/addAToy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.acknowledged == true) {
          alert(`Toy add successfully, id:${result?.insertedId}`);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Navigation></Navigation>
      <div className=" bg-slate-200 p-1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto grid grid-cols-1 gap-4 lg:grid-cols-4 border-2 border-pink-600 m-4 p-6 rounded-md bg-white"
        >
          <div className="mb-4 lg:col-span-2">
            <label htmlFor="name" className="block mb-1">
              Toy Name:
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              defaultValue="Toy Name"
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
              placeholder="Enter picture URL"
              defaultValue={"https://i.ibb.co/FHwb3Hg/Png-Item-44371.png"}
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
              defaultValue={user?.displayName || "User Unknown"}
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
              defaultValue={user?.email || "email is not found"}
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
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="subCat1">Add-Sub-category</option>
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
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
            {errors.description && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded lg:col-span-4"
          >
            Add Toy
          </button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddAToy;
