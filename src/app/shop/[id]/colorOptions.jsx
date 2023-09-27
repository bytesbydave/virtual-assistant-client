const ColorOptions = ({ colors, selectedColor, onSelectColor }) => {
  return (
    <div>
      <h2 className='text-lg font-semibold'>Color</h2>
      <div className='flex mt-2 space-x-2'>
        {colors.map((color) => (
          <label key={color} className='flex items-center'>
            <input
              type='radio'
              value={color}
              checked={selectedColor === color}
              onChange={() => onSelectColor(color)}
            />
            {/* when tailwind compiles, it looks up over all of your code and checks if a class name matches. change background using styles instead */}
            <span
              className={`w-6 h-6 rounded-full border border-gray-300`}
              style={{ backgroundColor: `${color}` }}></span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorOptions;
