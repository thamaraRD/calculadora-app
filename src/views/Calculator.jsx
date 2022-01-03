import React, { useState } from 'react';

export const Calculator = () => {
  // const [number, setNumber] = useState('');
  // const [number2, setNumber2] = useState('');
  // const [operation, setOperation] = useState('');
  return (
    <div className='calculator'>
      <div className='output'>
        <div className='previous-nums'>dkdjd</div>
        <div className='current-nums'>456</div>
      </div>
      <button className='big-btn color'>AC</button>
      <button className='delete'>DEL</button>
      <button>/</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>.</button>
      <button>0</button>
      <button className='big-btn color-green'>=</button>
    </div>
  )
};
