import TimelineBar from "./TimelineBar";
import TimelineInfoCard from "./TimelineInfoCard";

const EventsTimeline = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-950 to-purple-950 relative h-lvh w-lvw flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-white">Events Timeline</h1>
      <TimelineInfoCard showToday={true} />
      <TimelineBar />
      <TimelineInfoCard showToday={true} />
    </div>
  );
};

export default EventsTimeline;
