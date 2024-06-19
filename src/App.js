import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="keypad">
        <button onClick={() => handleClick('7')} className="key">7</button>
        <button onClick={() => handleClick('8')} className="key">8</button>
        <button onClick={() => handleClick('9')} className="key">9</button>
        <button onClick={() => handleClick('/')} className="key">&divide;</button>

        <button onClick={() => handleClick('4')} className="key">4</button>
        <button onClick={() => handleClick('5')} className="key">5</button>
        <button onClick={() => handleClick('6')} className="key">6</button>
        <button onClick={() => handleClick('*')} className="key">&times;</button>

        <button onClick={() => handleClick('1')} className="key">1</button>
        <button onClick={() => handleClick('2')} className="key">2</button>
        <button onClick={() => handleClick('3')} className="key">3</button>
        <button onClick={() => handleClick('-')} className="key">-</button>

        <button onClick={clearInput} className="key clear">C</button>

        <button onClick={() => handleClick('0')} className="key">0</button>
        <button onClick={() => handleClick('.')} className="key">.</button>
        <button onClick={() => handleClick('+')} className="key">+</button>

        <button onClick={calculate} className="key equal">=</button>
      </div>
    </div>
  );
}

export default App;
