import React from 'react';
import { Link } from "react-router-dom";
import '../CSS/CSScomponent/Navbar.css';
import {BiUserCircle} from 'react-icons/bi';
import { useState } from 'react'

function Navbar() {
  const [show, setShow] = useState(false)
  return (
  <div className='navbar'>
      <div className="leftside">
            <h1>GREENWATERS</h1>
      </div>
      <div className="rightside">
          <Link to ='/'>Home</Link>
          <Link to ='/About'>About</Link>
          <Link to ='/Blog'>Blog</Link>
          <button id="b" onClick={()=>setShow(!show)}><BiUserCircle/></button>
                { 
                show?<div className="drop">
                  <Link id='drop' to='/blog/Login'>Login</Link>
                  <Link id='drop' to='/blog/Signup'>Sign Up</Link>
                </div>:null
                }
      </div> 
  </div>
  );
}

export default Navbar;
