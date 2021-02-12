import React from "react";
import { RatioBar } from "../../components";
import "./index.scss";

const RatioBarShowcase = () => {
  const ratios = [20, 20, 30, 10, 40];
  const colors = ["#6b9080", "#a4c3b2", "#cce3de", "#eaf4f4", "#f6fff8"];

  return (
    <div>
      <h2 className="title">RatioBar</h2>
      <div className="row">
        <div className="type">RatioBar1</div>
        <RatioBar ratios={ratios} colors={colors} />
      </div>
    </div>
  );
};

export default RatioBarShowcase;
