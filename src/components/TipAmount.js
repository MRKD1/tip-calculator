import React from "react";

import "./TipAmount.css";

const TipAmount = ({ tipAmount, total, onClickReset }) => {
  return (
    <div className="amount">
      <div className="ui grid tipAmount">
        <div className="six wide column">Tip Amount</div>
        <div className="ten wide column">${tipAmount}</div>
      </div>
      <div className="ui grid total">
        <div className="six wide column">Total</div>
        <div className="ten wide column">${total}</div>
      </div>
      <div className="ui sixteen wide column grid reset">
        <button className=" fluid ui button" onClick={onClickReset}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default TipAmount;
