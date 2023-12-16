import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import Users from "./Users";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const App = () => {
  const [users, setUsers] = useState([]);
  const [todo, setTodo] = useState([]);
  const [activeUser, setActiveUser] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setUsers(data.data);
      })
      .then((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((data) => {
        setTodo(data.data);
      })
      .then((error) => {
        console.log(error);
      });
  }, []);

  const HeaderComponent = styled("div")(({ theme }) => ({
    padding: "1rem",
    textAlign: "center",
    borderRadius: "0 10px 10px 0",
    top: 0,
    position: "sticky",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
    backgroundColor: "white",
    zIndex: "100",
  }));

  const Instruction = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-30%, -30%)",
    textAlign: "center",
  }));

  return (
    <>
      <HeaderComponent>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Todo List
        </Typography>
      </HeaderComponent>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Users users={users} todo={todo} setActiveUser={setActiveUser} />
          </Grid>
          <Grid item xs={9}>
            {activeUser ? (
              <Todo todo={todo} setTodo={setTodo} activeUser={activeUser} />
            ) : (
              <Instruction>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  Find the To-Do List by Clicking on Users !!
                </Typography>
              </Instruction>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
