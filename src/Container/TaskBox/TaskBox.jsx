import React from 'react';
import './TaskBox.css';

function TaskBox({todos, onDelete, onToggleCompletion}) {
  return (
    <div className='taskBoxContainer'>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className='task'>
          <button
            className={`completedBtn ${todo.completed ? 'completedMarker' : ''}`}
            onClick={() => onToggleCompletion(todo.id)}></button>
          <span>{todo.text}</span>
          <button
            className='removeBtn'
            onClick={() => onDelete(todo.id)}></button>
        </div>
      ))}
    </div>
  );
}

export default TaskBox;
