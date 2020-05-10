import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList({ todos }) {
  return (
    <div className="todo-list">
      {todos && todos.map(item => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
}
