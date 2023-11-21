import React from "react";

export default function TaskCard(props) {
  return (
    <li className={props.task.completed ? "complete" : "incomplete"}>
      <div className="taskInfo">
        <p>{props.task.name}</p>
        <span>{props.task.time}</span>
      </div>
      <div className="icons">
      <i className="bi bi-pencil-square" onClick={() => props.handleEdit(props.task.id)}></i>
      <i className="bi bi-trash" onClick={() => props.handleDelete(props.task.id)}></i></div>
    </li>
  );
}
