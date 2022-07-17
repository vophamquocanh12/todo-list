import React from "react";
import PropTypes from "prop-types";

TodoItem.propTypes = {
  todoProps: PropTypes.object.isRequired,
  markCompleteFunc: PropTypes.func.isRequired,
};

export default function TodoItem(props) {
  const todo = props.todoProps;
  const markComple = props.markCompleteFunc;
  const deleteTodo = props.deleteTodoFunc;

  //style
  const todoItemStyle = {
    background: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: todo.completed ? "line-through" : "none",
  };
  const deleteButtonStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    custom: "pointer",
    float: "right",
  };
  return (
    <p style={todoItemStyle}>
      <input
        type="checkbox"
        onChange={markComple.bind(this, todo.id)}
        checked={todo.completed}
      />
      {todo.title}
      <button style={deleteButtonStyle} onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
    </p>
  );
}
