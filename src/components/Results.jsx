import React from "react";
import AnimateText from "./AnimateText";
import Graph from "./Graph";
import backImg from "../assets/Background/1.jpg";

const Results = () => {
  return (
    <div
      style={{
        backgroundImage: "url(" + backImg + ")",
        backgroundSize: "cover",
      }}
      className="bg-white h-screen text-black dark:bg-dark2 dark:text-white"
    >
      <div className="p-8 mx-auto w-5/6">
        <div className="md:text-base">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-slate-600 dark:text-white p-6">
            About Us
          </h2>
          <p className="text-xs md:text-sm lg:text-base hidden sm:block">
            At Social Minds, we help you create, manage, and optimize ads that
            connect with the right audience. Whether you're a small business or
            a marketer, our platform provides the tools and insights you need to
            elevate your brand and drive results.
          </p>
        </div>
        <div className="h-[calc(100vh-153px)] grid grid-cols-1 md:grid-cols-2 md:pt-4">
          {/* Text Section */}
          <div className="h-fit flex flex-col text-center  justify-center md:text-lg space-y-2 md:space-y-6 md:pt-4">
            <div className="flex flex-col">
              <span className="underline text-slate-600">
                <AnimateText start={10} end={90} /> % increase
              </span>
              <span className="text-sm lg:text-base">in online orders within four months</span>
            </div>
            <div className="flex flex-col">
              <span className="underline text-slate-600">
                <AnimateText start={10} end={120} /> % growth
              </span>
              <span className="text-sm lg:text-base">in social media followers and engagement</span>
            </div>
            <div className="flex flex-col">
              <span className="underline text-slate-600">
                <AnimateText start={10} end={70} /> % increase
              </span>
              <span className="text-sm lg:text-base">in website conversion rates and user experience</span>
            </div>
          </div>

          {/* Graph Section */}
          <div className="pt-2">
            <Graph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
