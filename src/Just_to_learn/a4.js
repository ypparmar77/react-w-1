import React, { useState } from "react";

function List1() {
    
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React" },
    { id: 2, task: "Build a Project" },
    { id: 3, task: "this is a mongo"}
  ]);
  
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    setTodos([...todos, { id: todos.length + 1, task: newTask }]);
    setNewTask("");

};

  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  let office = (e) =>{
     setNewTask(e.target.value)
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => removeTask(todo.id)}>Remove</button>
            {/* Conditional Rendering */}
            {/* {todo.id == 5 ? <button>Edit</button> : 'AddMore'} */}
          </li>
        ))}
      </ul>
 <input type="text" value={newTask} onChange={office} placeholder="New task"/>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default List1;