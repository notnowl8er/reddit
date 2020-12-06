import React from "react";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { Sort } from "./Sort";
import { SubReddits } from "./SubReddits";

export const SideMenu = ({ selected, setSelected }) => {
  return (
    <div className="sideMenu">
      <div className="sideMenu__top">
        <Logo />
        <SearchBar selected={selected} setSelected={setSelected} />
        <Sort />
      </div>
      <div className="sideMenu__bottom">
        <SubReddits selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
};
