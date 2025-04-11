import ganbuPicture from "../../assets/images/student-essentials-pic.png";

const StudentEssentialsSection = () => {
  return (
    <div className="relative w-full h-[75vh]">
      {/* Left-side image with blue overlay */}
      <div className="relative w-full h-full">
        <img
          src={ganbuPicture}
          alt="Students"
          className="absolute h-full scale-110 z-0"
        />
        <div className="absolute inset-0 bg-white opacity-30"></div>
      </div>

      {/* Right-side text content */}
      <div
        className="absolute inset-y-0 p-10 right-0 w-4/5 bg-signature-red text-white flex items-center"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 40% 100%, 0 0)",
        }}
      >
        <div className="p-8 ml-auto text-end relative">
          <h1 className="text-5xl font-bold mb-4">Student Essentials</h1>
          <div className="w-[40rem]">
            <p className="text-xl mb-6">
              We compiled essential information for new students coming to
              Taiwan into our{" "}
              <a href="#" className="font-bold hover:underline">
                OC-HISA guidebook
              </a>
              .
              <br />
              Go check it out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentEssentialsSection;
