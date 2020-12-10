import React from "react";
import { sort } from "../helper/categories";

export const Sort = () => {
  const handleSort = (sort) => {
    console.log(sort);
  };
  return (
    <div className="sideMenu__top-sort sideMenu-padding bottom-border">
      <ul className="list-bottom-padding">
        {sort.map((item) => {
          return (
            <li
              className="list-items"
              onClick={() => handleSort(item.sort)}
              key={item.id}
            >
              {item.sort}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
