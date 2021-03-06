import React from "react";
import "./recentactivity.css";
import bp from "./assests/bp.png";
import hiv from "./assests/hiv.png";
import xray from "./assests/xray.jpg";

function RecentActivity() {
  return (
    <div className="recent-activity">
      <div className="recent-head">
        <p>Recent Activity</p>
      </div>

      <div className="hiv-session">
        <img src={hiv} alt="hiv" />
        <p>HIV Blood Test</p>

        <p className="a100">A100</p>
      </div>
      <hr/>
      <div className="xray-session">
        <img src={xray} alt="hiv" />
        <p>TB Radiology Xray</p>

        <p className="a100">A100</p>
      </div>
      <hr/>
      <div className="bp-session">
        <img src={bp} alt="hiv" />
        <p>Blood Pressure Check</p>

        <p className="a100">A100</p>
      </div>

      <div className="recent-end"></div>
    </div>
  );
}

export default RecentActivity;
