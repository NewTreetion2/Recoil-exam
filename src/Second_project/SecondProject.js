import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { numberCalculator, numbers, total } from "../atoms"
import { useState } from "react";
import "./SecondProject.css"

function SecondProject() {
    const [inputText, setInputText] = useState('');
    const [inputNumber, setInputNumber] = useState(0);
    const numberOb = useRecoilValue(numbers);
    const totalValue = useRecoilValue(total);
    const calculatorDispatch = useSetRecoilState(numberCalculator)
    const func = () => {
        calculatorDispatch({
            type: 'a',
            value: -1
        })
    }

    return(
    <div className='SecondSpace'>
        <div className='Second_NumberSpace'>
            <div onClick={func}>A = {numberOb.a}</div>
            <div>B = {numberOb.b}</div>
            <div>Total = {totalValue}</div> 
            <input type="text" value={inputText} onChange={(e) => {
                setInputText(e.target.value)
            }}></input>
            <p>{inputText}</p>
            <input type="number" value={inputNumber} onChange={(e) => {
                setInputNumber(e.target.value)
            }}></input>
            <p>{inputNumber}</p>
        </div>
    </div>
    )
}

export default SecondProject