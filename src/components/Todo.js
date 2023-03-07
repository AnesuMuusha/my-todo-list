import React, { useState } from "react";

const buttonStyle = {
  backgroundColor: "green",
  color: "white",
  border: "none",
  padding: "17.5px",
  cursor: "pointer",
};

const Todo = ({ text, todo, todos, setTodos }) => {
  const [color1, setColor] = useState(false);

  const deleteHandler = () => {
    setTodos(todos.filter((e1) => e1.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      })
    );

    setColor(!color1);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button style={{ ...buttonStyle, backgroundColor: color1 ? "seagreen" : "gray" }} onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
