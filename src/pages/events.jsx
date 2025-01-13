import EventsTimeline from "../components/EventsPage/EventsTimeline";
import kaorouSlide1 from "../assets/images/kaorou_slide1.png";
import yingxinSlide1 from "../assets/images/yingxin_slide1.png";
import christmasSlide1 from "../assets/images/christmas_slide1.png";
import Card from "../components/Card";
import eventList from "../utils/eventList";
// import { NavLink } from "react-roter-dom";

const Events = () => {
  return (
    <div className="relative flex flex-col">
      <EventsTimeline />
      <section className="relative w-lvw h-lvh flex items-center justify-center">
        <img
          src={kaorouSlide1}
          alt="kaorouslide"
          className="object-cover absolute top-0 max-h-full w-full -z-10"
        />
        <Card className="relative w-[30%] flex flex-col items-center">
          <h1 className="text-3xl font-chinese text-black text-center font-black">
            烤肉
          </h1>
          <h1 className="text-center text-2xl font-bold">KaoRou</h1>
          <div className="h-thin w-full bg-gray-400 my-4"></div>
          <p className="text-center">{eventList.kaorou.desc}</p>
          <a
            href="https://linktr.ee/oc_hisa"
            className="text-sm underline text-amber-600 mt-4"
            target="_blank"
          >
            Check out past event photos!
          </a>
        </Card>
      </section>
      <section className="relative w-lvw h-lvh flex items-center justify-center">
        <img
          src={yingxinSlide1}
          alt="yingxinslide1"
          className="object-cover absolute top-0 max-h-full w-full -z-10"
        />
        <Card className="relative w-[30%] flex flex-col items-center">
          <h1 className="text-3xl font-chinese text-black text-center font-black">
            迎新
          </h1>
          <h1 className="text-center text-2xl font-bold">YingXin</h1>
          <div className="h-thin w-full bg-gray-400 my-4"></div>
          <p className="text-center">{eventList.yingxin.desc}</p>
          <a
            href="https://linktr.ee/oc_hisa"
            className="text-sm underline text-amber-600 mt-4"
            target="_blank"
          >
            Check out past event photos!
          </a>
        </Card>
      </section>
      <section className="relative w-lvw h-lvh flex items-center justify-center">
        <img
          src={christmasSlide1}
          alt="christmasSlide1"
          className="object-cover absolute top-0 max-h-full w-full -z-10"
        />
        <Card className="relative w-[30%] flex flex-col items-center">
          <h1 className="text-center text-2xl font-black">Christmas Dinner</h1>
          <div className="h-thin w-full bg-gray-400 my-4"></div>
          <p className="text-center">{eventList.christmas.desc}</p>
          <a
            href="https://linktr.ee/oc_hisa"
            className="text-sm underline text-amber-600 mt-4"
            target="_blank"
          >
            Check out past event photos!
          </a>
        </Card>
      </section>
    </div>
  );
};

export default Events;
