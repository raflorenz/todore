import React, { useContext } from 'react';
import TodoContext from '../TodoContext';

export function TodoItem({ id, title, completed }) {
  const dispatch = useContext(TodoContext);

  return (
    <div class="todo-item">
        <div>
          <input type="checkbox" id={id} checked={completed} onChange={() => dispatch({ type: 'complete', payload: id })} />
          <label htmlFor={id} style={{ textDecoration: completed ? 'line-through' : '' }}>{title}</label>
        </div>
        <div class="todo-buttons">
          <button>Update</button>
          <button onClick={() => dispatch({ type: 'delete', payload: id })}>Delete</button>
        </div>
    </div>
  );
}
