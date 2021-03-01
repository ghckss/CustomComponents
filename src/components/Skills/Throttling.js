import React from "react";
import produce from "immer";
import "./Throttling.scss";

const Throttling = () => {
  const [timer, setTimer] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");

  const [activeCount, setActiveCount] = React.useState(0);
  const [deactiveCount, setDeactiveCount] = React.useState(0);

  const [activeKeyword, setActiveKeyword] = React.useState([]);
  const [deactiveKeyword, setDeactiveKeyword] = React.useState([]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    setDeactiveCount(deactiveCount + 1);
    setDeactiveKeyword(
      produce(deactiveKeyword, (draftState) => {
        draftState.push(e.target.value);
      })
    );
    throttling(e);
  };

  const throttling = (e) => {
    if (!timer) {
      setTimer(
        setTimeout(function () {
          setTimer(null);
          setActiveCount(activeCount + 1);
          setActiveKeyword(
            produce(activeKeyword, (draftState) => {
              draftState.push(e.target.value);
            })
          );
        }, 200)
      );
    }
  };

  const renderThrottlingKeywords = (keywords) => {
    return keywords.map((keyword, index) => {
      return <li key={index}>{keyword}</li>;
    });
  };

  return (
    <div className="throttling">
      <h1>Throttling</h1>
      <div className="debouncing__description">
        <h2>Throttling 이란?</h2>
        <span>자바스크립트의 이벤트를 성능상의 이유로 제어하기 위한 기법</span>
        <br />
        <span>이벤트를 일정한 주기가 지나야 다시 발생하도록 한다</span>
      </div>
      <div className="throttling__title">
        <h2>Throttling 비교 테스트</h2>
      </div>
      <div className="throttling__input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValue}
          placeholder="값을 입력하면 API를 호출합니다."
        />
      </div>
      <div className="result throttling__result">
        <div className="result__container result__deactive">
          <div className="result__counter">
            <div className="result__title">
              Throttling 미 적용시 API 호출 횟수
            </div>
            <div className="result__value">{deactiveCount}</div>
          </div>
          <div className="result__list">
            {renderThrottlingKeywords(deactiveKeyword)}
          </div>
        </div>
        <div className="result__container result__active">
          <div className="result__counter">
            <div className="result__title">Throttling 적용시 API 호출 횟수</div>
            <div className="result__value">{activeCount}</div>
          </div>
          <div className="result__list">
            {renderThrottlingKeywords(activeKeyword)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Throttling;
