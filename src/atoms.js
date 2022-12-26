import {
    atom,  
  } from 'recoil';


const NumberA = atom({
  key: 'numberA',
  default: [1,2,3,4]
});

const NumberB = atom({
key: 'numberB',
default: [5,6,7,8]
})

const TotalNumber = atom({
  key: 'TotalNumberA',
  default: [0,0],
})


export {NumberA, NumberB, TotalNumber}