import { useContext } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <>
      <nav className=" border-b-4 border-pink-600 navbar bg-base-100">
        <div className="navbar-start">
          {/* dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/allToy"}>All Toys</NavLink>
              </li>
              {user ? (
                <>
                  <li>
                    <NavLink to={"/myToys"}>My Toys</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/addAToy"}>Add A Toy</NavLink>
                  </li>
                </>
              ) : (
                <></>
              )}
              {/* <li>
                <NavLink to={"/blog"}>Blog</NavLink>
              </li> */}
            </ul>
          </div>
          {/* Logo and site name */}
          <Link
            to={"/"}
            className="text-2xl font-semibold text-center text-slate-900 flex justify-center items-center"
          >
            <img
              className="h-20 w-20"
              src="https://i.ibb.co/CV5gt22/Pngtree-letter-h-logo-6074178.png"
              alt=""
            />
            <p className=" border-s-4 border-pink-600 ps-4 py-2 hidden lg:block">
              Hero's
              <span className="ms-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                <span className="relative text-white px-4">Hideout</span>
              </span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal rounded-none px-1">
            <li className="me-2">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="me-2">
              <NavLink to={"/allToy"}>All Toy</NavLink>
            </li>
            <li className="me-2">
              <NavLink to={"/superDeal"}>Super Deal</NavLink>
            </li>
            <li className="me-2">
              <NavLink to={"/popular"}>Popular Toy</NavLink>
            </li>
            <li className="me-2">
              <NavLink to={"/new"}>New Arrival</NavLink>
            </li>
            <li className="me-2">
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            {user ? (
              <>
                <li className="me-2">
                  <NavLink to={"/myToys"}>My Toys</NavLink>
                </li>
                <li className="me-2">
                  <NavLink to={"/addAToy"}>Add A Toy</NavLink>
                </li>
              </>
            ) : (
              <></>
            )}
            {/* <li className="me-2">
              <NavLink to={"/blog"}>Blog</NavLink>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button
                className="tooltip tooltip-left"
                data-tip={user?.displayName || "User Name"}
              >
                {user.photoURL ? (
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <FaUser></FaUser>
                )}
              </button>
              <button
                onClick={handelLogout}
                className="btn btn-outline rounded-full hover:bg-pink-600 flex justify-center items-center p-4"
              >
                Logout <FaSignOutAlt className="ms-2"></FaSignOutAlt>
              </button>
            </>
          ) : (
            <button>
              <NavLink
                to={"/signIn"}
                className=" btn btn-outline rounded-full hover:bg-pink-600 flex justify-center items-center p-4"
              >
                Login<FaSignInAlt className="ms-2"></FaSignInAlt>
              </NavLink>
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
