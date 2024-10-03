import BobbingCircles from "../BobbingCircles";
import HomeLogo from "../../assets/images/home_logo.png";

const MainTitle = () => {
  return (
    <div className="relative bg-signature-red h-screen flex items-center justify-center">
      <BobbingCircles />
      <img src={HomeLogo} />
    </div>
  );
};

export default MainTitle;
