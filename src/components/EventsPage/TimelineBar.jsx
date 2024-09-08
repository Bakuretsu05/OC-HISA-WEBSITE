import TimePoint from "./TimePoint";

const TimelineBar = () => {
  return (
    <div className="flex w-2/3 my-32 relative">
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
    </div>
  );
};

export default TimelineBar;
