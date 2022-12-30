import { NumberA, NumberB, SecondNumberA, SecondNumberB, TotalNumber, SecondTotal } from "../atoms";
import { selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import "./Button.css"
import { Link } from "react-router-dom";

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

const Second_Calculator = selector({
    key: 'Second_Calculator',
    get: ({get}) => {
        const A = get(SecondNumberA);
        const B = get(SecondNumberB);
        return A[0] + B[0]
    }
})

function Button({type}) {
    const [numA, setNumA] = useRecoilState(NumberA)
    const [numB, setNumB] = useRecoilState(NumberB)
    const setTotal = useSetRecoilState(TotalNumber)
    const totalTemp = useRecoilValue(totalCalculator)
    const [SecondA, setSecondA] = useRecoilState(SecondNumberA)
    const [SecondB, setSecondB] = useRecoilState(SecondNumberB)
    const SecondTotalTemp = useRecoilValue(Second_Calculator)
    const setSecondTotal = useSetRecoilState(SecondTotal)

    const Increase = (func, arr) => {
        func(arr.map((item) => item+1));
    }
    const Decrease = (func, arr) => {
        func(arr.map((item) => item-1));
    }
    const Total = (func, arr) => {
        func(arr);
    }

    switch(type) {
        case "increaseA":
            return <button onClick={() => {Increase(setNumA, numA)}}>A + 1</button>
        case "decreaseA":
            return <button onClick={() => {Decrease(setNumA, numA)}}>A - 1</button>
        case "increaseB":
            return <button onClick={() => {Increase(setNumB, numB)}}>B + 1</button>
        case "decreaseB":
            return <button onClick={() => {Decrease(setNumB, numB)}}>B - 1</button>
        case "total":
            return <button onClick={() => {Total(setTotal, totalTemp)}}>Total</button>
        case "second_project":
            return <Link to={"/second_project"}><button>Second_Project</button></Link>
        case "S_increaseA":
            return <button onClick={() => {Increase(setSecondA, SecondA)}}>A + 1</button>
        case "S_decreaseA":
            return <button onClick={() => {Decrease(setSecondA, SecondA)}}>A - 1</button>
        case "S_increaseB":
            return <button onClick={() => {Increase(setSecondB, SecondB)}}>B + 1</button>
        case "S_decreaseB":
            return <button onClick={() => {Decrease(setSecondB, SecondB)}}>B - 1</button>
        case "S_total":
            return <button onClick={() => {Total(setSecondTotal, SecondTotalTemp)}}>Total</button>
        default: 
    }
}

export default Button;