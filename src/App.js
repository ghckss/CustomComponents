import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, RatioBar } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/ratioBar" component={RatioBar}/>
      </div>
    )
  }
}

export default App;
