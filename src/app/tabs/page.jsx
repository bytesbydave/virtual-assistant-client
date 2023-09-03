'use client';

import './tabs.css';
import { useState } from 'react';

const tabs = [
  {
    label: 'Tab 1',
    content: 'Content for Tab 1',
  },
  {
    label: 'Tab 2',
    content: 'Content for Tab 2',
  },
];

const Tabs = () => {
  const [newTabInput, setNewTabInput] = useState('');
  const [tabs, setTabs] = useState([
    {
      label: 'Tab 1',
      content: 'Content for Tab 1',
    },
    {
      label: 'Tab 2',
      content: 'Content for Tab 2',
    },
  ]);
  const [activeTab, setActiveTab] = useState(0);

  const onTabClick = (index) => {
    setActiveTab(index);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (newTabInput) {
      const newInput = { label: newTabInput, content: '' };
      setTabs([...tabs, newInput]);
    }
    setNewTabInput('');
  };

  return (
    <div>
      {tabs.map((tab, index) => {
        return (
          <div
            key={index}
            className={activeTab === index ? 'tab' : ''}
            onClick={() => onTabClick(index)}>
            {tab.label}
          </div>
        );
      })}
      <form onSubmit={(e) => onFormSubmit(e)}>
        <input
          value={newTabInput}
          onChange={(e) => setNewTabInput(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Tabs;

// Create an array that will represent tabs
// Loop through Array of tabs until the correct tab is revealed
