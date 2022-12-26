import { NumberA, NumberB, TotalNumber } from "../atoms";
import { selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const totalCalculator = selector({
    key: 'totalCalculator',
    get: ({get}) => {
        const A = get(NumberA);
        const B = get(NumberB);
        const total = [];
        const tempA = A.reduce((acc, cur) => acc+cur, 0);
        const tempB = B.reduce((acc, cur) => acc+cur, 0);
        total.push(tempA);
        total.push(tempB);
        // const totalA = A.reduce((acc, current) => acc + current, 0);
        // const B = get(NumberB);
        // const totalB = B.reduce((acc, current) => acc + current, 0);

        return total;
    },
})

function Button({type}) {
    const [numA, setNumA] = useRecoilState(NumberA)
    const [numB, setNumB] = useRecoilState(NumberB)
    const setTotal = useSetRecoilState(TotalNumber)
    const totalTemp = useRecoilValue(totalCalculator);

    const IncreaseA = () => {
        setNumA(numA.map((item) => item+1));
    }
    const DecreaseA = () => {
        setNumA(numA.map((item) => item-1));
    }
    const IncreaseB = () => {
        setNumB(numB.map((item) => item+1));
    }
    const DecreaseB = () => {
        setNumB(numB.map((item) => item-1));
    }
    const Total = () => {
        setTotal(totalTemp);
        // setTotalA(newTotal[0]);
        // setTotalB(newTotal[1]);
        // setTotalA(numA.reduce((acc, current) => acc + current, 0))
        // setTotalB(numB.reduce((acc, current) => acc + current, 0))
    }
    switch(type) {
        case "increaseA":
            return <button onClick={IncreaseA}>A + 1</button>
        case "decreaseA":
            return <button onClick={DecreaseA}>A - 1</button>
        case "increaseB":
            return <button onClick={IncreaseB}>B + 1</button>
        case "decreaseB":
            return <button onClick={DecreaseB}>B - 1</button>
        case "total":
            return <button onClick={Total}>total</button>
        default: 
    }
}

export default Button;