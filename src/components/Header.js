import React from "react";
import "../App.css";
import Logo from "../assets/Logo.jpg";
import Task from "../assets/TASK(2).png";

const header = ({ theme, setTheme }) => {
  return (
    <header>
      <div className="logo">
        <img className="mainlogo" src={Logo} alt="" />
        <img className="logohead" src={Task} alt="" />
      </div>
      <span className="themeSelector">
        <span className={theme === "light" ? "light activeTheme" : "light"} onClick={() => setTheme("light")}></span>
        <span className={theme === "medium" ? "medium activeTheme" : "medium"} onClick={() => setTheme("medium")}></span>
        <span className={theme === "dark" ? "dark activeTheme" : "dark"} onClick={() => setTheme("dark")}></span>
        <span className={theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"} onClick={() => setTheme("gradientOne")}></span>
        <span className={theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"} onClick={() => setTheme("gradientTwo")}></span>
        <span className={theme === "gradientThree" ? "gradientThree activeTheme" : "gradientThree"} onClick={() => setTheme("gradientThree")}>
        </span>
      </span>
    </header>
  );
};

export default header;