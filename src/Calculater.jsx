import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        const evaluated = eval(input);
        setResult(evaluated.toString());
        //setInput(evaluated.toString()); 
      } catch (error) {
        setResult('Error');
        setInput('');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = ['7','8','9','+','4','5','6','-','1','2','3','*','C','0','=','/'];

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly className="display" />
      <p>Result: {result}</p>
      <div className="buttons">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)} className="button">
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
