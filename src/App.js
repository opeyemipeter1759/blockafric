import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RecentActivity from "./components/RecentActivity";
import SelectCurrency from "./components/SelectCurrency";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* hero */}
      <Hero />
      {/* select currrency */}
      <SelectCurrency />
      {/* recent activity */}
      <RecentActivity />
      {/* nav */}
    </div>
  );
}

export default App;
