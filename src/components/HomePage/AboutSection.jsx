import { Link } from "react-router-dom";
import ganbuPicture from "../../assets/images/photo-1.png";

const AboutSection = () => {
  return (
    <div className="relative w-full h-screen bg-white sm:bg-gray-100 p-5 sm:p-0">
      <img
        className="hidden sm:block absolute inset-0 h-full left-[40%]"
        src={ganbuPicture}
      />

      <div className="hidden sm:block absolute inset-0 right-0 h-full w-full bg-orange-500 opacity-35"></div>

      <div className="relative z-10 w-full sm:w-2/3 h-full bg-white rounded-r-full sm:shadow-card-shadow sm:p-16 flex items-center">
        <div className="sm:w-4/5 text-center sm:text-left">
          <h1 className="text-6xl sm:text-8xl font-bold mb-6 text-black">
            OC-HISA
          </h1>
          <p className="text-2xl text-gray-700 mb-4">
            We are a community of Indonesian students in Hsinchu, Taiwan. Our
            members are Indonesian students from two Taiwan national
            universities in Hsinchu: National Tsing Hua University (NTHU) and
            National Yang Ming Chiao Tung University (NYCU).
          </p>
          <Link
            to="/about"
            className="text-red-500 text-2xl font-semibold hover:underline"
          >
            More about us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
