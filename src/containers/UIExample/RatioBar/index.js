import React from "react";
import { RatioBar } from "../../../components/UIExample";
import "./index.scss";

const RatioBarShowcase = () => {
  const ratios = [20, 20, 30, 10, 40];
  const colors = ["#6b9080", "#a4c3b2", "#cce3de", "#eaf4f4", "#f6fff8"];

  return (
    <div>
      <h2 className="title">RatioBar with text</h2>
      <div className="row">
        <div className="type">RatioBar</div>
        <RatioBar ratios={ratios} colors={colors} text={true} />
      </div>
      <div className="row">
        <div className="type">RatioBar without text</div>
        <RatioBar ratios={ratios} colors={colors} text={false} />
      </div>
      <div className="row">
        <div className="type">RatioBar with text and tooltip</div>
        <RatioBar ratios={ratios} colors={colors} text={true} tooltip={true} />
      </div>
    </div>
  );
};

export default RatioBarShowcase;
