import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>
        <div>
          <Link to="/ratio-bar">RatioBar</Link>
        </div>
        <div>
          <Link to="/table-expandable">ExpandableTable</Link>
        </div>
      </h2>
    </div>
  );
};

export default Home;
