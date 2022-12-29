import "./Header.css"
import Button from "./Button"

function Header() {
    const BtnType = ["increaseA", "decreaseA", "increaseB", "decreaseB", "total", "second_project"]
    return <div className="header">
        {BtnType.map((item) => {
           return <Button type={item} />
        })}
    </div>
}

export default Header;