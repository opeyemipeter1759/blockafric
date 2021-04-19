import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import RecentActivity from "./RecentActivity";
import SelectCurrency from "./SelectCurrency";

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <SelectCurrency />
      <RecentActivity />
    </div>
  );
}

export default HomePage;
