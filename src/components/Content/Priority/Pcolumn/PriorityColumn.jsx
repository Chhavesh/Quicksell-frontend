import React from "react";
import "./PriorityColumn.css";
import Card from "../../../UserCard/UserCard.jsx";
function PriorityColumn({ users, image, priority, tickets }) {
    const getUser = (id) => {
        const user = users.filter((item)=>(
          item.id === id
        ))
        return user[0];
    }
  return (
    <div>
      <div className="container">
        <div className="card-subheading">
          <div className="user-details">
            <div className="c-avatar">
              <img src={image} alt="" />
            </div>
            <div>{priority}</div>
            <div>{tickets.length}</div>
          </div>
          <div className="options">
            <img src="add.svg" alt="" />
            <img src="3 dot menu.svg" alt="" />
          </div>
        </div>

        <div className="ticket-list">
          {tickets.map((ticket, key) => {
            return <Card key={key} getUser={getUser} ticket={ticket} priorityColumn />;
          })}
        </div>
      </div>
      <div className="cards"></div>
    </div>
  );
}

export default PriorityColumn;
