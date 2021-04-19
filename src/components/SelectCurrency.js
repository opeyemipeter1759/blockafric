import React from "react";
import Button from "@material-ui/core/Button";
import "./Selectcurreny.css";
function SelectCurrency() {
  return (
    <div className="select-currency">
      <div className="select-upper">
        <p>Select Currency:</p>
      </div>

      <div className="select-area">
        <div className="dropdown">
          <p className="dropdown-text"> AFYA</p>
          <i class="fas fa-angle-down"></i>
        </div>

        <div className="figure">
          <p className="">0.000000001</p>
        </div>
      </div>
      <div className="but">
        <Button variant="contained">Primary</Button>
        <Button variant="contained">Primary</Button>
      </div>
    </div>
  );
}

export default SelectCurrency;
