const monthsString = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getTodaysDateString = () => {
  //? Returns an array, ex: ["Sep, 13", "2024"]
  const date = new Date();
  return [
    monthsString[date.getMonth()] + ", " + date.getDate().toString(),
    date.getFullYear().toString(),
  ];
};

export const calculateTodayTimepointIndex = () => {
  /**
   * ? The positioning classes of the "Today-timepoint" is in the form "timeline-now-#index" (see tailwind.config.js)
   * ? This function calculates and returns that index
   */

  const date = new Date();

  //* Re-mapping month indices
  let monthInd = date.getMonth();
  monthInd >= 7 ? (monthInd -= 7) : (monthInd += 5);
  return monthInd * 2 + (date.getDate() > 15 ? 1 : 0);
};
