import React from "react";
import Button from "@material-ui/core/Button";
import "./Selectcurreny.css";
function SelectCurrency() {
  return (
    <div className="select-currency">
      <div className="select-upper">
        <p>Select Currency:</p>
      </div>

      {/* <div className="select-area">
        <div className="dropdown">
          <p className="dropdown-text"> AFYA</p>
          <i className="fas fa-angle-down"></i>
        </div>

        <div className="figure">
          <p className="">0.000000001</p>
        </div>
      </div> */}

      <div className="input-group mb-3 mt-3">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            AFYA
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              ZYA
            </a>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown button"
          placeholder="0.000000001"
        />
      </div>
      <div className="but">
        <Button variant="contained">SEND</Button>
        <Button variant="contained">RECEIVE</Button>
      </div>
    </div>
  );
}

export default SelectCurrency;
