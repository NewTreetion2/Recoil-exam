import { useRecoilValue } from "recoil"
import { SecondNumberA, SecondNumberB, SecondTotal } from "../atoms"
import "./SecondProject.css"

function SecondProject() {
    const SecondA = useRecoilValue(SecondNumberA)
    const SecondB = useRecoilValue(SecondNumberB)
    const S_Total = useRecoilValue(SecondTotal)

    return(
    <div className='SecondSpace'>
        <div className='Second_NumberSpace'>
            <div>A = {SecondA}</div>
            <div>B = {SecondB}</div>
            <div>Total = {S_Total}</div> 
        </div>
    </div>
    )
}

export default SecondProject