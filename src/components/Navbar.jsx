import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/nav_logo.png";
import SearchBar from "./SearchBar";
import SocialMediaLink from "./SocialMediaLink";
import paths from "../utils/path.js";

const Navbar = () => {
  return (
    <nav className="bg-[#F13148] h-[215px]">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Nav Logo" className="min-w-52" />
        </Link>

        <SearchBar />

        <ul className="flex items-center gap-8 text-white text-5xl p-8">
          <SocialMediaLink
            link="https://www.instagram.com/oc_hisa/"
            isList={true}
            name={"instagram"}
          />
          <SocialMediaLink link="" isList={true} name={"facebook"} />
          <SocialMediaLink link="" isList={true} name={"youtube"} />
        </ul>
      </div>

      <div>
        <ul className="flex text-white text-2xl font-bold gap-20 justify-center">
          {paths.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-decoration-line: underline" : ""
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
