import {useEffect, useState} from 'react';
import './App.css';
import InputRow from './Container/InputRow/InputRow';
import TaskBox from './Container/TaskBox/TaskBox';
import {
  addTodo,
  getTodos,
  deleteTodo,
  updateTodoCompletion,
} from './firebase/services/firestore';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todosFromFirestore = await getTodos();
      setTodos(todosFromFirestore);
    };
    fetchTodos();
  }, []);

  const handleAddTodo = async (newTodo) => {
    await addTodo(newTodo);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodoCompletion = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          const newCompletedStatus = !todo.completed;
          updateTodoCompletion(todo.id, newCompletedStatus);
          return {...todo, completed: newCompletedStatus};
        }
        return todo;
      });
      return updatedTodos;
    });
  };

  return (
    <div className='mainContainer'>
      <h1>Mohi's to-do list</h1>
      <InputRow addTodo={handleAddTodo} />
      <TaskBox
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggleCompletion={toggleTodoCompletion}
      />
    </div>
  );
}

export default App;
