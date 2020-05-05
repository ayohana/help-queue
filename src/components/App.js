import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return (
    <Router>
      <Header />
      <Switch> {/* Think of the <Switch> component as being like a conditional - it will render only ONE of the routes contained inside the <Switch> component. */}
        <Route path="/signin"> {/* The route's path will ALWAYS begin with a / just like an actual path in a URL */}
          <Signin />
        </Route>
        <Route path="/">
          <TicketControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;