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
    <div id="intro-container" className="flex">
      <TypeAni isFullWidth={isFullWidth}></TypeAni>
      <IntroAniMain isFullWidth={isFullWidth}></IntroAniMain>

      {/* <Try></Try> */}
    </div>
  );
}

export default Introduction;
