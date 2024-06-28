import React, { useState } from "react";

function TaskManager() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleTaskInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim()) {
      setTaskList([...taskList, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  }

  return (
    <div className="container mt-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={newTask}
          onChange={handleTaskInputChange}
          placeholder="Enter a new task"
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>
      <ul className="list-group">
        {taskList.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {index + 1}. {task}
            <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
