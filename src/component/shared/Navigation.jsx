import React, { useContext } from "react";
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
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
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
              <li>
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <FaUser></FaUser> Hero's Hideout
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/allToy"}>All Toy</NavLink>
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
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button>
                {(
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                ) || <FaUser></FaUser>}
              </button>
              <button
                onClick={handelLogout}
                className="flex justify-center items-center p-2"
              >
                Logout <FaSignOutAlt className="ms-2"></FaSignOutAlt>
              </button>
            </>
          ) : (
            <button>
              <NavLink
                to={"/signIn"}
                className="flex justify-center items-center p-2"
              >
                Login<FaSignInAlt className="ms-2"></FaSignInAlt>
              </NavLink>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;