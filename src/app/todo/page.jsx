'use client';
import { useState } from 'react';

const Todo = () => {
  const [search, setSearch] = useState('');
  const [itemToAdd, setItemToAdd] = useState('');
  const [list, setList] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    if (itemToAdd) {
      setList([...list, itemToAdd]);
    }
    setItemToAdd('');
  };

  const handleDelete = (item) => {
    setList(list.filter((listItem) => listItem !== item));
  };

  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} />
      {list
        .filter((listItem) => listItem.includes(search))
        .map((itm, idx) => (
          <li key={idx} onClick={() => handleDelete(itm)}>
            {itm}
          </li>
        ))}
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
