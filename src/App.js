import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Angles from "./components/Angles";
import Area from "./components/Area";
import Hypotenuse from "./components/Hypotenuse";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/angles">
            <Angles />
          </Route>
          <Route path="/area">
            <Area />
          </Route>
          <Route path="/hypotenuse">
            <Hypotenuse />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
