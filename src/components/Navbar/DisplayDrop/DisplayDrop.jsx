import React, { useState } from "react";
import "./DisplayDrop.css";

function Dropdown({ setGroupBy, setSortBy }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <ul className="navbar-menu">
        <li className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-btn">
            <img src="Display.svg" className="icon" />
            Display
            <img src="down.svg" />
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li>
                Grouping
                <div className="field">
                  <select
                    onChange={(e) => setGroupBy(e.target.value)}
                    className="dropdown-btn"
                    name="grouping"
                    id="grouping"
                  >
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                  </select>
                </div>
              </li>

              <li>
                Ordering
                <select
                  onChange={(e) => setSortBy(e.target.value)}
                  className="dropdown-btn"
                  name="grouping"
                  id="grouping"
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
