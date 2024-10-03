import { Link } from "react-router-dom";
import ganbuPicture from "../../assets/images/photo-1.png";

const AboutSection = () => {
  return (
    <div className="relative w-full h-screen bg-gray-100">
      <img
        className="absolute inset-0 left-96 h-full bg-cover"
        src={ganbuPicture}
      />

      <div className="absolute inset-0 right-0 h-full w-full bg-orange-500 opacity-35"></div>

      <div className="relative z-10 w-2/3 h-full bg-white rounded-r-full shadow-xl p-16 flex items-center">
        <div className="w-4/5">
          <h1 className="text-8xl font-bold mb-6 text-black">OC-HISA</h1>
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
