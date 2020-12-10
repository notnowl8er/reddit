import React, { useState } from "react";
import { categories } from "../helper/categories";

export const SubReddits = ({ setSelected }) => {
  const [categorie, setCategorie] = useState([categories]);
  const handleSelected = (subreddit) => {
    setSelected(subreddit);
  };
  return (
    <ul className="sideMenu__bottom-catagories list-bottom-padding sideMenu-padding">
      {categorie[0].map((item) => {
        return (
          <li
            className="list-items"
            onClick={() => handleSelected(item.topic)}
            key={item.id}
          >
            {item.topic}
          </li>
        );
      })}
    </ul>
  );
};
