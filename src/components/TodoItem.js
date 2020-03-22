import React from 'react';

export function TodoItem({ id, title, completed, dispatch }) {
  return (
    <div>
        <input type="checkbox" id={id} onChange={() => dispatch({ type: 'complete', payload: id })} />
        <label htmlFor={id} style={{ textDecoration: completed ? 'line-through' : '' }}>{title}</label>
        <button onClick={() => dispatch({ type: 'delete', payload: id })}>Delete</button>
    </div>
  );
}
