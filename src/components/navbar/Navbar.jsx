import Link from "next/link";
import React from "react";
import { IoBookOutline } from "react-icons/io5";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar max-w-350 mx-auto">
        <div className="navbar-start">
          <div className="dropdown absolute right-2 sm:relative dropdown-left">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-5 shadow-xl text-center "
            >
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href={`/all-courses`}>Course</NavLink>
              </li>
              <li className="hidden">
               <NavLink href="/profile">My Profile</NavLink>
              </li>

              <li className=" space-y-2 mt-4 sm:hidden">
                <button className="btn bg-[#09C82C] py-1 px-5 rounded-full border-none text-white hover:shadow-md shadow-[#09C82C]/50 transition duration-300 ease-in-out ">
                  <Link href="/signin">Login</Link>
                </button>
                <button className="btn bg-[#09C82C] px-5 rounded-full border-none text-white hover:shadow-md shadow-[#09C82C]/50 transition duration-300 ease-in-out ">
                  <Link href="/signup">Register</Link>
                </button>
              </li>
            </ul>
          </div>
          <Link
            href={"/"}
            className="flex text-xl items-center gap-2 font-bold "
          >
            <IoBookOutline className="text-[#09C82C] text-2xl" />
            <span>SkillSphere</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href={`/all-courses`}>Course</NavLink>
            </li>
            <li className="hidden">
              <NavLink href="/profile">My Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2 hidden sm:flex">
          <Link href="/signin" className="block">
            <button className="btn bg-[#09C82C] px-5 rounded-full border-none text-white hover:shadow-md shadow-[#09C82C]/50 transition duration-300 ease-in-out ">
              Login
            </button>
          </Link>
          <Link href="/signup" className="block">
            <button className="btn bg-[#09C82C] px-5 rounded-full border-none text-white hover:shadow-md shadow-[#09C82C]/50 transition duration-300 ease-in-out ">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
