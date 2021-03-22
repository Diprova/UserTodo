import React, { useState, useEffect } from "react";
import "./todo.css";

const Todo = ({ todo, setTodo, activeUser }) => {
  const handleClick = (id) => {
    let index = todo.findIndex((ele) => ele.id === id);
    setTodo([
      ...todo.slice(0, index),
      { ...todo[index], completed: true },
      ...todo.slice(index + 1),
    ]);
  };

  return (
    <div className="todo">
      {todo
        .filter((e) => e.userId === activeUser)
        .map((work) => {
          return (
            <div
              key={work.id}
              className={work.completed === true ? "green" : "red"}
              onClick={() => handleClick(work.id)}
            >
              {work.title}
            </div>
          );
        })}
    </div>
  );
};

export default Todo;
