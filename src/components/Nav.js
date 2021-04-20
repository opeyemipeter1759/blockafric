import React from "react";
import "./Nav.css";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/" className="earn">
        <div className="home">
          <HomeIcon className="icon active" />
          <p>Home</p>
        </div>
      </Link>

      <Link to="/activity" className="earn">
        <div className="activity">
          <AppsIcon className="icon active" />
          <p>Activity</p>
        </div>
      </Link>
      <Link to="/wallet" className="earn">
        <div className="wallet">
          <AccountBalanceWalletIcon className="icon active" />
          <p>Wallet</p>
        </div>
      </Link>
      <Link to="/market" className="earn">
        <div className="market">
          <FeaturedPlayListIcon className="icon active" />
          <p>Market</p>
        </div>
      </Link>
      <Link to="/earn" className="earn">
        <div className="earn">
          <CreditCardIcon className="icon active" />
          <p>Earn</p>
        </div>
      </Link>
    </div>
  );
}

export default Nav;
