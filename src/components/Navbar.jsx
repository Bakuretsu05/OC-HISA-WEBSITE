import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/nav_logo.png";
import SearchBar from "./SearchBar";
import SocialMediaLink from "./SocialMediaLink";
import paths from "../utils/path.js";

// eslint-disable-next-line react/prop-types
const Navbar = ({ children }) => {
  return (
    <nav className="">
      <div className="flex items-center justify-around bg-[#F13148]">
        <Link to="/">
          <img src={logo} alt="Nav Logo" className="w-64" />
        </Link>

        <SearchBar />

        <ul className="flex items-center gap-8 text-white text-3xl p-8">
          <SocialMediaLink
            link="https://www.instagram.com/oc_hisa/"
            isList={true}
            name={"instagram"}
          />
          <SocialMediaLink link="" isList={true} name={"facebook"} />
          <SocialMediaLink link="" isList={true} name={"youtube"} />
        </ul>
      </div>

      <div className="sticky bg-white top-0 z-20 shadow-md">
        <ul className="flex text-black font-bold justify-center">
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
