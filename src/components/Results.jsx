import React from "react";
import AnimateText from "./AnimateText";
import Graph from "./Graph";

const Results = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 bg-white text-black dark:bg-dark2 dark:text-white p-6 gap-6">
      {/* Text Section */}
      <div className="flex flex-col text-center justify-center text-sm md:text-lg lg:col-span-2 lg:h-full space-y-6">
        <div className="flex flex-col">
          <span className="underline text-slate-600">
            <AnimateText start={10} end={90} /> % increase
          </span>
          <span>in online orders within four months</span>
        </div>
        <div className="flex flex-col">
          <span className="underline text-slate-600">
            <AnimateText start={10} end={120} /> % growth
          </span>
          <span>in social media followers and engagement</span>
        </div>
        <div className="flex flex-col">
          <span className="underline text-slate-600">
            <AnimateText start={10} end={70} /> % increase
          </span>
          <span>in website conversion rates and user experience</span>
        </div>
      </div>

      {/* Graph Section */}
      <div className="flex justify-center items-center p-4">
        <Graph />
      </div>
    </div>
  );
};

export default Results;
