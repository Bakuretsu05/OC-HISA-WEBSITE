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

/**
 * * [ 0.8         5.07826087  9.35652174 13.63478261 17.91304348 22.19130435
 ** 26.46956522 30.74782609 35.02608696 39.30434783 43.5826087  47.86086957
 ** 52.13913043 56.4173913  60.69565217 64.97391304 69.25217391 73.53043478
 ** 77.80869565 82.08695652 86.36521739 90.64347826 94.92173913 99.2       ]
 */

export const nowTimepointClassnames = [
  "left-[0.8%]",
  "left-[5.1%]",
  "left-[9.4%]",
  "left-[13.6%]",
  "left-[17.9%]",
  "left-[22.2%]",
  "left-[26.5%]",
  "left-[30.7%]",
  "left-[35.0%]",
  "left-[39.3%]",
  "left-[43.6%]",
  "left-[47.9%]",
  "left-[52.1%]",
  "left-[56.4%]",
  "left-[60.7%]",
  "left-[65%]",
  "left-[69.3%]",
  "left-[73.5%]",
  "left-[77.8%]",
  "left-[82.1%]",
  "left-[86.4%]",
  "left-[90.6%]",
  "left-[94.9%]",
  "left-[99.2%]",
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
};
