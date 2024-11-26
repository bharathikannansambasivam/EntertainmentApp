import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Movies from "./Movies";
import homeIcon from "/assets/icon-nav-home.svg";

function Test() {
  return (
    <div>
      <a href="/tvshows">
        <img src={homeIcon} alt="Home" />
      </a>
    </div>
  );
}

export default Test;
