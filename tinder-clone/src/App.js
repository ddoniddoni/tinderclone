import React from "react";
import Header from "./Header";
import "./App.css";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am the chatPage</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

{
  /*Tinder Card*/
}
{
  /*Buttons Tinder Cards*/
}

{
  /* Chats screen */
}
{
  /*Individual chat screen*/
}
export default App;
