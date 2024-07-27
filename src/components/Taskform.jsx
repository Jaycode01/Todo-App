import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const Taskform = ({ setTasks }) => {
  // const [Task, setTask] = useState("");
  // const [Status, setStatus] = useState("todo");

  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // };

  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };

  const [taskData, setTaskData] = useState({
    task: " ",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTag = taskData.tag.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTag };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });

    setTaskData({
      task: " ",
      status: "todo",
      tags: [],
    });
  };

  return (
    // <header className="app_header">
    //   <form action="" onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       name="task"
    //       value={taskData.task}
    //       className="task_input"
    //       placeholder="Enter your task"
    //       onChange={handleChange}
    //     />
    //     <select
    //       name="status"
    //       value={taskData.status}
    //       className="task_status"
    //       onChange={handleChange}
    //     >
    //       <option value="todo">Todo</option>
    //       <option value="doing">Doing</option>
    //       <option value="done">Done</option>
    //     </select>
    //     <button type="submit" className="task_submit">
    //       +Add Task
    //     </button>
    //   </form>
    // </header>

    <header className="app_header">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />

        <select
          name="status"
          id=""
          value={taskData.status}
          className="task_status"
          onChange={handleChange}
        >
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>

        <button type="submit" className="task_submit">
          + Add Task
        </button>
      </form>
    </header>
  );
};

export default Taskform;
