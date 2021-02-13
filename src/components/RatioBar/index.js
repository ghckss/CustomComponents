import React from "react";
import "./index.scss";

const RatioBar = ({ ratios, colors, text = true }) => {
  let sum = 0;

  const currentColors =
    colors.length > 0
      ? colors
      : ["#6b9080", "#a4c3b2", "#cce3de", "#eaf4f4", "#f6fff8"];

  const ratioBar = ratios.map((ratio, index) => {
    const prevSum = sum;
    sum += ratio;

    if (sum > 100) {
      ratio = 100 - prevSum;
    } else if (prevSum > 100) {
      return;
    }

    const backgroundColor = currentColors[index % currentColors.length];

    return (
      <div
        key={index}
        className="bar"
        style={{ width: `${ratio}%`, backgroundColor }}
      >
        {text ? `${ratio}%` : ""}
      </div>
    );
  });

  return <div className="ratio-bar">{ratioBar}</div>;
};

export default RatioBar;
