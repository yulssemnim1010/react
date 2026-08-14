import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const clickHandler = () => setCount(count=>count+1);
  let name2 = '변우석';
  const age = 20;
  const nameChange = () => {
    name2 ='영희';
    console.log(name2);
  }
  return (
    <div>
      <p>{name2}</p>
      <p>{age}</p>
      <button onClick={nameChange}>이름바꾸기</button>
      <h1>count : {count}</h1>
      <button onClick={clickHandler}>증가</button>
    </div>
  )
}

export default App
