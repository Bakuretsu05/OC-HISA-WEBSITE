import EventsTimeline from "../components/EventsPage/EventsTimeline";
import EventSection from "../components/EventsPage/EventSection";
import kaorouSlide1 from "../assets/images/kaorou_slide1.png";
import yingxinSlide1 from "../assets/images/yingxin_slide1.png";
import christmasSlide1 from "../assets/images/christmas_slide1.png";
import interdayNYCUPhoto from "../assets/images/intl_day_nycu.png";
import songjiuPhoto from "../assets/images/songjiu.png";
import Card from "../components/Card";
import eventList from "../utils/eventList";
// import { NavLink } from "react-roter-dom";

const Events = () => {
  return (
    <div className="relative flex flex-col">
      <EventsTimeline />
      <EventSection
        imgUrl={kaorouSlide1}
        title={eventList.kaorou.title}
        chineseTitle={eventList.kaorou.chineseTitle}
        desc={eventList.kaorou.desc}
      />
      <EventSection
        imgUrl={yingxinSlide1}
        title={eventList.yingxin.title}
        chineseTitle={eventList.yingxin.chineseTitle}
        desc={eventList.yingxin.desc}
      />
      <EventSection
        imgUrl={christmasSlide1}
        title={eventList.christmas.title}
        desc={eventList.christmas.desc}
      />
      <EventSection
        imgUrl={interdayNYCUPhoto}
        title={eventList.intday_nycu.title}
        desc={eventList.intday_nycu.desc}
      />
      <EventSection
        // imgUrl={""}
        title={eventList.intday_nthu.title}
        desc={eventList.intday_nthu.desc}
      />
      <EventSection
        imgUrl={songjiuPhoto}
        title={eventList.songjiu.title}
        chineseTitle={eventList.songjiu.chineseTitle}
        desc={eventList.songjiu.desc}
      />
    </div>
  );
};

export default Events;
