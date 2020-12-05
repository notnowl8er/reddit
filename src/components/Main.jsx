import React from "react";
import { Nav } from "./Nav";
import { PostContainer } from "./PostContainer";

export const Main = ({ selected }) => {
  return (
    <div className="main">
      <Nav />
      <PostContainer selected={selected} />
    </div>
  );
};
