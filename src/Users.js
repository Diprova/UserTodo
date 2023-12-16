import React from "react";
import { styled } from "@mui/system";

const Users = ({ users, setActiveUser }) => {
  const MyThemeComponent = styled("div")(({ theme }) => ({
    color: "white",
    background: "linear-gradient(to right, #ce7e00 0%, #e68107 50%,	#ffd966 100%)",
    padding: "2rem",
    height: "100%",
    cursor: "pointer",
  }));

  const UsersComponent = styled("div")(({ theme }) => ({
    margin: "2rem 0",
  }));

  return (
    <MyThemeComponent>
      {users.map((person) => {
        return (
          <UsersComponent
            key={person.id}
            onClick={() => setActiveUser(person.id)}
          >
            {person.name}
          </UsersComponent>
        );
      })}
    </MyThemeComponent>
  );
};

export default Users;
