// pages/api/todos/index.js

let todos = [
  {
    id: 1,
    done: false,
    text: 'complete algorithm challenge and stuff for behavior',
  },
  {
    id: 2,
    done: false,
    text: 'garage is super dirty, please clean it',
  },
  {
    id: 3,
    done: false,
    text: 'do algebra homework for high school class',
  },
]; // This will act as our simple in-memory database

export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(todos);
  } else if (req.method === 'POST') {
    const todo = {
      id: new Date().toISOString(),
      text: req.body.text,
      done: false,
    };
    todos.push(todo);
    res.status(201).json(todo);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
