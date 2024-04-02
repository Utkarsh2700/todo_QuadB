// import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <h1 className="bg-gradient-to-br from-cyan-400 to-blue-700 text-center text-3xl font-bold underline my-6">
        Todo App
      </h1>
      <TaskInput />
      <TaskList />
    </>
  );
}

export default App;
