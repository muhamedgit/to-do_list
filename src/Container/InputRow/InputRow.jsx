import React from 'react';
import {useState} from 'react';
import './InputRow.css';

const InputRow = ({addTodo}) => {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTodo = {text: inputValue, completed: false};
      addTodo(newTodo);
      setInputValue('');
    }
  }

  return (
    <div className='inputRowContainer'>
      <input
        type='text'
        placeholder='Input your task name here'
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add task</button>
    </div>
  );
};

export default InputRow;
