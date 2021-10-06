import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import "./App.css";
import TipAmount from "./components/TipAmount";
import TipCalculator from "./components/TipCalculator";

const App = () => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  console.log(bill, tip, people);

  useEffect(() => {
    let tipCalc = (bill * (tip / 100)) / people;
    let totalCalc = (bill + bill * (tip / 100)) / people;
    setTipAmount(tipCalc.toFixed(2));
    setTotal(totalCalc.toFixed(2));
    // setTipAmount(((bill * (tip / 100)) / people).toFixed(2));
    // setTotal(((bill + bill * (tip / 100)) / people).toFixed(2));
  }, [bill, tip, people]);

  const handleButton = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
  };

  return (
    <div>
      <Box
        sx={{
          width: 1000,
          height: 500,
          bgcolor: "#e0f2f1",
          boxShadow: 5,
          borderRadius: 5,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <TipCalculator
          bill={bill}
          onChangeBill={(e) => setBill(Number(e.target.value))}
          people={people}
          onChangePeople={(e) => setPeople(Number(e.target.value))}
          tip={tip}
          onChangeTip={(e) => setTip(Number(e.target.value))}
        />
        <TipAmount
          tipAmount={tipAmount}
          total={total}
          onClickReset={handleButton}
        />
      </Box>
    </div>
  );
};

export default App;
