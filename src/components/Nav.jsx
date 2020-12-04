import React from "react";

export const Nav = () => {
  return (
    <nav className="nav sideMenu-padding">
      <ul className="nav__left">
        <li>Hot</li>
        <li>New</li>
        <li>Top</li>
        <li>Raising</li>
      </ul>
      <ul className="nav__right">
        <li className="bell">Bell</li>
        <li className="user">notnowl8er</li>
      </ul>
    </nav>
  );
};
