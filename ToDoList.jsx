import React, { useState } from 'react';

function ToDoList() {
  const [Tasks, setTasks] = useState([]);
  const [NewTasks, setNewTasks] = useState("");

  function InputHandling(event) {
    setNewTasks(event.target.value);
  }

  function AddTasks() {
    if (NewTasks.trim() !== "") {
      setTasks([...Tasks, NewTasks]);
      setNewTasks("");
    }
  }

  function DeleteTasks(index) {
    const UpdateTasks = Tasks.filter((_, i) => i !== index);
    setTasks(UpdateTasks);
  }

  function MoveTasksUp(index) {
    if (index > 0) {
      const UpdateTasks = [...Tasks];
      [UpdateTasks[index], UpdateTasks[index - 1]] = [UpdateTasks[index - 1], UpdateTasks[index]];
      setTasks(UpdateTasks);
    }
  }

  function MoveTasksDown(index) {
    if (index < Tasks.length - 1) {
      const UpdateTasks = [...Tasks];
      [UpdateTasks[index], UpdateTasks[index + 1]] = [UpdateTasks[index + 1], UpdateTasks[index]];
      setTasks(UpdateTasks);
    }
  }

  return (
    <div className='mainbox'>
      <div >
        <h1 className='.h1'>To-Do-List</h1>
        <input
          type="text"
          value={NewTasks}
          placeholder="Enter tasks here..."
          onChange={InputHandling}
        />
        <button className='task-enter-button' onClick={AddTasks}>Add</button>
      </div>
      <ol>
        {Tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button
              className='task-delete-button'
              onClick={() => DeleteTasks(index)}
            >
              Delete
            </button>
            <button
              className='task-up-button'
              onClick={() => MoveTasksUp(index)}
            >
              Move Up
            </button>
            <button
              className='task-down-button'
              onClick={() => MoveTasksDown(index)}
            >
              Move Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
