import React from "react";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Netflix-clone/Nav-Bar",
  component: Nav,
};

export const NavBar = () => (
  <BrowserRouter>
    <Nav />
  </BrowserRouter>
);
