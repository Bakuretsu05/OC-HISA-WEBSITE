import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/nav_logo.png";
import SearchBar from "./SearchBar";
import SocialMediaLink from "./SocialMediaLink";
import paths from "../utils/path.js";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Navbar = ({ children }) => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const toggleNav = () => {
    setIsNavShowing((prevIsNavShowing) => !prevIsNavShowing);
  };

  return (
    <nav>
      <div className="z-50 p-1 px-3 flex items-center justify-between sm:justify-around bg-signature-red">
        <Link to="/">
          <img src={logo} alt="Nav Logo" className="w-52" />
        </Link>

        {/* nav toggle button */}
        <button className="sm:hidden text-white text-3xl" onClick={toggleNav}>
          {isNavShowing ? <IoMdClose /> : <FaBars />}
        </button>

        <SearchBar className="hidden sm:block" />

        <ul className="hidden sm:flex items-center gap-8 text-white text-3xl p-8">
          <SocialMediaLink
            link="https://www.instagram.com/oc_hisa/"
            isList={true}
            name={"instagram"}
          />
          <SocialMediaLink link="" isList={true} name={"facebook"} />
          <SocialMediaLink link="" isList={true} name={"youtube"} />
        </ul>
      </div>

      <div
        className={`${
          isNavShowing ? "block" : "hidden"
        } sticky sm:block bg-white top-0 z-20 shadow-md`}
      >
        <ul
          className="flex bg-white sm:static flex-col sm:flex-row text-black font-bold justify-center"
          onClick={toggleNav}
        >
          {paths.map(({ name, path }) => (
            <NavLink
              to={path}
              key={name}
              className={({ isActive }) =>
                isActive ? "bg-[#F13148] text-white " : ""
              }
            >
              <li className="px-8 py-4  hover:text-white hover:bg-[#F13148] transition-all duration-200">
                {name}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>

      {children}
    </nav>
  );
};

export default Navbar;
