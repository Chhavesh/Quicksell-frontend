import React from "react";
import "./UserColumn.css";
import Card from "../../../UserCard/UserCard";

function UserColumn({ user, tickets }) {
  const userTickets = tickets.filter((ticket) => ticket.userId === user.id);

  return (
    <div>
      <div className="container">
        <div className="card-subheading">
          <div className="user-details">
            <div className="c-avatar">
              <img
                className="c-avatar__image"
                src="Userphoto.jpg"
                alt=""
              ></img>
              <span
                className={`c-avatar__status ${
                  user.available ? "available" : ""
                }`}
              ></span>
            </div>
            <div>{user.name}</div>
            <div>{userTickets.length}</div>
          </div>
          <div className="options">
            <img src="add.svg" alt="" />
            <img src="3 dot menu.svg" alt="" />
          </div>
        </div>

        <div className="ticket-list">
          {userTickets.map((ticket, key) => {
            return <Card key={key} user={user} ticket={ticket} userColumn/>;
          })}
        </div>
      </div>
      <div className="cards"></div>
    </div>
  );
}

export default UserColumn;
