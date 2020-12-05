import React, { useState } from "react";
import logo from "../assets/reddit.svg";
import { categories, sort } from "../helper/categories";

export const SideMenu = ({ selected, setSelected }) => {
  const [categorie, setCategorie] = useState([categories]);

  const handleSelected = (subreddit) => {
    setSelected(subreddit);
  };
  const handleSort = (sort) => {
    console.log(sort);
  };
  return (
    <div className="sideMenu">
      <div className="sideMenu__top">
        <div className="sideMenu__top-logo sideMenu-padding">
          <div className="logo margin-right-1">
            <i className="fab fa-reddit-alien"></i>
          </div>
          <h1>reddit</h1>
        </div>
        <div className="sideMenu__top-searchBar">
          <input type="text" placeholder="Search" id="" />
          <i className="fas fa-search"></i>
        </div>
        <div className="sideMenu__top-sort sideMenu-padding bottom-border">
          <ul className="list-bottom-padding">
            {sort.map((item) => {
              return (
                <li onClick={() => handleSort(item.sort)} key={item.id}>
                  {item.sort}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="sideMenu__bottom sideMenu-padding scroll">
        <ul className="sideMenu__bottom-catagories list-bottom-padding">
          {categorie[0].map((item) => {
            return (
              <li onClick={() => handleSelected(item.topic)} key={item.id}>
                {item.topic}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
