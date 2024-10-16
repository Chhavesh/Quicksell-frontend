import React from "react";
import "./UserCard.css";

function Card({
  getUser,
  user,
  ticket,
  userColumn,
  priorityColumn,
  statusColumn,
}) {
  const statusImg = {
    Todo: "To-do.svg",
    "In progress": "in-progress.svg",
    Backlog: "Backlog.svg",
    Done: "Done.svg",
    Cancelled: "Cancelled.svg",
  };
  const priorityImg = {
    0: "No-priority.svg",
    1: "Urgent Priority grey.svg",
    2: "Img - Low Priority.svg",
    3: "Img - Medium Priority.svg",
    4: "Img - High Priority.svg",
  };

  return (
    <div className="card">
      <div className="card-subheading">
        <div className="gray">{ticket.id}</div>
        {userColumn === undefined && (
          <div className="c-avatar">
            <img
              className="c-avatar__image"
              src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
            ></img>
            <span
              className={`c-avatar__status ${
                getUser(ticket.userId).available ? "available" : ""
              }`}
            ></span>
          </div>
        )}
      </div>

      <h2 className="card-title">
        {statusColumn === undefined && (
          <span className="status-img">
            {<img src={statusImg[ticket.status]} alt="status-img" />}
          </span>
        )}

        {ticket.title}
      </h2>
      <div className="card-footer">
        <div className="option-list">
          {priorityColumn === undefined && (
            <span className="option1">
              <img src={priorityImg[ticket.priority]} alt="status-img" />
            </span>
          )}

          <span className="option2">
            <span className="dot"></span>
            <span>Feature Request</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
