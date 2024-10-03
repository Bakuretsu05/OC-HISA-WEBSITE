const BobbingCircles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none bottom-0">
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute bottom-[-50%] left-[-25%] w-[58rem] h-[58rem] bg-white blur-md rounded-full animate-bobbing-medium"></div>
        <div className="absolute bottom-[-45%] right-[-25%] w-[50rem] h-[50rem] bg-white blur-md rounded-full animate-bobbing-medium"></div>

        <div className="absolute bottom-[-12%] left-48 w-[30rem] h-[30rem] bg-white blur-md rounded-full animate-bobbing-fast"></div>
        <div className="absolute bottom-[-10%] left-[30%] w-96 h-96 bg-white blur-md rounded-full animate-bobbing-medium"></div>
        <div className="absolute bottom-[-25%] right-96 w-[35rem] h-[35rem] bg-white blur-md rounded-full animate-bobbing-medium"></div>
        <div className="absolute bottom-[-20%] right-0 w-[35rem] h-[35rem] bg-white blur-md rounded-full animate-bobbing-slow"></div>
      </div>
    </div>
  );
};

export default BobbingCircles;
