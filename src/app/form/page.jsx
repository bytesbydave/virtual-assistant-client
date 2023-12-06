'use client';
import { useEffect, useState } from 'react';

const Form = () => {
  const [emailValue, setEmailValue] = useState('');
  const [categoryNameValue, setCategoryNameValue] = useState('');
  const [categoryTypeValue, setCategoryTypeValue] = useState('');
  const [userTypeValue, setUserTypeValue] = useState('');

  const options1 = [
    { name: 'PDF', value: 'pdf' },
    { name: 'Document', value: 'document' },
  ];

  const options2 = [
    { name: 'Boy', value: 'boy' },
    { name: 'Girl', value: 'girl' },
  ];

  return (
    <div>
      <ProgressBar percentage={100} />
      <form>
        <div>
          <label id='categoryName'>Category Name</label>
          <input for='categoryName' value={categoryNameValue} />
        </div>
        <div>
          <label id='email'>Email</label>
          <input for='email' value={emailValue} />
        </div>
        <div>
          <Dropdown
            options={options1}
            value={categoryTypeValue}
            placeholder='Select Category'
            onSelectChange={setCategoryTypeValue}
          />
        </div>
        <div>
          <Dropdown
            options={options2}
            value={userTypeValue}
            placeholder='Select Gender'
            onSelectChange={setUserTypeValue}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;

const Dropdown = ({
  placeholder = 'select',
  options,
  value,
  onSelectChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickSelect = (option) => {
    onSelectChange(option.name);
    setIsOpen(false);
  };

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        {value !== '' ? value : placeholder}
      </div>
      {isOpen &&
        options.map((option, index) => {
          return (
            <div
              key={index}
              value={option.value}
              onClick={() => onClickSelect(option)}>
              {option.name}
            </div>
          );
        })}
    </div>
  );
};
const ProgressBar = ({ percentage }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(percentage);
  }, []);

  return (
    <div>
      <div
        style={{
          width: `${width}%`,
          height: '20px',
          backgroundColor: '#3498db',
        }}></div>
    </div>
  );
};
