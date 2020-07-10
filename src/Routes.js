import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

const NoMatch = () => <h2>Route not Found</h2>;

export const Routes = () => (
  <div>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path={["/home", "/"]} component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);
