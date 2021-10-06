import React from "react";

import "./TipCalculator.css";

const TipCalculator = ({
  bill,
  onChangeBill,
  people,
  onChangePeople,
  tip,
  onChangeTip,
}) => {
  return (
    <div className="calculator">
      {/* <div className="ui grid">
        <div className="sixteen wide column">Bill</div>
        <div className="sixteen wide column">
          <div className="ui right labeled input">
            <input
              type="number"
              placeholder="Amount"
              value={bill}
              onChange={onChangeBill}
            />
          </div>
        </div>

        <div className="sixteen wide column">Select Tip %</div>

        <div className="five wide column">
          <button className="ui button tip-button">5%</button>
        </div>
        <div className="five wide column">
          <button className="ui button tip-button">10%</button>
        </div>
        <div className="five wide column">
          <button className="ui button tip-button">15%</button>
        </div>
        <div className="five wide column">
          <button className="ui button tip-button">25%</button>
        </div>
        <div className="five wide column">
          <button className="ui button tip-button">50%</button>
        </div>
        <div className="five wide column">
          <div className="ui input ">
            <input
              type="number"
              placeholder="Custom"
              className="tip-button"
              value={tip}
              onChange={onChangeTip}
            />
          </div>
        </div>

        <div className="sixteen wide column">Number of People</div>
        <div className="sixteen wide column">
          <div className="ui left icon input">
            <input
              type="number"
              placeholder="Enter a number"
              className="input"
              value={people}
              onChange={onChangePeople}
            />
            <i className="users icon"></i>
          </div>
        </div>
      </div> */}

      <div className="ui grid">
        <div className="wide row">Bill</div>
        <div className="wide row">
          <div className="ui right labeled input">
            <label className="ui label">$</label>
            <input
              type="number"
              placeholder="Amount"
              value={bill}
              onChange={onChangeBill}
            />
          </div>
        </div>
      </div>

      <div className="ui grid">
        <div className="wide row">Select Tip %</div>
        <div className="five wide column">
          <button className="ui button tip-button">5%</button>
        </div>
        <div className="five wide column">
          <button className="ui button tip-button">10%</button>
        </div>
        <div className="five wide column">
          <button className="ui button tip-button">15%</button>
        </div>
        <div className="five wide column">
          <button className="ui button tip-button">25%</button>
        </div>
        <div className="five wide column">
          <button className="ui button tip-button">50%</button>
        </div>
        <div className="five wide column">
          <div className="ui input ">
            <input
              type="number"
              placeholder="Custom"
              value={tip}
              onChange={onChangeTip}
            />
          </div>
        </div>
      </div>

      <div className="ui grid">
        <div className="wide row">Number of People</div>
        <div className="wide row">
          <div className="ui left icon input">
            <input
              type="number"
              placeholder="Enter a number"
              className="input"
              value={people}
              onChange={onChangePeople}
            />
            <i className="users icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
