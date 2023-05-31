import React, { useState } from 'react';

const RangeSlider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex items-center space-x-4">
      <span>0</span>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="w-64 h-1 rounded-full appearance-none bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span>100</span>
    </div>
  );
};

export default RangeSlider;
