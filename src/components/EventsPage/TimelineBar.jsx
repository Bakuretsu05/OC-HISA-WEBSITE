import TimePoint from "./TimePoint";
import eventList from "../../utils/eventList";

const TimelineBar = () => {
  return (
    <div className="flex w-2/3 my-56 relative">
      <div className="h-1 w-1/3 bg-gradient-to-r from-timeline-grad-stop-1 to-timeline-grad-stop-2 translate-y-timeline-center-fix"></div>
      <div className="h-1 w-2/3 bg-gradient-to-r from-timeline-grad-stop-2 via-timeline-grad-stop-3 via-70%  to-timeline-grad-stop-4 translate-y-timeline-center-fix"></div>
      <div className="absolute w-full flex justify-between">
        <TimePoint label="Aug" />
        <TimePoint label="Sep" labelAtTop={true} />
        <TimePoint label="Oct" />
        <TimePoint label="Nov" labelAtTop={true} />
        <TimePoint label="Dec" />
        <TimePoint label="Jan" labelAtTop={true} />
        <TimePoint label="Feb" />
        <TimePoint label="Mar" labelAtTop={true} />
        <TimePoint label="Apr" />
        <TimePoint label="May" labelAtTop={true} />
        <TimePoint label="Jun" />
        <TimePoint label="Jul" labelAtTop={true} />
      </div>
      <TimePoint
        label={eventList.kaorou.title}
        isEvent={true}
        className="left-13%"
        eventColor="bg-kaorou-event-color"
      />
      <TimePoint
        label={eventList.yingxin.title}
        labelAtTop={true}
        isEvent={true}
        className="left-30%"
        eventColor="bg-yingxin-event-color"
      />
      <span className="absolute left-timeline-new-year-border -top-30 h-60 w-thin bg-white flex flex-col justify-between">
        <p className="text-white translate-x-2">2025</p>
        <p className="text-white -translate-x-12">2024</p>
      </span>
    </div>
  );
};

export default TimelineBar;
