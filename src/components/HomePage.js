import React from "react";
import Hero from "./Hero";
import RecentActivity from "./RecentActivity";
import SelectCurrency from "./SelectCurrency";

function HomePage() {
  return (
    <div>
      <Hero />
      <SelectCurrency />
      <RecentActivity />
    </div>
  );
}

export default HomePage;
