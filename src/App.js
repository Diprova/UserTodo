import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import Users from "./Users";
import axios from "axios";
import "./App.css";

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

  return (
    <div className="components">
      <Users users={users} todo={todo} setActiveUser={setActiveUser} />
      <Todo todo={todo} setTodo={setTodo}  activeUser={activeUser}/>
    </div>
  );
};

export default App;
