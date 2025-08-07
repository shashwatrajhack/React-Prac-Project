import React, { useState } from "react";
import Log from "./Log";

function Form() {
    const [toggle,setToggle] = useState(false);
  return (
    <div>
    <div className="p-4 m-2 border-2 bg-cyan-300 text-2xl text-center flex flex-wrap justify-between">
      <button className="p-4 m-2 border-2 bg-amber-600 text-2xl text-center cursor-pointer" onClick={()=>{
        setToggle(false)
      }}>
        Signin
      </button>
      <button className="p-4 m-2 border-2 bg-amber-600 text-2xl text-center cursor-pointer"  onClick={()=>{
        setToggle(true)
      }}>
        Signup
      </button>
      <button className="p-4 m-2 border-2 bg-amber-600 text-2xl text-center cursor-pointer" onClick={()=>{
        localStorage.clear()
      }}>
        Clear All
      </button>
      
    </div>
    <Log toggle = {toggle} />

    </div>
  );
}

export default Form;
