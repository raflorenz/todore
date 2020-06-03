import React, { useReducer, useEffect } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList';
import TodoInfo from './components/TodoInfo';
import TodoReducer from './TodoReducer';
import TodoContext from './TodoContext';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(TodoReducer, []);

  useEffect(() => {
    const todos = localStorage.getItem('todos') || "[]";
    dispatch({ type: 'reset', payload: JSON.parse(todos) });
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={dispatch}>
      <div className="app">
        <h1>Todore</h1>
        <AddTodoForm />
        <TodoList todos={state} />
        <TodoInfo />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
