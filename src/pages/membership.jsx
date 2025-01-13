const Membership = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#FF2458] to-[#FFC147]">
      <div className="relative w-full max-w-4xl text-center text-white">
        {/* squareys yeee */}
        <div className="absolute w-full h-full z-0">
          <div className="absolute top-0 left-[-70%] w-[600px] h-[600px] bg-white opacity-35 rounded-2xl blur-md animate-float-medium transform rotate-90"></div>
          <div className="absolute top-10 left-[-20%] w-96 h-96 bg-white opacity-30 rounded-2xl blur-md animate-float-slow rotate-6"></div>
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-white opacity-20 rounded-2xl blur-md animate-float-slow rotate-12"></div>
          <div className="absolute bottom-10 left-[100%] w-[450px] h-[450px] bg-white opacity-25 rounded-2xl blur-md animate-float-medium"></div>
          <div className="absolute bottom-1/4 left-0 w-[550px] h-[550px] bg-white opacity-25 rounded-2xl blur-md animate-float-slow rotate-9"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Membership</h1>
          <p className="text-2xl mb-40 font-thin">
            We offer discounts and benefits for our fellow members
          </p>
          <button className="h-20 w-80 hover:bg-gradient-to-r text-xl bg-neutral-800 hover:from-orange-400 hover:to-pink-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
