import "./Header.css"
import Button from "./Button"
import { useEffect, useState } from "react"

const btnType = ["increaseA", "decreaseA", "increaseB", "decreaseB", "total", "second_project"]
const secondBtnType = ["S_increaseA", "S_decreaseA", "S_increaseB", "S_decreaseB", "S_total"]

function Header({PageDetail}) {
    const [state, setState] = useState([...btnType]); 
    useEffect(() => {
        if(PageDetail === "NumberSpace") {
        } else if (PageDetail === "SecondProject") {
            setState([...secondBtnType]);
        } //수정할 것 -> 코드 구성
    }, [PageDetail])
    
    return <div className="header">
            {state.map((item, index) => {
            return <Button key={index} title={item} onClickHandler={() => {console.log("확인")}} />
            })}
        </div>
}

export default Header;