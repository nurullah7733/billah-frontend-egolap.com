"use client";
import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
const OrderStatusBar = () => {
  return (
    <ProgressBar
      percent={90}
      filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
    >
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src="/assets/icons/not-process.png"
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <>
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="/assets/icons/processing.png"
            />
            <br />
            <p>processing</p>
          </>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src="/assets/icons/shipping.png"
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src="/assets/icons/delivery.png"
          />
        )}
      </Step>
    </ProgressBar>
  );
};

export default OrderStatusBar;
