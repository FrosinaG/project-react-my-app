import React from 'react'
import { NavLink } from 'react-router-dom';
import imglogo from '../img/logo333.png';
const NavHome = () => {
    return (
        <div className='homenav'>
            <div className='logoi'>
                <img src={imglogo} className="imglogo" /></div>
            <ul><li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
            </svg> Home</li>
                <li>News</li>
                <li>About</li>
                <li>Contact</li>
                <li><NavLink to="login">Log in</NavLink></li></ul></div>

    )
}

export default NavHome