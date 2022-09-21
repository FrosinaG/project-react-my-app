import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../state/action/loginaction";

const Logout = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.login, shallowEqual);
  const navigate = useNavigate();
  const hendlelogout = (e) => {
    dispatch(logout(null));
    e.preventDefault();
    navigate("/login");
    console.log("logout", store);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <div className="logoutbox">
        <button className="logoutbut" onClick={hendlelogout}>
          {" "}
          Log out
        </button>
      </div>
    </div>
  );
};

export default Logout;
