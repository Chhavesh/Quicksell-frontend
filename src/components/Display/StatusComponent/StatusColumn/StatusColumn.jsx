import React from "react";
import Card from "../../../UserCard/UserCard";

function StatusColumn({users, status, image, tickets}) {
  const getUser = (id) => {
    return users.filter((user) => user.id === id)[0];
  };
  return (
    <div>
      <div className="container">
        <div className="card-subheading">
          <div className="user-details">
            <div className="c-avatar">
              <img src={image} alt="" />
            </div>
            <div>{status}</div>
            <div>{tickets.length}</div>
          </div>
          <div className="options">
            <img src="add.svg" alt="" />
            <img src="3 dot menu.svg" alt="" />
          </div>
        </div>

        <div className="ticket-list">
          {tickets.map((ticket, key) => {
            return <Card key={key} getUser={getUser} ticket={ticket} statusColumn />;
          })}
        </div>
      </div>
      <div className="cards"></div>
    </div>
  );
}

export default StatusColumn;
