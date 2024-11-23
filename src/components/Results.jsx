import React from "react";
import AnimateText from "./AnimateText";
import Graph from "./Graph";

const Results = () => {
  return (
    <div className="border-b-2 h-[calc(100vh-56px)] bg-white text-black dark:bg-dark2 dark:text-white">
      <div className="h-[300px] flex flex-col justify-center items-center text-sm md:text-base">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-slate-600 dark:text-white p-6">
          About Us
        </h2>
        <p className="px-7">
          At Social Minds, we help you create, manage, and optimize ads that
          connect with the right audience. Whether you're a small business or a
          marketer, our platform provides the tools and insights you need to
          elevate your brand and drive results.
        </p>
      </div>
      <div className=" h-[calc(100vh-356px)] flex justify-around flex-col md:flex-row gap-2">
        {/* Text Section */}
        <div className="flex flex-col text-center justify-center text-sm md:text-lg space-y-6 pb-1">
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
        <div className="flex justify-center items-center pb-6">
         
            <Graph />
          
        </div>
      </div>
    </div>
  );
};

export default Results;
