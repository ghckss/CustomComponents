import React, { Component } from "react";
import { Route } from "react-router-dom";
import { ExpandableTableShowcase, Home, RatioBarShowcase } from "./containers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/ratioBar" component={RatioBarShowcase} />
        <Route path="/table-expandable" component={ExpandableTableShowcase} />
      </div>
    );
  }
}

export default App;
