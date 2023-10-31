'use client';
import { useState, useEffect } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemToAdd, setItemToAdd] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/todo2', {
          method: 'GET',
          // headers: {
          //   Authorization:
          //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY',
          //   'Content-Type': 'application/json',
          // },
        });
        const data = await response.json();
        setTodos([...data]);
      } catch {
      } finally {
      }
    };
    fetchTodos();
  }, []);

  const handleDelete = (item) => {
    setTodos(todos.filter((todoItem) => todoItem !== item));
  };

  const markAsDone = (item) => {
    const updatedTodos = todos.map((todoItem) => {
      if (todoItem.id === item.id) {
        return {
          ...todoItem,
          done: true,
        };
      }
      return todoItem;
    });
    setTodos(updatedTodos);
  };

  const sortTodos = () => {
    const sorted = [...todos].sort((a, b) => a.text.localeCompare(b.text));
    setTodos(sorted);
  };

  const addItem = (e) => {
    e.preventDefault();
    if (itemToAdd) {
      const newItem = {
        text: itemToAdd,
        id: Math.random(),
        done: false,
      };
      setTodos([...todos, newItem]);
    }
    setItemToAdd('');
  };

  return (
    <div>
      <input onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={sortTodos}>Sort Alphabetically</button>
      {todos
        .filter((item) => item.text.includes(searchTerm))
        .map((item, index) => {
          return (
            <div key={index}>
              <p>{item.text}</p>
              {item.done ? <p>Done</p> : <p>Not Done</p>}
              <button onClick={() => markAsDone(item)}>Mark as Done</button>
              <button onClick={() => handleDelete(item)}>Delete</button>
            </div>
          );
        })}
      <form onSubmit={(e) => addItem(e)}>
        <input
          onChange={(e) => setItemToAdd(e.target.value)}
          value={itemToAdd}
        />
      </form>
    </div>
  );
};

export default Todo;
