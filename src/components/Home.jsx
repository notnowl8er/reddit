import React, { useState } from "react";
import { Main } from "./Main";
import { SideMenu } from "./SideMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LinkPage } from "./LinkPage";

export const Home = () => {
  const [selected, setSelected] = useState("all");
  const [sort, setSort] = useState("best");
  return (
    <Router>
      <div className="home">
        <SideMenu selected={selected} setSelected={setSelected} />
        <Main selected={selected} sort={sort} setSort={setSort} />
      </div>
      <Switch>
        <Route path="/link">
          <LinkPage />
        </Route>
      </Switch>
    </Router>
  );
};
