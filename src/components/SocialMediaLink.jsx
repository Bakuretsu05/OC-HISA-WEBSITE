import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

/* eslint-disable react/prop-types */
const SocialMediaLink = ({ link, isList = false, name, className }) => {
  let icon = <FaInstagram />;

  switch (name) {
    case "facebook":
      icon = <FaFacebook />;
      break;
    case "youtube":
      icon = <FaYoutube />;
      break;
    default:
      icon = <FaInstagram />;
  }

  // TODO: make the link open a new tab
  const content = (
    <a href={link} className={className}>
      {icon}
    </a>
  );

  return <>{isList ? <li>{content}</li> : content} </>;
};

export default SocialMediaLink;
