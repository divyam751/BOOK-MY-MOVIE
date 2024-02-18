import React from "react";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <div className="navLogo">
          <img src={logo} className="navLogo" alt="" />
        </div>
        <div className="searchBar">
          <SearchIcon sx={{ fontSize: 40 }} />
          <input
            className="searchInput"
            type="text"
            placeholder="Search your favourite movies..."
          />
        </div>
        <div className="accountButtons">
          <Button variant="contained">Signup</Button>
          <Button variant="contained">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
