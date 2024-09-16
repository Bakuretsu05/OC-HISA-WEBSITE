import { useState } from "react";
import TimelineInfoCard from "./TimelineInfoCard";

const TimePoint = ({
  label,
  labelAtTop,
  isEvent,
  eventColor,
  eventImg,
  eventDesc,
  isNow,
  className,
}) => {
  const [hovered, setHovered] = useState(false);

  let content;

  if (isNow) {
    content = (
      <div
        className={"absolute " + className}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && <TimelineInfoCard showToday={true} />}
        <div
          className={
            "flex flex-col items-center relative transition-all duration-250 origin-top " +
            (hovered ? " scale-125" : "")
          }
        >
          <span
            className={
              "absolute  w-4 h-4 rounded-full flex flex-col transition-all duration-250 z-10 overflow-hidden"
            }
          >
            <span className="h-1/2 w-full bg-grad-red" />
            <span className="h-1/2 w-full bg-white" />
          </span>
        </div>
      </div>
    );
  } else if (isEvent) {
    content = (
      <div
        className={"absolute " + className}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <TimelineInfoCard
            img={eventImg}
            title={label}
            desc={eventDesc}
            labelAtTop={labelAtTop}
          />
        )}
        <div
          className={
            "flex flex-col items-center relative transition-all duration-250 " +
            (labelAtTop ? "-translate-y-24 origin-bottom" : "origin-top") +
            (hovered ? " scale-125" : "")
          }
        >
          {!labelAtTop ? (
            <>
              <span
                className={
                  "absolute top-1 w-2 h-2 rounded-full bg-white transition-all duration-250 z-10 "
                }
              ></span>
              <span
                className={
                  "w-4 h-4 rounded-full transition-all duration-250 " +
                  eventColor
                }
              ></span>
              <span className={"w-thin h-24 " + eventColor}></span>
              <p className="font-semibold text-white absolute -bottom-14">
                {label}
              </p>
            </>
          ) : (
            <>
              <span
                className={
                  "absolute bottom-1 w-2 h-2 rounded-full bg-white transition-all duration-250 "
                }
              ></span>
              <p className="font-semibold text-white absolute -top-16">
                {label}
              </p>
              <span className={"w-thin h-24 " + eventColor}></span>
              <span
                className={
                  "w-4 h-4 rounded-full transition-all duration-250 " +
                  eventColor
                }
              ></span>
            </>
          )}
        </div>
      </div>
    );
  } else {
    content = (
      <div
        className={
          " flex flex-col relative transition-all duration-250 " +
          (hovered ? "scale-125" : "")
        }
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className="w-4 h-4 rounded-full bg-white"></span>
        <p
          className={
            "text-white absolute -left-2 " + (labelAtTop ? "-top-8" : "top-6")
          }
        >
          {label}
        </p>
      </div>
    );
  }

  return content;
};

export default TimePoint;
