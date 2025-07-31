import { useState } from "react";
function App() {

  const [counter,setCounter] = useState(0);

  function add(){
    return setCounter(counter + 1);
  }


  return (
    <>
    <h1>Hello react from vite !!</h1>
    <h2>Counter : {counter}</h2>

    <button onClick={add}>Add</button>
    </>
   
  )
}

export default App
