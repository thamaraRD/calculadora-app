import React, { useState } from 'react';

export const Calculator = () => {
  const [number, setNumber] = useState('');
  const [number2, setNumber2] = useState('');
  const [currentOperation, setCurrentOperation] = useState('');
  const [result, setResult] = useState(0);

  const allClear = () => {
    setNumber('');
    setNumber2('');
    setCurrentOperation('');
    setResult('');
  };

  const backSpace = () => {
    setNumber(number.slice(0, -1));
 
  }

  const clickNumber = (value) => {
    if (currentOperation === ''){
      setNumber(number + value);
    }else{
      setNumber2(number2 + value);
    }};
  const clickCurrentOperation = (value) => {
      setCurrentOperation(value);
    };
  const getResult = () => {
    // eslint-disable-next-line default-case
    switch(currentOperation) {
      case '+':
      setResult(Number(number) + Number(number2));
      break;
      case '-':
      setResult(Number(number) - Number(number2));
      break;
      case '*':
      setResult(Number(number) * Number(number2));
      break;
      case '/':
      setResult(Number(number) / Number(number2));
      break;
    }
  }
    return (
      <div className='calculator'>
        <div className='output'>
          <div className='previous-nums'>{currentOperation ? number + currentOperation : ''}</div>
          <div className='current-nums'>{result ? result : (!currentOperation ? number : number2)}</div>
        </div>
        <button onClick={allClear} className='big-btn color'>AC</button>
        <button onClick={backSpace} className='delete'>DEL</button>
        <button onClick={() => {clickCurrentOperation('/')}}>/</button>
        <button onClick={() => {clickNumber(7)}}>7</button>
        <button onClick={() => {clickNumber(8)}}>8</button>
        <button onClick={() => {clickNumber(9)}}>9</button>
        <button onClick={() => {clickCurrentOperation('*')}}>*</button>
        <button onClick={() => {clickNumber(4)}}>4</button>
        <button onClick={() => {clickNumber(5)}}>5</button>
        <button onClick={() => {clickNumber(6)}}>6</button>
        <button onClick={() => {clickCurrentOperation('-')}}>-</button>
        <button onClick={() => {clickNumber(1)}}>1</button>
        <button onClick={() => {clickNumber(2)}}>2</button>
        <button onClick={() => {clickNumber(3)}}>3</button>
        <button onClick={() => {clickCurrentOperation('+')}}>+</button>
        <button onClick={() => {clickNumber('.')}}>.</button>
        <button onClick={() => {clickNumber(0)}}>0</button>
        <button onClick={getResult} className='big-btn color-green'>=</button>
      </div>
    )
  };

