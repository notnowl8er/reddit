import React, { useState } from "react";

export const SearchBar = ({ selected, setSelected }) => {
  const [subreddit, setSubReddit] = useState("");
  const handleInputValue = (event) => {
    setSubReddit(event.target.value);
  };
  const onInputEnter = (event) => {
    if (event.key === "Enter") {
      setSelected(subreddit);
      document.getElementById("input").value = "";
    }
  };
  return (
    <div className="sideMenu__top-searchBar">
      <input
        onKeyPress={onInputEnter}
        onChange={handleInputValue}
        type="text"
        placeholder="r/..."
        id="input"
      />
      <i className="fas fa-search"></i>
    </div>
  );
};
