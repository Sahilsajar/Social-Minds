import React from "react";
import IntroAni1 from "./IntroAni1";
import IntroAni2 from "./IntroAni2";
function IntroAniMain({ isFullWidth }) {
  console.log(isFullWidth);
  return (
    <div
      className={
        isFullWidth
          ? "introAniDiv w-full ease-in duration-1000"
          : "introAniDiv basis-1/2 ease-in duration-1000"
      }
    >
      <IntroAni1></IntroAni1>
      <IntroAni2></IntroAni2>
    </div>
  );
}

export default IntroAniMain;
