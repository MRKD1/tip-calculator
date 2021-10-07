import React from "react";

import {
  Button,
  VStack,
  StackDivider,
  Grid,
  GridItem,
  SimpleGrid,
  Box,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import "./TipAmount.css";

const TipAmount = ({ tipAmount, total, onClickReset }) => {
  return (
    <div className="amount">
      <Grid templateRows="repeat(2, 1fr)" gap={6}>
        <Flex style={{ alignItems: "center", marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <p style={{ fontSize: "1.25rem" }}>Tip Amount</p>
            <p>/ person</p>
          </div>
          <Spacer />
          <div style={{ fontSize: "4rem", color: "#38b2ac" }}>${tipAmount}</div>
        </Flex>

        <Flex style={{ alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <p style={{ fontSize: "1.25rem" }}>Total</p>
            <p>/ person</p>
          </div>
          <Spacer />
          <div style={{ fontSize: "4rem", color: "#38b2ac" }}>${total}</div>
        </Flex>
      </Grid>
      <Button isFullWidth borderRadius={7} onClick={onClickReset}>
        RESET
      </Button>
    </div>
  );
};

export default TipAmount;
