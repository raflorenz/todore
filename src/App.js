import React, { useReducer } from 'react';
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
      <button onClick={() => dispatch({ type: 'add' })}>Add todo</button>
      {state.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

export default App;
