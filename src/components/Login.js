import axios from "axios";
import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../state/action/loginaction";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
  const [name, SetName] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const store = useSelector((store) => store.login, shallowEqual);
  //   console.log("store", store);

  const dispatch = useDispatch();

  const notify = (type, messages) =>
    toast[type](messages, {
      position: "top-right",
      autoClose: 5000,
      hidePRogressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
    });

  const handleSubimt = (e) => {
    e.preventDefault();
    
    dispatch(
      login({
        name: name,
        password: password,
        logined: false,
  })
    );
    console.log("store1", store);
  };
  const apicall = (e) => {
    e.preventDefault();
    axios
      .post("https://dummyjson.com/auth/login ", {
        username: name,
        password: password,
      })
      .then((respones) => {
        console.log(respones.data);
        notify("success", "success");
        navigate("/");
      })
      .catch((error) => {
        notify("error", error.respones.data.messages);
        console.log("error", error);
      });
  };
  return (
    <div className="login">
      <form className="loginForm" onSubmit={apicall}>
      
        <h1>Log in:</h1>
        <label type="name" id="username">
          User name:
        </label>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="inp"
            value={name}
          onChange={(e) => SetName(e.target.value)}
        />
        <label type="password" id="password">
          Password:
        </label>
        <input
          type="password"
          placeholder="password"
          id="pasword"
          className="inp"
            value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="inp-but" onClick={handleSubimt}>
          Log in
        </button>
        <ToastContainer />
      
      </form>
    </div>
  );
};

export default Login;
