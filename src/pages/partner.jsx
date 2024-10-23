import SponsorImg from "../assets/images/sponsorship.jpg";

const Partner = () => {
  return (
    <div className="bg-slate-700 h-screen p-16 flex flex-col items-center">
      <h1 className="text-6xl font-bold text-white">Our Sponsor</h1>
      <div className="flex items-center h-full gap-10">
        <img
          src={SponsorImg}
          alt="sponsor"
          className="h-3/4 rounded-3xl shadow-2xl hover:h-5/6 duration-500"
        />
        <p className="text-white text-3xl">"Today's UberOne is on us!"</p>
      </div>
    </div>
  );
};

export default Partner;
