import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Start from "./pages";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <div className="full-height parent">
        <Switch>
          <Route path="/quiz" component={Quiz}></Route>
          <Route path="/" component={Start}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
