import React, { useEffect } from 'react';
import { TodoList } from './components/TodoList';
import { useTodo } from './TodoReducer';
import TodoContext from './TodoContext';
import './App.css';

function App() {
  const [state, dispatch] = useTodo();

  useEffect(() => {
    const data = localStorage.getItem('todos');
    dispatch({ type: 'reset', payload: JSON.parse(data) });
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={dispatch}>
      <div className="app">
        <h1>Moto</h1>
        <TodoList todos={state} />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
