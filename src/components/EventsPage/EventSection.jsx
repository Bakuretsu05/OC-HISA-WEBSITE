import Card from "../Card";

const EventSection = ({ imgUrl, title, chineseTitle, desc }) => {
  return (
    <section className="relative  h-[90vh] flex items-center justify-center">
      <img
        src={imgUrl}
        alt="img"
        className="object-cover absolute top-0 max-h-full w-full -z-10"
      />
      <Card className="relative w-[30%] flex flex-col items-center">
        <h1 className="text-3xl font-chinese text-black text-center font-black">
          {chineseTitle}
        </h1>
        <h1 className="text-center text-2xl font-bold">{title}</h1>
        <div className="h-thin w-full bg-gray-400 my-4"></div>
        <p className="text-center">{desc}</p>
        <a
          href="https://bio.site/ochisa"
          className="text-sm underline text-amber-600 mt-4"
          target="_blank"
        >
          Check out past event photos!
        </a>
      </Card>
    </section>
  );
};

export default EventSection;
