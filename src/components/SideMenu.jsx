import React, { useState } from "react";
import logo from "../assets/reddit.svg";
import { categories } from "../helper/categories";

export const SideMenu = () => {
  const [categorie, setCategorie] = useState([categories]);
  return (
    <div className="sideMenu">
      <div className="sideMenu__top">
        <div className="sideMenu__top-logo sideMenu-padding">
          <div className="logo margin-right-1">
            <i class="fab fa-reddit-alien"></i>
          </div>
          <h1>reddit</h1>
        </div>
        <div className="sideMenu__top-searchBar">
          <input type="text" placeholder="Search" id="" />
          <i class="fas fa-search"></i>
        </div>
        <div className="sideMenu__top-sort sideMenu-padding bottom-border">
          <ul className="list-bottom-padding">
            <li className="selected">popular</li>
            <li>all</li>
            <li>random</li>
            <li>users</li>
          </ul>
        </div>
      </div>
      <div className="sideMenu__bottom sideMenu-padding scroll">
        <ul className="sideMenu__bottom-catagories list-bottom-padding">
          {categories.map((item) => {
            return <li key={item.id}>{item.topic}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
