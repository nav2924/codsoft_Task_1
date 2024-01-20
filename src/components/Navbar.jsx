import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a Job" },
  ];
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center  text-2xl text-black">
          <img
            className="w-[50px] h-[50px]"
            src="https://s3-alpha-sig.figma.com/img/b4ca/cdcd/cc6390ede3974b2472058e658d931810?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D-KKAiDH50bHhwUF~NOA8w5LTE8BT-XjZ5AsDf6-N630Vv~O1-RfQp6P6RsnGqvHpFj3n1nluRXZ~8on-VS-xO5JtV39sp93yWYsiyB0wkRCFPSTqPpyfsVsUkgbjZ-K58ibeJYlwqKKYwjuv~MUpCidnrRRx30LiZFiCkcLOREiGVYHnGAGQ5zGcD6A7WdGXpRUja8LfRKNpbxOUSoASC~nvgewdEWI0l6kB6zIadrhcTIlivlzFnFF-C7OFGQN7RHn-1yeU4nogrhjoTTgvcpqIV27nb9ETH9LlIIsss3nUZ0bxefFp4XV6b78qk6K9L3RNJHtak7JNukHz7R7ww__"
          />{" "}
          <span>Job Portal</span>
        </a>
        {/* nav items for large devices */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-black">
              <NavLink
                to={path}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* signup and login btn */}
        <div className="text-base text-black font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded">
            Log in
          </Link>
          <Link
            to="/sign-up"
            className="py-2 px-5 border rounded bg-blue-500 text-white"
          >
            Sign up
          </Link>
        </div>

        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-black" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-black" />
            )}
          </button>
        </div>
      </nav>
      <div
        className={`px-4 bg-black py-4 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-6"
            >
              <NavLink
                to={path}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className="text-white py-1">
            <Link to="/login" className="py-2 px-5 border rounded">
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
