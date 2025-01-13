import Logo from "../assets/images/Main_Logo_HD.png";
import paths, { socialLinks } from "../utils/path.js";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import SocialMediaLink from "./SocialMediaLink";

const Footer = () => {
  return (
    <div className="bg-[#1B252C] h-96 p-20 flex items-center justify-around">
      <img src={Logo} alt="OCHISA Logo" className="h-full" />

      {/* { "Explore" } */}
      <div className="text-white">
        <h1 className="text-4xl font-bold mb-2">Explore</h1>
        {paths.map(({ name, path }) => (
          <p
            className="text-xl font-thin mb-1 hover:text-red-600 hover:underline transition-colors"
            key={name + "__footer"}
          >
            <Link to={path}>{name}</Link>
          </p>
        ))}
      </div>

      {/* { "Stay Connected & "Contact Us" } */}
      <div className="flex flex-col justify-between text-white h-full">
        <div>
          <h1 className="text-4xl font-bold mb-2">Stay Connected</h1>
          <ul className="flex items-center gap-6 text-white text-5xl">
            <SocialMediaLink
              link={socialLinks.instagram}
              isList={true}
              name={"instagram"}
            />
            <SocialMediaLink
              link={socialLinks.facebook}
              isList={true}
              name={"facebook"}
            />
            <SocialMediaLink
              link={socialLinks.youtube}
              isList={true}
              name={"youtube"}
            />
          </ul>
        </div>

        <div>
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <div className="flex items-center">
            <CiMail className="text-4xl mr-2" />
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-xl hover:underline hover:cursor-pointer"
            >
              ochisa84@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
