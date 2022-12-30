import "./Header.css"
import Button from "./Button"

function Header({PageDetail}) {
    if(PageDetail === "NumberSpace") {
        const BtnType = ["increaseA", "decreaseA", "increaseB", "decreaseB", "total", "second_project"]
        return <div className="header">
            {BtnType.map((item) => {
            return <Button type={item} />
            })}
        </div>
    } else if (PageDetail === "SecondProject") {
        const Second_BtnType = ["S_increaseA", "S_decreaseA", "S_increaseB", "S_decreaseB", "S_total"]
        return <div className="header">
            {Second_BtnType.map((item) => {
            return <Button type={item} />
            })}
        </div>
    }
}

export default Header;