import React, { useReducer } from 'react';
import { TodoList } from './components/TodoList';
import './App.css';

function appReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          title: 'todo added',
          completed: false
        }
      ]
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(appReducer, []);

  return (
    <div className="App">
      <h1>Moto</h1>
      <TodoList todos={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
