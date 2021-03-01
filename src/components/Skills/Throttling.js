import React from "react";
import "./Throttling.scss";

const Throttling = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [activeCount, setActiveCount] = React.useState(0);
  const [deactiveCount, setDeactiveCount] = React.useState(0);

  return (
    <div className="throttling">
      <div className="throttling__title">
        <h2>Throttling 비교 테스트</h2>
      </div>
      <div className="throttling__input">
        <input
          type="text"
          value={inputValue}
          placeholder="값을 입력하면 API를 호출합니다."
        />
      </div>
      <div className="result throttling__result">
        <div className="result__container result__deactive">
          <div className="result__title">
            Throttling 미 적용시 API 호출 횟수
          </div>
          <div className="result__value">{deactiveCount}</div>
        </div>
        <div className="result__container result__active">
          <div className="result__title">Throttling 적용시 API 호출 횟수</div>
          <div className="result__value">{activeCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Throttling;
