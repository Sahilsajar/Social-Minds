import React, { useEffect, useState } from "react";
// import Try from "../components/Try";
import IntroAniMain from "../components/IntroAniMain";
import TypeAni from "./TypeAni";
import "../resource/IntroAniMain.css";
function Introduction() {
  const [isFullWidth, setFullWidth] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFullWidth(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="BG-slate-950">
      <div id="intro-container" className="flex max-w-screen-xl w-full mx-auto">
        <TypeAni isFullWidth={isFullWidth}></TypeAni>
        <IntroAniMain isFullWidth={isFullWidth}></IntroAniMain>

        {/* <Try></Try> */}
      </div>
    </div>
  );
}

export default Introduction;
