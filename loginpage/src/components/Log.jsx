import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Log(props) {
  const navigate = useNavigate(); // 🔥 Initialize router hook
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const inputValue = () => {
    if (
      userDetails.userName == "" ||
      userDetails.password == "" ||
      (props.toggle && userDetails.email == "")
    )
      return window.alert("add userName");
    if (!props.toggle) {
      let includeUser = localStorage.getItem("data");
      if (!includeUser) return window.alert("user nahi hai");
      let data1 = JSON.parse(includeUser);

      for (let i = 0; i < data1.length; i++) {
        if (
          data1[i].userName == userDetails.userName &&
          data1[i].password == userDetails.password
        ) {
          setUserDetails({ ...userDetails, userName: "", password: "" });

           window.alert("loggedIn successfully");

          navigate("/home");
          return
        }
      }

      return window.alert("user doesnt exist");
    }

    const arr = [userDetails];
    const value = localStorage.getItem("data");
    if (!value) {
      localStorage.setItem("data", JSON.stringify(arr));
    } else {
      let parsedValue = JSON.parse(value);
      for (let i = 0; i < parsedValue.length; i++) {
        if (parsedValue[i].userName == userDetails.userName)
          return window.alert("User already exist");
      }

      parsedValue.push(userDetails);
      localStorage.setItem("data", JSON.stringify(parsedValue));
    }

    setUserDetails({ userName: "", password: "", email: "" });
  };

  return (
    <div className="p-4 m-2 border-2 bg-yellow-50 text-2xl text-center flex flex-wrap justify-between">
      <div>
        <label>UserName</label>
        <input
          type="text"
          value={userDetails.userName}
          className="p-4 m-2 border-2 flex flex-wrap"
          onChange={(e) => {
            setUserDetails({ ...userDetails, userName: e.target.value });
          }}
        />
        <label>Password</label>
        <input
          type="password"
          value={userDetails.password}
          className="p-4 m-2 border-2 flex flex-wrap"
          onChange={(e) => {
            setUserDetails({ ...userDetails, password: e.target.value });
          }}
        />
        {props.toggle && (
          <div>
            {" "}
            <label>Email</label>
            <input
              type="text"
              value={userDetails.email}
              className="p-4 m-2 border-2 flex flex-wrap"
              onChange={(e) => {
                setUserDetails({ ...userDetails, email: e.target.value });
              }}
            />
          </div>
        )}
        <button
          className="p-2 m-2 bg-blue-500 cursor-pointer"
          onClick={inputValue}
        >
          {props.toggle ? "SignUp" : "SignIn"}
        </button>
      </div>
    </div>
  );
}

export default Log;
