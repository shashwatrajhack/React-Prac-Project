// src/components/Home.jsx
import { useState } from "react";
function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  
  return (
    <div className="text-center text-3xl p-10">
      🎉 Welcome to Home Page! You are Logged In 🎉
      <div>
        <input
          className="p-4 m-2 border-2 flex flex-wrap"
          type="text"
          value={inputValue}
          onChange={(e) => {
            
            setInputValue(e.target.value);
          }}
        />
      </div>
      <button className="m-2 p-2 bg-blue-600" onClick={() => {

        // for(let i = 0;i<todos.length;i++){
        //   if(todos[i] == inputValue) return window.alert("item already added")
        // }
        if(todos.includes(inputValue)) return window.alert("item already added")
        
        setTodos([...todos,inputValue])
        console.log(todos)

        setInputValue("")
        
      }}>
        {" "}
        Add Todo{" "}
      </button>
      <div>
        <ul>
          {todos.map((x) =><li>{x}</li>)}
        </ul>
      </div>

    </div>
  );
}

export default Home;
