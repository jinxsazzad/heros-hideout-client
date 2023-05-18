import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="relative w-screen h-screen">
      <img
        className="block mx-auto w-full h-full"
        src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg"
        alt="your-image"
      />
      <button className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
        <Link to={"/"}>Go to Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
