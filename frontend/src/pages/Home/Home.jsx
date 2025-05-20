import React from "react";
import Navbar from "../shared/Navbar";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import FeatureJobs from "../FeatureJobs/FeatureJobs";
import GetStarted from "../GetStarted/GetStarted";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <FeatureJobs></FeatureJobs>
      <GetStarted></GetStarted>
    </div>
  );
};

export default Home;
