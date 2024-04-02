export const addTask = (text) => ({
  type: "ADD_TASK",
  payload: {
    id: Math.floor(Math.random() * 1000000),
    text,
  },
});

export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  payload: id,
});
