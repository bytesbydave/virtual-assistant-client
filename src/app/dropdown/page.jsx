'use client';
import { useState, createContext, useCallback } from 'react';

const Dropdown = ({ options, onChange, value, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, []);

  const handleChange = useCallback(
    (item) => {
      const newValue = item.value;
      onChange(newValue);
      setIsOpen(!isOpen);
    },
    [onChange]
  );

  const handleKeyPress = useCallback(
    (e, item) => {
      if (e.key === 'Enter') {
        handleChange(item);
      }
    },
    [handleChange]
  );

  return (
    <div>
      <button onClick={toggleDropdown}>{value || placeholder}</button>
      {isOpen && (
        <ul>
          {options.map((option, index) => {
            return (
              <li
                tabIndex='0'
                key={index}
                onKeyDown={(e) => handleKeyPress(e, option)}
                onClick={() => handleChange(option)}>
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
      <Dropdown
        options={options}
        value={selectedOption}
        onChange={handleSelectionChange}
        placeholder='Select an Option'
      />
    </div>
  );
};

export default ExampleDropdown;
