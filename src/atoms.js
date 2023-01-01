import {
    atom, selector  
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

const SecondNumberA = atom({
  key: 'SecondNumberA',
  default: [0]
})

const SecondNumberB = atom({
  key: 'SecondNumberB',
  default: [0]
})

const SecondTotal = atom({
  key: 'SecondTotal',
  default: 0
}) //State는 적을수록 좋다! 최대한 재사용가능하게 (묶을 수 있으면 묶어라)

const numbers = atom({
  key: 'numbers',
  default: { a : 1, b : 2 }
})

const totalCalculator = selector({
  key: 'totalCalculator',
  get: ({get}) => {
      const A = get(NumberA).reduce((acc, cur) => acc+cur, 0);
      const B = get(NumberB).reduce((acc, cur) => acc+cur, 0);
      const total = [];
      total.push(A);
      total.push(B);
      return total;
  },
})

const total = selector({
  key: 'total',
  get: ({get}) => {
      const numberOb = get(numbers);

      return numberOb.a + numberOb.b
  }
})

const numberCalculator = selector({
  key: 'numberCalculator',
  get: () => {
    return 1;
},
  set: ({ set, get }, newValue) => {
    console.log(newValue);
    const {type, value} = newValue;
    const number = get(numbers)
    if(type === 'a') {
      console.log(number);
      set(numbers, {
        ...number,
        [type]: number[type]+value
      })
    }
    // const minutes = Number(newValue) * 60;
    // set(minuteState, minutes);
  },
})

export {NumberA, NumberB, TotalNumber, SecondNumberA, SecondNumberB, SecondTotal, numbers, total, numberCalculator}

// lodash / cloneDeep (리액트에서 오브젝트를 관리하는 방법)