import React, { useState } from 'react';

const ErosionDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Very Slight', 'Slight', 'Mod', 'Sev', 'V. Sev']; // Replace with your options

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="xl:w-64 lg:w-48 md:w-36 w-24 relative">
      <select
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleSelect}
        value={selectedOption}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default ErosionDropdown;
