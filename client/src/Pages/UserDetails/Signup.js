import React from 'react';
import '../../CSS/UserDetails/signup.css'
import { useState } from 'react';
import axios from 'axios'

export default function Signup() {
  const [username, setUsername] = useState("");
;  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try{
    const res = await axios.post("/auth/signup", {
      username,
      email,
      password,
    });
    res.data && window.location.replace("/blog/Login");
  } catch (err) {
    setError(true);
  }

  };

  return (
  <div>
      <div className="signup"> 
      <div className="signupbody">    
      <form action="" className="signupform" onSubmit={handleSubmit}>
          <label>Username</label>
          <input 
            type="text" 
            placeholder='Enter your Username'
            onChange={(e)=>setUsername(e.target.value)}
          />
          <label>Email</label>
          <input 
            type="text" 
            placeholder='Enter your email'
            onChange={(e)=>setEmail(e.target.value)}  
          />
          <label>Password</label>
          <input 
            type="password" 
            placeholder='Enter your password'
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button type='submit' className='signupButton'>Sign Up</button>
         {error && <span className='error'>Something went Wrong</span>}
      </form>
    </div>
    </div>
    </div>
  );
}
