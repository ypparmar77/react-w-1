import React, { useState } from 'react';

function Todo() {
    const [todos, setTodos] = useState([
        { id: 1, task: 'Learn React' },
        { id: 2, task: 'Build a Project' },
        { id: 3, task: 'apple a Project' },

    ]);

    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        setTodos([...todos, { id: todos.length + 1, task: newTask }]);
        setNewTask('')
    };

    const removeTask = (id) => {
        setTodos(todos.filter(todo => todo.id != id));

    };

    edit = () =>{
        setNewTask('')


    }

   let  Abc = (e) => {
         setNewTask(e.target.value)
    }

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}> {todo.task} 
                    <button onClick={() => removeTask(todo.id)}>Remove</button>
                    <button onClick={() => edit()}>edit</button>
                        {/* Conditional Rendering */}
                        {/* {todo.id == 5 ? <button>Edit</button> : 'AddMore'} */}</li>
                ))}
            </ul>
 <input type="text" value={newTask} onChange={Abc} placeholder="New task"/>
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}

export default Todo;