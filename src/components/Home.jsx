import React, { useState } from "react";
import { Main } from "./Main";
import { SideMenu } from "./SideMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LinkPage } from "./LinkPage";

export const Home = () => {
  const [selected, setSelected] = useState("all");
  const [sort, setSort] = useState("best");
  const [urlLink, setUrlLink] = useState();
  const removeOpacity = () => {
    const home = document.getElementById("home");
    home.style.opacity = "1";
  };
  return (
    <Router>
      <div className="home" id="home">
        <SideMenu selected={selected} setSelected={setSelected} />
        <Main
          selected={selected}
          sort={sort}
          setSort={setSort}
          setUrlLink={setUrlLink}
        />
      </div>
      <Switch>
        <Route path="/link">
          <LinkPage urlLink={urlLink} />
        </Route>
      </Switch>
    </Router>
  );
};
