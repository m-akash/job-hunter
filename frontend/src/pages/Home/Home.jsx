import React from "react";
import Navbar from "../shared/Navbar";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import FeatureJobs from "../FeatureJobs/FeatureJobs";
import GetStarted from "../GetStarted/GetStarted";
import Recruiting from "../Recruiting/Recruiting";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <FeatureJobs></FeatureJobs>
      <GetStarted></GetStarted>
      <Recruiting></Recruiting>
    </div>
  );
};

export default Home;
