import BobbingCircles from "./BobbingCircles";
import HomeLogo from "../../assets/images/home_logo.png";

const MainTitle = () => {
  return (
    <div className="relative bg-signature-red h-screen flex items-center justify-center">
      <img src={HomeLogo} className="relative top-[-5%] z-10" />
      <BobbingCircles />
    </div>
  );
};

export default MainTitle;
