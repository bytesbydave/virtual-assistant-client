// pages/api/todos/[id].js

import { todos } from '.';

export default (req, res) => {
  const { id } = req.query;

  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return res.status(404).end();
  }

  if (req.method === 'PUT') {
    const updatedTodo = {
      ...todos[todoIndex],
      ...req.body,
    };
    todos[todoIndex] = updatedTodo;
    res.status(200).json(updatedTodo);
  } else if (req.method === 'DELETE') {
    todos.splice(todoIndex, 1);
    res.status(204).end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
