import React from 'react'
import { loginReducer } from '../state/reducers/loginReducer'
import Login from './Login'
import Logout from './Logout'
import {  shallowEqual, useSelector } from "react-redux";
import {initionalStore} from"../state/reducers/loginReducer";
import { Navigate, Outlet } from 'react-router-dom';

const Redux = () => {
    const user = useSelector((store) => store.login, shallowEqual);
    console.log(user)
    return  user.value ? <Outlet/>: <Navigate to="/login"/>
  }

export default Redux