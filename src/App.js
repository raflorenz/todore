import React, { useReducer, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import './App.css';

function appReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false
        }
      ];
    case 'delete':
      return state.filter(item => item.id !== action.payload);
    case 'complete':
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });
    case 'reset':
      return action.payload;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(appReducer, []);

  useEffect(() => {
    const data = localStorage.getItem('todos');
    dispatch({ type: 'reset', payload: JSON.parse(data) });
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return (
    <div className="App">
      <h1>Moto</h1>
      <TodoList todos={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
