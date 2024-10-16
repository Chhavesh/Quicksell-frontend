import React, { useEffect, useState } from "react";
import "./Content.css";
import PriorityComponent from "./PriorityComponent/PriorityComponent";
import UserComponent from "./UserComponent/UserComponent";
import StatusComponent from "./StatusComponent/StatusComponent";

function Display({ groupBy, sortBy }) {
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);

  const getSortedTickets = (arr) => {
    const res = arr.sort((a, b) => {
      if (typeof a[sortBy] === "string" && typeof b[sortBy] === "string") {
        return a[sortBy].localeCompare(b[sortBy]);
      } else {
        return b[sortBy] - a[sortBy];
      }
    });
    return res;
  };

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data.users);
        setTickets(getSortedTickets(data.tickets));
      })
      .catch((err) => console.error(err));
  }, [sortBy]);

  return (
    <div>
      {groupBy === "status" && (
        <StatusComponent users={users} tickets={tickets} />
      )}
      {groupBy === "priority" && (
        <PriorityComponent users={users} tickets={tickets} />
      )}
      {groupBy === "user" && <UserComponent users={users} tickets={tickets} />}
    </div>
  );
}

export default Display;
