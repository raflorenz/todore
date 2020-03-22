import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList({ todos, dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: 'add' })}>Add todo</button>
      {todos.map(item => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
}