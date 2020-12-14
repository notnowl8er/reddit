import React from "react";

export const ToggleSwitch = () => {
  const toggleSwitch = () => {
    const currentTheme = document.documentElement.dataset.theme;
    if (currentTheme === "dark") {
      document.documentElement.dataset.theme = "light";
    } else {
      document.documentElement.dataset.theme = "dark";
    }
  };
  return (
    <div>
      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" onChange={toggleSwitch} />
          <div className="slider round"></div>
        </label>
        <em>Enable Dark Mode!</em>
      </div>
    </div>
  );
};
