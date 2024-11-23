import React from "react";
import Introduction from "../components/Introduction";
import Service from "../components/Service";
import Try from "../components/Try";
import Results from "../components/Results";

import ReviewCard1 from "../components/ReviewCard1";

function Home() {
  return (
    <div className=" py-2">
      <Introduction></Introduction>
      <Service></Service>
      <ReviewCard1></ReviewCard1>
      <Results />
    </div>
  );
}

export default Home;
