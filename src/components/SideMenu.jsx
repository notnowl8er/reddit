import React, { useState } from "react";
import { categories } from "../helper/categories";

export const SideMenu = () => {
  const [categorie, setCategorie] = useState([categories]);
  return (
    <div className="sideMenu">
      <div className="sideMenu__top">
        <div className="sideMenu__top-logo">
          <div className="logo"></div>
          <h1>reddit</h1>
        </div>
        <div className="sideMenu__top-searchBar">
          <input type="text" placeholder="Search" id="" />
        </div>
        <div className="sideMenu__top-sort"></div>
      </div>
      <div className="sideMenu__bottom">
        <ul className="sideMenu__bottom-catagories">
          {categories.map((item) => {
            return <li key={item.id}>{item.topic}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
