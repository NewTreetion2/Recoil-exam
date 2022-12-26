import {  useRecoilValue
  } from 'recoil';
import "./NumberSpace.css"
import { NumberA, NumberB, TotalNumber } from '../atoms';

function NumberSpace() {
  const numA = useRecoilValue(NumberA)
  const numB = useRecoilValue(NumberB)
  const total = useRecoilValue(TotalNumber)


  return(
    <div className='numberSpace'>
      <div className='numberA'>
        <div>A = {numA}</div>
        <div>A total = {total[0]}</div>
      </div>
      <div className='numberB'>
        <div>B = {numB}</div>
        <div>B total = {total[1]}</div>
      </div>
    </div>
  )
}

export default NumberSpace;