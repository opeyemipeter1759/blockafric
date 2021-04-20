import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Activity from "./Pages/Activity";
import Market from "./Pages/Market";
import Earn from "./Pages/Earn";
import Wallet from "./Pages/Wallet";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/activity" exact component={Activity} />
          <Route path="/market" exact component={Market} />
          <Route path="/earn" exact component={Earn} />
          <Route path="/wallet" exact component={Wallet} />
        </Switch>
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;
