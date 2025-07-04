import React from "react";
import { Link, NavLink } from "react-router";
import ProFastLogo from "./ProFastLogo";
import useAuth from "../../hooks/useAuth";

function Navbar() {
  const {user, logout} = useAuth();
 
  const handleLogout = () =>{
    logout().then(() =>{
      console.log("logout successfully");
    }).catch(error =>{
      console.log(error.message);
    })
  }
    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/coverage">Coverage</NavLink></li>
        <li><NavLink to="/about">About us</NavLink></li>
        <li><NavLink to="/parcel">Pricing</NavLink></li>
        {/* <li><NavLink to="/rider">Be a Rider</NavLink></li> */}
        {
          user && <>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          </>
        }
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <ProFastLogo></ProFastLogo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2">
            {
              user ? <button onClick={handleLogout} className="btn bg-white border-black">Logout</button> : <Link to="/login" className="btn bg-white border-black">Sign In</Link>
            }
            <button className="btn bg-lime-200 border-black">Be a Rider</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
