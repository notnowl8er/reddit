import React from "react";
import { Nav } from "./Nav";
import { PostContainer } from "./PostContainer";

export const Main = () => {
  return (
    <div className="main">
      <Nav />
      <PostContainer />
    </div>
  );
};