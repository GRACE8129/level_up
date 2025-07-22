import React from "react";
import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a shower",
    "Walk the dog",
  ]);
  // initial state of the Task would be an empty array , then the array would get filled as tasks are added

  const [newTask, setNewTask] = useState(""); //this contains whatever we are adding from the text box, this would be added to out array of Task in the above usestate

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  // this is use to handle every task input on the text box

  const addTask = () => {};
  //this is used to add task on the text box

  const deleteTask = (index) => {};
  // this is used to get the index of the list items we would like to delete

  const moveTaskUp = (index) => {};
  //this is used to identify the index of the items to be moved up

  const moveTaskDown = (index) => {};
  //this is used to identify the index of the items to be moved down
  return (
    <div className="to-do-list">
      <h1>To-Do-list</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-buttton" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button>delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
