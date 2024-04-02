import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <form
      className="bg-gradient-to-br from-yellow-200 to-orange-500 flex items-center justify-evenly py-2"
      onSubmit={handleAdd}
    >
      <input
        className="rounded-md border-1 border-s-orange-500
      "
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="rounded-md border-1 border-s-gray-700 bg-blue-500 px-2"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
