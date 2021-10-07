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
        <div class="three column row">
          <div class="column">
            <button className="ui fluid button tip-button">5%</button>
          </div>
          <div class="column">
            <button className="ui fluid button tip-button">10%</button>
          </div>
          <div class="column">
            <button className="ui fluid button tip-button">15%</button>
          </div>
        </div>
        <div class="three column row">
          <div class="column">
            <button className="ui fluid button tip-button">25%</button>
          </div>
          <div class="column">
            <button className="ui fluid button tip-button">50%</button>
          </div>
          <div class="column">
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

      {/* <Grid
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={6}
      >
        <GridItem colSpan={3}>
          <Flex direction="column" align="flex-start">
            <p>Bill</p>
            <div className="ui right labeled input">
              <label className="ui label">$</label>
              <input
                type="number"
                placeholder="Amount"
                value={bill}
                onChange={onChangeBill}
              />
            </div>
          </Flex>
        </GridItem>

        <GridItem colSpan={3} justify="flex end">
          <p>Select Tip %</p>
        </GridItem>
        <GridItem colSpan={1}>
          <button className="ui fluid button tip-button">5%</button>
        </GridItem>
        <GridItem colSpan={1}>
          <button className="ui fluid button tip-button">10%</button>
        </GridItem>
        <GridItem colSpan={1}>
          <button className="ui fluid button tip-button">15%</button>
        </GridItem>
        <GridItem colSpan={1}>
          <button className="ui fluid button tip-button">25%</button>
        </GridItem>
        <GridItem colSpan={1}>
          <button className="ui fluid button tip-button">50%</button>
        </GridItem>
        <GridItem colSpan={1}>
          <div className="ui fluid input ">
            <input
              type="number"
              placeholder="Custom"
              value={tip}
              onChange={onChangeTip}
            />
          </div>
        </GridItem>

        <GridItem colSpan={3}>
          <Flex direction="column" align="flex-start">
            <p>Number of People</p>
            <div className="ui right labeled input">
              <label className="ui label">$</label>
              <input
                type="number"
                placeholder="Amount"
                value={bill}
                onChange={onChangeBill}
              />
            </div>
          </Flex>
        </GridItem>
      </Grid> */}
    </div>
  );
};

export default TipCalculator;
