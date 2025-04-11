import TimePoint from "./TimePoint";
import eventList from "../../utils/eventList";
import { calculateTodayTimepointIndex } from "../../utils/utils";
import kaorouPhoto from "../../assets/images/kaorou.png";
import yingxinPhoto from "../../assets/images/yingxin.png";
import christmasPhoto from "../../assets/images/christmas.png";
import interdayNYCUPhoto from "../../assets/images/intl_day_nycu.png";
import songjiuPhoto from "../../assets/images/songjiu.png";

const TimelineBar = () => {
  const date = new Date();

  //* Re-mapping month indices
  let monthInd = date.getMonth();
  monthInd >= 7 ? (monthInd -= 7) : (monthInd += 5);
  monthInd = monthInd * 2 + (date.getDate() > 15 ? 1 : 0);

  return (
    <div className="flex w-2/3 my-56 relative">
      <div className="h-1 w-1/3 bg-gradient-to-r from-timeline-grad-stop-1 to-timeline-grad-stop-2 translate-y-timeline-center-fix"></div>
      <div className="h-1 w-2/3 bg-gradient-to-r from-timeline-grad-stop-2 via-timeline-grad-stop-3 via-70%  to-timeline-grad-stop-4 translate-y-timeline-center-fix"></div>
      <div className="absolute w-full flex justify-between">
        <TimePoint title="Aug" />
        <TimePoint title="Sep" labelAtTop={true} />
        <TimePoint title="Oct" />
        <TimePoint title="Nov" labelAtTop={true} />
        <TimePoint title="Dec" />
        <TimePoint title="Jan" labelAtTop={true} />
        <TimePoint title="Feb" />
        <TimePoint title="Mar" labelAtTop={true} />
        <TimePoint title="Apr" />
        <TimePoint title="May" labelAtTop={true} />
        <TimePoint title="Jun" />
        <TimePoint title="Jul" labelAtTop={true} />
      </div>
      <TimePoint
        title={eventList.kaorou.title}
        chineseTitle={eventList.kaorou.chineseTitle}
        isEvent={true}
        className="left-13%"
        eventColor="bg-kaorou-event-color"
        eventDesc={eventList.kaorou.desc}
        eventImg={kaorouPhoto}
      />
      <TimePoint
        title={eventList.yingxin.title}
        chineseTitle={eventList.yingxin.chineseTitle}
        labelAtTop={true}
        isEvent={true}
        className="left-30%"
        eventColor="bg-yingxin-event-color"
        eventDesc={eventList.yingxin.desc}
        eventImg={yingxinPhoto}
      />
      <TimePoint
        title={eventList.christmas.title}
        isEvent={true}
        labelAtTop={true}
        className="left-[38%]"
        eventColor="bg-christmas-event-color"
        eventDesc={eventList.christmas.desc}
        eventImg={christmasPhoto}
      />
      <TimePoint
        title={eventList.intday_nycu.title}
        isEvent={true}
        className="left-[58%]"
        eventColor="bg-intday_nycu-event-color"
        eventDesc={eventList.intday_nycu.desc}
        eventImg={interdayNYCUPhoto}
      />
      <TimePoint
        title={eventList.intday_nthu.title}
        isEvent={true}
        labelAtTop={true}
        className="left-[76%]"
        eventColor="bg-intday_nthu-event-color"
        eventDesc={eventList.intday_nthu.desc}
      />
      <TimePoint
        title={eventList.songjiu.title}
        chineseTitle={eventList.songjiu.chineseTitle}
        isEvent={true}
        className="left-[83%]"
        eventColor="bg-songjiu-event-color"
        eventDesc={eventList.songjiu.desc}
        eventImg={songjiuPhoto}
      />

      <span className="absolute left-timeline-new-year-border -top-30 h-60 w-thin bg-white flex flex-col justify-between">
        <p className="text-white translate-x-2">2025</p>
        <p className="text-white -translate-x-12">2024</p>
      </span>
    </div>
  );
};

export default TimelineBar;
