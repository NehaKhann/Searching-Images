import React from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import Search from "./Search";
import Menu from "./Menu";

export default function App() {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>
  );
}
