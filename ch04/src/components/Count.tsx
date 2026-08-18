import { useReducer, type Dispatch, type SetStateAction } from "react"
import {counterReducer} from '../reducer/counterReducer';
export default function Count({count,setCount}:{count:number;setCount:Dispatch<SetStateAction<number>>}) {
  const [count, countDipatch] = useReducer(counterReducer, 0);
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={()=>countDipatch({type:'DECREMENT'})}>감소</button>
      <button onClick={()=>countDipatch({type:'INCREMENT'})}>증가</button>
      <button onClick={()=>countDipatch({type:'RESET'})}>리셋</button>
      <button onClick={()=>countDipatch({type:'YUL'})}>율</button>
    </div>
  )
}