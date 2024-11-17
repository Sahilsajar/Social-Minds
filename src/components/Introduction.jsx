import React from "react";
// import Try from "../components/Try";
import IntroAniMain from "../components/IntroAniMain";
import TypeAni from "./TypeAni";
import "../resource/IntroAniMain.css";
function Introduction() {
  return (
    <div id="intro-container" className="flex">
      <TypeAni></TypeAni>
      <IntroAniMain></IntroAniMain>

      {/* <Try></Try> */}
    </div>
  );
}

export default Introduction;
