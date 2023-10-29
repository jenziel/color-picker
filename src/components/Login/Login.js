import React from "react";
import './Login.css'
import { useDispatch } from "react-redux";
import { login, logout } from "../../features/user";
// useDispatch is used to modify values of our states
//useSelector is for ACCESSING values of our states
// we want to include a User state, so we need a User reducer

function Login() {
  const dispatch = useDispatch();
  //create a value called dispatch and set it equal to the useDispatch hook

  return (
    <div className="login">
      <button
        onClick={() => {
          dispatch(login({ name: "pedro", age: 20, email: "pedro@gmail.com" }));
          // whenever you pass something here, it should be accessible in user.js
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
