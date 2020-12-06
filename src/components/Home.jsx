import React, { useState } from "react";
import { Main } from "./Main";
import { SideMenu } from "./SideMenu";

export const Home = () => {
  const [selected, setSelected] = useState("all");
  const [sort, setSort] = useState("best");
  return (
    <div className="home">
      <SideMenu selected={selected} setSelected={setSelected} />
      <Main selected={selected} sort={sort} setSort={setSort} />
    </div>
  );
};
