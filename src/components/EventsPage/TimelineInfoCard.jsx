import { getTodaysDateString } from "../../utils/utils";

const TimelineInfoCard = ({ img, title, desc, labelAtTop, showToday }) => {
  const [dateString, yearString] = getTodaysDateString();

  return showToday ? (
    <div className="w-52 bg-transparent-layer rounded-lg shadow-md z-30 absolute origin-bottom -bottom-0 p-4">
      <p className="text-white text-sm">Today</p>
      <h1 className="text-white text-3xl font-bold">{dateString}</h1>
      <h3 className="text-xl font-bold text-grad-orange">{yearString}</h3>
    </div>
  ) : (
    <div
      className={
        "flex w-timeline-info-width h-48 bg-white rounded-lg shadow-md z-30 absolute overflow-hidden " +
        (labelAtTop ? "-bottom-28" : "-top-52")
      }
    >
      <div className="flex flex-col p-4 z-20 w-70% relative">
        <h1 className="font-bold">{title}</h1>
        <p className="line-clamp-4">{desc}</p>
      </div>
      <img src={img} alt={img} className="w-30%" />
    </div>
  );
};

export default TimelineInfoCard;
