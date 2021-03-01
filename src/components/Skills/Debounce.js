import React from "react";
import produce from "immer";
import "./Debounce.scss";

const Debounce = () => {
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
    debounce(e);
  };

  const debounce = (e) => {
    if (timer) {
      clearTimeout(timer);
      setTimer(timer);
    }
    setTimer(
      setTimeout(() => {
        setActiveCount(activeCount + 1);
        setActiveKeyword(
          produce(activeKeyword, (draftState) => {
            draftState.push(e.target.value);
          })
        );
      }, 200)
    );
  };

  const renderDebouncingKeywords = (keywords) => {
    return keywords.map((keyword, index) => {
      return <li key={index}>{keyword}</li>;
    });
  };

  return (
    <div className="debouncing">
      <div className="debouncing__title">
        <h2>Debouncing 비교 테스트</h2>
      </div>
      <div className="debouncing__input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValue}
          placeholder="값을 입력하면 API를 호출합니다."
        />
      </div>
      <div className="result debouncing__result">
        <div className="result__container result__deactive">
          <div className="result__counter">
            <div className="result__title">
              Debounce 미 적용시 API 호출 횟수
            </div>
            <div className="result__value">{deactiveCount}</div>
          </div>
          <div className="result__list">
            {renderDebouncingKeywords(deactiveKeyword)}
          </div>
        </div>
        <div className="result__container result__active">
          <div className="result__counter">
            <div className="result__title">Debounce 적용시 API 호출 횟수</div>
            <div className="result__value">{activeCount}</div>
          </div>
          <div className="result__list">
            {renderDebouncingKeywords(activeKeyword)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Debounce;
