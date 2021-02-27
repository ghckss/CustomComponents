import React from "react";
import "./Debounce.scss";

const Debounce = () => {
  return (
    <div className="debouncing">
      <div className="debouncing__title">
        <h2>Debouncing 비교 테스트</h2>
      </div>
      <div className="debouncing__input">
        <input type="text" />
      </div>
      <div className="result debouncing__result">
        <div className="result__container result__deactive">
          <div className="result__title">Debounce 미 적용시 API 호출 횟수</div>
          <div className="result__value">0</div>
        </div>
        <div className="result__container result__active">
          <div className="result__title">Debounce 적용시 API 호출 횟수</div>
          <div className="result__value">0</div>
        </div>
      </div>
    </div>
  );
};

export default Debounce;
