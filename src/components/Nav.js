import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className='manu'>
                <ul>
                    <li ><NavLink to="/" className={(navData) => navData.isActive ? "" : ""}></NavLink></li>
                    <li className='link1'><NavLink to="/products" className={(navData) => navData.isActive ? "active  li-link" : "" }>Products</NavLink></li>
                    <li className='link1'><NavLink to="/carts"className={(navData) => navData.isActive ? "active  li-link" : ""} >Carts </NavLink></li>
                    <li className='link1'><NavLink to="/users" className={(navData) => navData.isActive ? "active  li-link" : ""}>Users</NavLink></li>
                    <li className='link1'><NavLink to="/posts"className={(navData) => navData.isActive ? "active  li-link" : ""}>Posts</NavLink></li>
                </ul>
            </div></>

    )
}

export default Nav