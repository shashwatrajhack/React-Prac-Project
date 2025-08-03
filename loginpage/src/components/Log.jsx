import Form from "./Form";
import { useState } from "react";
const Log = () => {
  const [toggle, settoggle] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const handleSingin = () => {
    settoggle(false);
    setIsSignIn(false);
  };
  const handleSingUp = () => {
    settoggle(true);
    setIsSignIn(true);
  };
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-1/2 p-4 bg-red-200">
          <button
            className="w-full bg-red-500 text-white py-2 px-4 rounded"
            onClick={handleSingin}
          >
            SignIn
          </button>
        </div>
        <div className="w-1/2 p-4 bg-green-200">
          <button
            className="w-full bg-red-500 text-white py-2 px-4 rounded"
            onClick={handleSingUp}
          >
            SignUp
          </button>
        </div>
        <div className="w-1/4 p-4 bg-blue-200">
          <button className="w-full bg-red-500 text-white py-2 px-4 rounded">
            Clear All
          </button>
        </div>
      </div>
      <Form toggle={toggle} isSignIn={isSignIn} />
    </div>
  );
};

export default Log;
