import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks, setTasks, handleDelete,editId,handleEdit }) {
  const [show, setShow] = useState(true);
  return (
    <section className="main">
      <div className="head">
        <div className="headInfo">
          <h1>TODO</h1>
          <span className="count">{tasks.length}</span>
        </div>
        <div className="fas">
        <FontAwesomeIcon className="fasIcon" icon="fa-solid fa-ban" onClick={() => setTasks([])}>
          Clear All
        </FontAwesomeIcon>
        <FontAwesomeIcon className="fasIcon"
          icon={show ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
          onClick={() => setShow(!show)}
        ></FontAwesomeIcon>
        </div>
      </div>
      <hr />
      <div className="content">
        <ul>
          {show &&
            tasks.map((task) => (
              <TaskCard key={task.id} task={task} handleDelete={handleDelete} editId={editId} handleEdit={handleEdit} />
            ))}
        </ul>
        {/* <BoxCard>
        <p>Hi My name is Ckki.</p>
      </BoxCard>
      <BoxCard>
        <p>Hi My name is Ckki.</p>
      </BoxCard>
      <BoxCard>
        <p>Hi My name is Ckki.</p>
      </BoxCard>
      <BoxCard>
        <p>Hi My name is Ckki.</p>
      </BoxCard> */}
      </div>
    </section>
  );
}
