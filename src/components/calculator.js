import '../App.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [currentValue, setCurrentValue] = useState({ total: 0, next: null, operation: null });

  const handleClick = (e) => {
    setCurrentValue((currentValue) => calculate(currentValue, e.target.textContent));
  };

  return (
    <div className="main-conteiner">

      <div className="container">
        <div className="result display">
          {currentValue.total}
          {currentValue.operation}
          {currentValue.next}
        </div>
        <button type="button" onClick={handleClick} className="text-center">AC</button>
        <button type="button" onClick={handleClick} className="text-center">+/-</button>
        <button type="button" onClick={handleClick} className="text-center">%</button>
        <button type="button" onClick={handleClick} className="text-center orange">÷</button>
        <button type="button" onClick={handleClick} className="text-center">7</button>
        <button type="button" onClick={handleClick} className="text-center">8</button>
        <button type="button" onClick={handleClick} className="text-center">9</button>
        <button type="button" onClick={handleClick} className="text-center orange">x</button>
        <button type="button" onClick={handleClick} className="text-center">4</button>
        <button type="button" onClick={handleClick} className="text-center">5</button>
        <button type="button" onClick={handleClick} className="text-center">6</button>
        <button type="button" onClick={handleClick} className="text-center orange">-</button>
        <button type="button" onClick={handleClick} className="text-center">1</button>
        <button type="button" onClick={handleClick} className="text-center">2</button>
        <button type="button" onClick={handleClick} className="text-center">3</button>
        <button type="button" onClick={handleClick} className="text-center orange">+</button>
        <button type="button" onClick={handleClick} className="zero text-center">0</button>
        <button type="button" onClick={handleClick} className="text-center">.</button>
        <button type="button" onClick={handleClick} className="text-center orange">=</button>
      </div>
    </div>

  );
}

export default Calculator;
