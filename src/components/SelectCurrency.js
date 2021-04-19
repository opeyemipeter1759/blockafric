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
        <select name="currency" id="">
          <option value="AFYA">AFYA</option>
        </select>
        <p>0.000000001</p>
      </div>
      <Button variant="contained">Primary</Button>
      <Button variant="contained" >
        Primary
      </Button>
    </div>
  );
}

export default SelectCurrency;
