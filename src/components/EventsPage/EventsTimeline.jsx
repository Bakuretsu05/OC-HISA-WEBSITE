import TimelineBar from "./TimelineBar";

const EventsTimeline = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-950 to-purple-950 flex flex-col items-center py-32">
      <h1 className="text-2xl font-bold text-white">Events Timeline</h1>
      <TimelineBar />
    </div>
  );
};

export default EventsTimeline;
