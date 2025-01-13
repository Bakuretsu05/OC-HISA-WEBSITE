import VerticalCard from "../components/VerticalCard.jsx";

import sponsorsData from "../Datas/sponsors.json";

const Partner = () => {
  return (
    // <div className="bg-slate-700 h-screen p-16 flex flex-col items-center">
    //   <h1 className="text-6xl font-bold text-white">Our Sponsor</h1>
    //   {sponsorsData.map((sponsor) => (
    //     <VerticalCard
    //       key={sponsor.id}
    //       title={sponsor.name}
    //       text={sponsor.description || null}
    //       img={sponsor.logoUrl}
    //     />
    //   ))}
    // </div>
    <div className="py-8 px-56 h-screen">
      <h2 className="text-2xl font-semibold text-center mb-6">Our Sponsors</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sponsorsData.map((sponsor) => (
          <div
            key={sponsor.id}
            className="bg-white shadow-lg rounded-lg p-4 flex justify-center items-center"
          >
            <img
              src={sponsor.logoUrl}
              alt={sponsor.name}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
