import React from "react";
import "./index.scss";

const ExpandableTable = ({ headers, data }) => {
  function toggleDetail(e) {
    const subrows = Array.from(
      e.target.closest("div.table-row").lastChild.children
    );
    subrows.shift();

    toggleButton(e.target);
    subrows.forEach((row) => row.classList.toggle("hidden"));
  }

  function toggleButton(target) {
    if (target.innerText === "+") {
      target.innerText = "-";
    } else if (target.innerText === "-") {
      target.innerText = "+";
    }
  }

  const createTableColumn = (tableData, headers, prevId, columnIndex) => {
    const column = !columnIndex ? 0 : columnIndex;
    return tableData.map((obj, index) => {
      const currentId = !prevId ? obj.id : prevId + "|" + obj.id;
      const name = !prevId
        ? headers[column].id
        : prevId + "|" + headers[column].id;
      return (
        <div
          key={index}
          className={`table-row ${
            obj.id !== "ALL" && column !== 0 && "hidden"
          }`}
        >
          <div className={`cell body row-${index} column-${column}`}>
            <div className="checkbox-container">
              <span
                className="checkbox"
                type="checkbox"
                id={currentId}
                value={obj.id}
                name={name}
              >
                {obj.name}
              </span>

              {!!obj.value && obj.id !== "ALL" && (
                <span
                  style={{ cursor: "pointer", float: "right" }}
                  onClick={toggleDetail}
                >
                  +
                </span>
              )}
            </div>
          </div>
          <div className="body-container">
            {!!obj.value &&
              createTableColumn(obj.value, headers, currentId, column + 1)}
          </div>
        </div>
      );
    });
  };

  const tableHeader = headers.map((header, index) => {
    return (
      <div key={index} className={`cell header column-${index}`}>
        {header.name}
      </div>
    );
  });

  const tableBody = createTableColumn(data, headers);

  return (
    <div className="expandable-table">
      <div className={`table table-row`}>
        <div className="table-row">{tableHeader}</div>
        <div className="body-container">{tableBody}</div>
      </div>
    </div>
  );
};

export default ExpandableTable;
