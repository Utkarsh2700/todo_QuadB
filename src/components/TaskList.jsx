import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/actions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <ul className="bg-gradient-to-br from-cyan-400 to-blue-700 list-none flex flex-col justify-evenly">
      {tasks.map((task) => (
        <li
          className=" flex items-center justify-between mx-2 my-4"
          key={task.id}
        >
          {task.text}
          <button
            className="float-start bg-red-600 text-white rounded ml-40 p-1"
            onClick={() => handleDeleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
