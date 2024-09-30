import React, { useState } from 'react';

const Calculator = ({ onSecretCodeEntered }) => {
  const [display, setDisplay] = useState('');
  const [lastResult, setLastResult] = useState(null);

  const handleButtonClick = (value) => {
    // Append the clicked value to the display
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleClear = () => {
    // Reset the display and result
    setDisplay('');
    setLastResult(null);
  };

  const handleEqualClick = () => {
    if (display === '1234') {
      // Trigger secret code functionality
      onSecretCodeEntered();
    } else {
      try {
        // Evaluate the expression and show the result
        const result = eval(display); // Simple evaluation for arithmetic operations
        setDisplay(result.toString());
        setLastResult(result); // Store the result
      } catch (error) {
        setDisplay('Error'); // In case of invalid expression
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-right p-3 text-2xl bg-gray-100 rounded-md mb-4">
        {display || lastResult || '0'}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {['7', '8', '9', '/'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="bg-gray-300 p-4 rounded-md text-xl shadow-sm hover:bg-gray-400 transition"
          >
            {value}
          </button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="bg-gray-300 p-4 rounded-md text-xl shadow-sm hover:bg-gray-400 transition"
          >
            {value}
          </button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="bg-gray-300 p-4 rounded-md text-xl shadow-sm hover:bg-gray-400 transition"
          >
            {value}
          </button>
        ))}
        <button
          onClick={handleClear}
          className="bg-red-400 p-4 rounded-md text-xl shadow-sm hover:bg-red-500 transition"
        >
          C
        </button>
        <button
          onClick={() => handleButtonClick('0')}
          className="bg-gray-300 p-4 rounded-md text-xl shadow-sm hover:bg-gray-400 transition"
        >
          0
        </button>
        <button
          onClick={handleEqualClick}
          className="bg-green-400 p-4 rounded-md text-xl shadow-sm hover:bg-green-500 transition"
        >
          =
        </button>
        <button
          onClick={() => handleButtonClick('+')}
          className="bg-gray-300 p-4 rounded-md text-xl shadow-sm hover:bg-gray-400 transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Calculator;
