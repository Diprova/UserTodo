import React, { useState, useEffect } from "react";
import "./users.css";

const Users = ({ users, setActiveUser }) => {

  return (
    <div className="users">
      {users.map((person) => {
        return (
          <div key={person.id} onClick={() => setActiveUser(person.id)}>
            {person.name}
          </div>
        );
      })}
    </div>
  );
};

export default Users;
