import { useState } from "react";

const Form = ({ toggle, isSignIn }) => {
  //console.log("toggle", toggle);
  const showButton = toggle;
  const [userName, setUserName] = useState(" ");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    console.log(userName,email,password);
    let obj = {};
    obj.userName = userName;
    obj.email = email;
    obj.password = password;
    let arr = [obj]

  console.log(obj)
  
  localStorage.setItem("data",JSON.stringify(arr));
  let arr1 = JSON.parse(localStorage.getItem("data"));
  arr1.push(obj)
  localStorage.setItem("data",JSON.stringify(arr))
  
  }


  


  return (
    <div className="border-2 p-2 m-1">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
                console.log(userName);
              }}
            />
          </div>
          {showButton && (
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email ID
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={email}
                onChange={(e) => {
                setEmail(e.target.value);
                console.log(email);
              }}
                
              />
            </div>
          )}

          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
             onChange={(e) => {
                setPassword(e.target.value);
                console.log(password);
              }}
            />
          </div>
          <button
            type="button"
            onClick={onSubmit}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
