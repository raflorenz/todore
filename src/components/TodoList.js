import React from 'react';
import { TodoItem } from './TodoItem';
import { AddTodoForm } from './AddTodoForm';

export function TodoList({ todos }) {
  return (
    <div class="todo-list">
      <AddTodoForm />
      {todos.map(item => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
}
