import React from 'react';
import { TodoItem } from './TodoItem';
import { AddTodoForm } from './AddTodoForm';

export function TodoList({ todos }) {
  return (
    <div>
      <AddTodoForm />
      {todos.map(item => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
}
