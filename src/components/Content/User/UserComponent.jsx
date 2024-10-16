import React from "react";
import UserColumn from "./UserColoumn/UserColumn";
import "./UserComponent.css";

function UserComponent({ users, tickets }) {
  return (
    <div>
      <div className="main-container">
        {users?.map((user, key) => {
          return <UserColumn key={key} user={user} tickets={tickets} />;
        })}
      </div>
    </div>
  );
}

export default UserComponent;
