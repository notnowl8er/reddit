import React from "react";
import { Nav } from "./Nav";
import { PostContainer } from "./PostContainer";

export const Main = ({ selected, sort, setSort, setUrlLink }) => {
  return (
    <div className="main">
      <Nav setSort={setSort} />
      <PostContainer selected={selected} sort={sort} setUrlLink={setUrlLink} />
    </div>
  );
};
