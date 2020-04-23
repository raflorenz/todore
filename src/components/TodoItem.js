import React, { useState, useContext, useRef } from 'react';
import TodoContext from '../TodoContext';

export function TodoItem({ id, title, completed }) {
  const [input, setInput] = useState(title);
  const [editing, setEditing] = useState(false);

  const dispatch = useContext(TodoContext);
  const textInput = useRef(null);

  return (
    <div className={`todo-item${completed ? ' completed' : ''}${editing ? ' editing' : ''}`}>
      <div className="todo-view">
        <input 
          type="checkbox" 
          checked={completed} 
          onChange={() => dispatch({ type: 'complete', payload: id })} 
        />
        <label 
          onDoubleClick={() => {
            setEditing(true);
            setTimeout(() => textInput.current.focus(), 0);
          }}>
          {title}
        </label>
      </div>

      <input 
        type="text" 
        className="edit" 
        value={input} 
        ref={textInput} 
        onChange={e => setInput(e.target.value)} 
        onBlur={() => {
          dispatch({ type: 'update', payload: { id, input } });
          setEditing(false);
        }} 
      />

      <button onClick={() => dispatch({ type: 'delete', payload: id })}>Delete</button>
    </div>
  );
}
