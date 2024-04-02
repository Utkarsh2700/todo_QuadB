const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_TASK") {
    return { ...state, tasks: [...state.tasks, action.payload] };
  } else if (action.type === "DELETE_TASK") {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload),
    };
  } else {
    return state;
  }
};

export default reducer;
