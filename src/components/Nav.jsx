import React from "react";

export const Nav = () => {
  return (
    <nav className="nav sideMenu-padding">
      <ul className="nav__left">
        <li key="1" className="selected">
          Hot
        </li>
        <li key="2">New</li>
        <li key="3">Top</li>
        <li key="4">Raising</li>
      </ul>
      <ul className="nav__right">
        <li key="1" className="bell">
          Log In
        </li>
        <li key="2" className="user">
          Sign Up
        </li>
      </ul>
    </nav>
  );
};
