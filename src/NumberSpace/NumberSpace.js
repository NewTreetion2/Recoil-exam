import {  useRecoilValue
  } from 'recoil';
import "./NumberSpace.css"
import { NumberA, NumberB, TotalNumberA, TotalNumberB } from '../atoms';

function NumberSpace() {
  const numA = useRecoilValue(NumberA)
  const numB = useRecoilValue(NumberB)
  const totalA = useRecoilValue(TotalNumberA)
  const totalB = useRecoilValue(TotalNumberB)

  return(
    <div className='numberSpace'>
      <div className='numberA'>
        <div>A = {numA}</div>
        <div>A total = {totalA}</div>
      </div>
      <div className='numberB'>
        <div>B = {numB}</div>
        <div>B total = {totalB}</div>
      </div>
    </div>
  )
}

export default NumberSpace;