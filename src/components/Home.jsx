import React from "react";
import { Main } from "./Main";
import { SideMenu } from "./SideMenu";

export const Home = () => {
  return (
    <div className="home">
      <SideMenu />
      <Main />
    </div>
  );
};
