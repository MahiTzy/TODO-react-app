import { library } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Footer from './components/Footer';
import Header from "./components/Header";
import TaskList from "./components/TaskList";

library.add(fas, faTwitter, faFontAwesome)


export function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [TaskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);
  const [editId, setEditId] = useState(0);
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "medium"
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editId) {
      const date = new Date();
      const selectedTask = tasks.find(task => task.id === editId);
      const updateTask = tasks.map((e) => (e.id === selectedTask.id ? ({ ...e, id: e.id, name: TaskValue, completed: Boolean(progress), time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }) : e));
      setTasks(updateTask);
      setEditId(0);
      handleReset();
      return;
    }

    if (TaskValue) {
      const date = new Date();
      const task = {
        id: date.getTime(),
        name: TaskValue,
        completed: Boolean(progress),
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTasks([...tasks, task]);
      handleReset();
    }
  }
  function handleDelete(id) {
    setTasks(tasks.filter((task) => id !== task.id));
  }
  const handleReset = () => {
    setTaskValue("");
    setProgress(false);
  }
  const handleEdit = (id) => {
    const selectedTask = tasks.find(task => task.id === id);
    setTaskValue(selectedTask.name);
    setEditId(id);
  }


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <div className={"App " + theme}>
      <div className="container">
        <Header theme={theme} setTheme={setTheme} />
        <AddTask tasks={tasks} setTasks={setTasks} handleReset={handleReset} taskValue={TaskValue} progress={progress} setTaskValue={setTaskValue} setProgress={setProgress} handleSubmit={handleSubmit} editId={editId} />
        <TaskList tasks={tasks} setTasks={setTasks} editId={editId} handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>
      <Footer />
    </div>
  );
}