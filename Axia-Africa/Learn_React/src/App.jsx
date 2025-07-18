import React from "react";
import ToDoList from "./component/Todo/TodoList";
import "./App.css";
import Count from "./component/Oncount/count";

function App() {
  return (
    <>
      <Count />
      <ToDoList />
    </>
  );
}

export default App;
