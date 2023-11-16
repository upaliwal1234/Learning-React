import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  const addValue = () =>{
    setCounter(counter + 1);
  }

  const removeValue = () =>{
    setCounter(counter - 1);
  }

  return (
    <>
    <img src="./assets/react.svg" alt="" />
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
    </>
  )
}

export default App
