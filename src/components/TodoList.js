import React from 'react';
import { TodoItem } from './TodoItem';
import { AddTodoForm } from './AddTodoForm';

export function TodoList({ todos, dispatch }) {
  return (
    <div>
      <AddTodoForm dispatch={dispatch} />
      {todos.map(item => (
        <TodoItem key={item.id} {...item} dispatch={dispatch} />
      ))}
    </div>
  );
}
