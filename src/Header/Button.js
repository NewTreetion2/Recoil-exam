import { NumberA, NumberB, TotalNumberA, TotalNumberB } from "../atoms";
import { useRecoilState, useSetRecoilState } from "recoil";

function Button({type}) {
    const [numA, setNumA] = useRecoilState(NumberA)
    const [numB, setNumB] = useRecoilState(NumberB)
    const setTotalA = useSetRecoilState(TotalNumberA)
    const setTotalB = useSetRecoilState(TotalNumberB)

    const increaseA = () => {
        setNumA(numA.map((item) => item+1));
    }
    const decreaseA = () => {
        setNumA(numA.map((item) => item-1));
    }
    const increaseB = () => {
        setNumB(numB.map((item) => item+1));
    }
    const decreaseB = () => {
        setNumB(numB.map((item) => item-1));
    }
    const total = () => {
        setTotalA(numA.reduce((acc, current) => acc + current, 0))
        setTotalB(numB.reduce((acc, current) => acc + current, 0))
    }
    switch(type) {
        case "increaseA":
            return <button onClick={increaseA}>A + 1</button>
        case "decreaseA":
            return <button onClick={decreaseA}>A - 1</button>
        case "increaseB":
            return <button onClick={increaseB}>B + 1</button>
        case "decreaseB":
            return <button onClick={decreaseB}>B - 1</button>
        case "total":
            return <button onClick={total}>total</button>
        default: 
    }
}

export default Button;