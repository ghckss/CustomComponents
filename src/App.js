import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, RatioBarShowcase } from "./containers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/ratioBar" component={RatioBarShowcase} />
      </div>
    );
  }
}

export default App;
