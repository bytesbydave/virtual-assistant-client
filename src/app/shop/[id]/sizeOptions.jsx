import React from 'react';

const SizeOptions = ({ sizes, selectedSize, onSelectSize }) => {
  return (
    <div>
      <h2 className='text-lg font-semibold'>Size</h2>
      <div className='flex mt-2 space-x-2'>
        {sizes.map((size) => (
          <button
            key={size}
            className={`px-3 py-2 border rounded-lg ${
              selectedSize === size
                ? 'bg-blue-500 text-white'
                : 'border-gray-300'
            }`}
            onClick={() => onSelectSize(size)}>
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeOptions;
