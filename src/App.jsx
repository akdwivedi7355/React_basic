import { useState } from 'react';
import './App.css';

function App() {
  let [counter,setcounter] =useState(0)
  const addvalue =()=>{
    counter= counter+1;
    setcounter(counter)
  }
  const decrese=()=>{
    counter=counter-1;
    setcounter(counter)
  }
  const reset=()=>{
    setcounter(0)
  }
  return (
    <div className="App">
      <h1> hello Aditya</h1>
    <h2>add value = {counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={decrese}>decrease value</button>
      <button onClick={reset}>reset value</button>
    </div>
  );
}

export default App;
