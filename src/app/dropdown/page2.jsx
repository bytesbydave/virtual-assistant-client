'use client';
import { useState, createContext, useContext } from 'react';

const DropdownContext = createContext({});

const Dropdown = ({ options, placeholder }) => {
  const { selectedOption, setSelectedOption } = useContext(DropdownContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (item) => {
    const newValue = item.value;
    setSelectedOption(newValue);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>{selectedOption || placeholder}</button>
      {isOpen && (
        <ul>
          {options.map((option, index) => {
            return (
              <li key={index} onClick={() => handleChange(option)}>
                {option.value}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const ExampleDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleSelectionChange = (newValue) => {
    setSelectedOption(newValue);
  };
  console.log('hello', selectedOption);

  return (
    <div>
      <DropdownContext.Provider value={{ selectedOption, setSelectedOption }}>
        <Dropdown
          options={options}
          value={selectedOption}
          onChange={handleSelectionChange}
          placeholder='Select an Option'
        />
      </DropdownContext.Provider>
    </div>
  );
};

export default ExampleDropdown;
