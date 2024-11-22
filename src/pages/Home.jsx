import React from "react";
import Introduction from "../components/Introduction";

import Try from "../components/Try";
import Results from "../components/Results";

import ReviewCard1 from "../components/ReviewCard1"




function Home() {
  return (
    <div>
      <Introduction></Introduction>

      

      <ReviewCard1></ReviewCard1>
      
      <Results/>

    </div>
  );
}

export default Home;
