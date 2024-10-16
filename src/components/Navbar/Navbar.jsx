import React from "react";
import Dropdown from "./DisplayDrop/DisplayDrop.jsx";
import "./Navbar.css";
function Header({ groupBy, setGroupBy, sortBy, setSortBy }) {
  return (
    <nav className="navbar">
      <Dropdown
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
    </nav>
  );
}

export default Header;
