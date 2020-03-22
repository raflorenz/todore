import React from 'react';

export function TodoItem({ id, title, completed }) {
  return (
    <div>
        <input type="checkbox" id={id} onChange={() => console.log('checkbox changed')} />
        <label htmlFor={id}>{title}</label>
        <button onClick={() => console.log('button clicked')}>Delete</button>
    </div>
  );
}
