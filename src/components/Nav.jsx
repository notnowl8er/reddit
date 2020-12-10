import React from "react";
import { navSort } from "../helper/categories";

export const Nav = ({ setSort }) => {
  const handleSelected = (select) => {
    setSort(select.toLowerCase());
  };
  return (
    <nav className="nav sideMenu-padding">
      <ul className="nav__left">
        {navSort.map((item) => {
          return (
            <li
              className="list-items"
              onClick={() => {
                handleSelected(item.sort);
              }}
              key={item.id}
            >
              {item.sort}
            </li>
          );
        })}
      </ul>
      <ul className="nav__right">
        <li key="1" className="bell list-items">
          Log In
        </li>
        <li key="2" className="user list-items">
          Sign Up
        </li>
      </ul>
    </nav>
  );
};
