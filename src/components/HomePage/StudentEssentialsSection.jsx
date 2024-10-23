import ganbuPicture from "../../assets/images/student-essentials-pic.png";

const StudentEssentialsSection = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900">
      {/* Left-side image with blue overlay */}
      <div className="relative w-full h-full">
        <img
          src={ganbuPicture}
          alt="Students"
          className="absolute inset-0 h-full left-[-7%]"
        />
        <div className="absolute inset-0 bg-cyan-300 opacity-30"></div>
      </div>

      {/* Right-side text content */}
      <div
        className="absolute inset-y-0 p-10 right-0 w-4/5 bg-gray-800 text-white flex items-center"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 40% 100%, 0 0)",
        }}
      >
        <div className="p-8 ml-auto text-end">
          <h1 className="text-5xl font-bold mb-4">Student Essentials</h1>
          <p className="text-xl mb-6">
            We compiled essential information for new students coming to Taiwan
            into our{" "}
            <a href="#" className="text-blue-300 underline">
              OC-HISA guidebook
            </a>
            .
            <br />
            Go check it out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentEssentialsSection;
