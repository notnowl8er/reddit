import React, { useState } from "react";
import { Main } from "./Main";
import { SideMenu } from "./SideMenu";

export const Home = () => {
  const [selected, setSelected] = useState("all");
  return (
    <div className="home">
      <SideMenu selected={selected} setSelected={setSelected} />
      <Main selected={selected} />
    </div>
  );
};
