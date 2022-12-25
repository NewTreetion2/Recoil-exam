import { useState } from 'react';
import {
    atom, useRecoilState
  } from 'recoil';
import "./NumberSpace.css"

const numberState = atom({
    key: 'numberState',
    default: [],
});

function NumberSpace() {
  const [inputNumber, setInputNumber] = useState('');
  const [NumberList, setNumberList] = useRecoilState(numberState);

  const addNumber = () => {
    setNumberList((oldNumberList) => [
      ...oldNumberList,
      {
        id: getID(),
        number: inputNumber
      },
    ]);
    setInputNumber('');
  };

  const onChange = ({target: {value}}) => {
    setInputNumber(value);
  }

  return(
    <div className='numberSpace'>
      <input type="text" value={inputNumber} onChange={onChange} />
      <button onClick={addNumber}>Add</button>
      <button onClick={console.log({NumberList})}>Show List</button>
    </div>
  );
}

let id = 0;
function getID() {
  return id++;
}

export default NumberSpace;