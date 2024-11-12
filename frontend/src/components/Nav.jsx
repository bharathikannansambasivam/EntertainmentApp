import React from "react";
import bookmarkIcon from "/assets/icon-nav-bookmark.svg";
import homeIcon from "/assets/icon-nav-home.svg";
import moviesIcon from "/assets/icon-nav-movies.svg";
import tvIcon from "/assets/icon-nav-tv-series.svg";
import logo from "/assets/logo.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-navBg w-fit p-5 flex items-center flex-col gap-10 h-screen fixed ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col  p-3 gap-10">
        <Link to="/">
          <img src={homeIcon} alt="" />
        </Link>

        <Link to="/movies">
          <img src={moviesIcon} alt="" />
        </Link>

        <Link to="/tvshows">
          <img src={tvIcon} alt="" />
        </Link>

        <Link to="/bookmark">
          {" "}
          <img src={bookmarkIcon} alt="" />
        </Link>
      </div>

      <div className="h-screen flex items-end mb-10">
        <p className="h-10  w-10 rounded-full  bg-slate-200"></p>
      </div>
    </div>
  );
}

export default Nav;
