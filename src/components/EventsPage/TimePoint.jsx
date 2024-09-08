const TimePoint = ({ label, labelAtTop }) => {
  return (
    <div className="flex flex-col relative">
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
};

export default TimePoint;
