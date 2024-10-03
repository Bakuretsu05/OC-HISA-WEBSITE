import { getTodaysDateString } from "../../utils/utils";
import { FaRegWindowClose } from "react-icons/fa";

const TimelineInfoCard = ({
  img,
  title,
  desc,
  labelAtTop,
  showToday,
  onClose,
}) => {
  const [dateString, yearString] = getTodaysDateString();

  return showToday ? (
    <div className="w-52 bg-transparent-layer rounded-lg shadow-md z-30 absolute origin right top-4 right-4 p-4">
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="size-8 absolute top-2 right-2 text-white hover:scale-125 transiton-all duration-200"
        onClick={onClose}
      >
        <path d="M6 18 18 6M6 6l12 12" />
      </svg>

      <div className="flex flex-col p-4 z-20 w-70% relative">
        <h1 className="font-bold">{title}</h1>
        <p className="line-clamp-4">{desc}</p>
      </div>
      <img src={img} alt="helo?" className="w-30% object-cover" />
    </div>
  );
};

export default TimelineInfoCard;
