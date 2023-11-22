const AddTask = ({
  taskValue,
  progress,
  handleReset,
  tasks,
  setTasks,
  setTaskValue,
  setProgress,
  handleSubmit,
  editId
}) => {
  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTaskValue(e.target.value)}
          type="text"
          name="task"
          id="task"
          placeholder="Task name"
          autoComplete="off"
          maxLength="25"
          required
          value={taskValue}
        />
        <select
          onChange={(event) => setProgress(event.target.value)}
          value={progress}
        >
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>
        <span onClick={handleReset}>Reset</span>
        <button type="submit">{editId?"Update":"Add"}</button>
      </form>
    </section>
  );
};

export default AddTask;
