import React from "react";
import ToDoList from "./component/Todo/TodoList";
import "./App.css";
import Count from "./component/Oncount/count";
import OnChange from "./component/Bro_code";

function App() {
  return (
    <>
      <Count />
      <ToDoList />
      <OnChange />
    </>
  );
}

export default App;
