import { useState } from 'react';
import './App.css';

const App = () => {
  //state variable for display 
  const [display, setDisplay] = useState('0');

  //function to handle button click
  const handleClick = (value) => {
    if (display === '0') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  //function to clear display 
  const clearDisplay = () => {
    setDisplay('0');
  };

  //function to clear one digit from display
  const clearLastDigit = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  //function to calculate result
  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="keys">
        <button onClick={() => clearDisplay()} >C</button>
        <button onClick={() => clearLastDigit()}>CE</button>
        <button onClick={() => handleClick('%')}>%</button>
        <button onClick={() => handleClick('/')} className='vivid-orange'>/</button>


        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')} className='vivid-orange'>X</button>

        
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')} className='vivid-orange'>-</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')} className='vivid-orange'>+</button>
        
        <button onClick={() => handleClick('0')} className="double-button-size">0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => calculateResult()} className=" vivid-orange">=</button>
        
        
      </div>
    </div>
  );
};

export default App;
