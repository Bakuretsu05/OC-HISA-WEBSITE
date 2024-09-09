import { useState } from "react";

const TimePoint = ({ label, labelAtTop, isEvent, eventColor, className }) => {
  const [hovered, setHovered] = useState(false);

  const content = !isEvent ? (
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
  ) : (
    <div
      className={"absolute " + className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
                "w-4 h-4 rounded-full transition-all duration-250 " + eventColor
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
            <p className="font-semibold text-white absolute -top-16">{label}</p>
            <span className={"w-thin h-24 " + eventColor}></span>
            <span
              className={
                "w-4 h-4 rounded-full transition-all duration-250 " + eventColor
              }
            ></span>
          </>
        )}
      </div>
    </div>
  );

  return content;
};

export default TimePoint;
