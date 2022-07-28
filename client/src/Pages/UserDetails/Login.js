import { useRef, useContext } from 'react';
import '../../CSS/UserDetails/login.css';
import { context } from '../../context/context';
import axios from 'axios';

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"});
    }
  };

  return (
  <div>
      <div className="login">  
      <div className="loginbody">    
      <form action="" className="loginform" onSubmit={handleSubmit}>
          <label>Username</label>
          <input 
            type="text" 
            placeholder='Enter your username'
            ref={userRef}
          />
          <label>Password</label>
          <input 
            type="password" 
            placeholder='Enter your password'
            ref={passwordRef}  
          />
          <button className='loginButton'>Login</button>
      </form>
            <button type='submit' className='signupButton' disabled={isFetching}>Sign Up</button>
        </div>
        
    </div> 
  </div>
  );
}
