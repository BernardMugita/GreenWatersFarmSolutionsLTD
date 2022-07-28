import React from 'react';
import '../CSS/CSScomponent/subheader.css';
import {Link} from 'react-router-dom';
import {TiHome} from 'react-icons/ti';
import {GrUserSettings} from 'react-icons/gr';
import { BiExit } from 'react-icons/bi';
import { useContext } from 'react';
import {context} from '../context/context';



function Subheader() {
  const {user, dispatch} = useContext(context);
  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  }
  return(
  <div className='subheader'>
      <div className="sublinks">
          <div className="links">
                <Link id="a" to="/Blog"><TiHome/></Link>
                <Link id="a" to="/Categories">Categories</Link>
                <Link id="a" to="/blog/Blogposts">Blog Posts</Link>
                <Link id="a" to="/blog/Newpost">New Post</Link>
                <Link id="a" to='/blog/settings'><GrUserSettings/></Link>
                <Link id="a" to="" onClick={handleLogout}><BiExit/>{user && "LOGOUT"}</Link>
          </div>

          <div className="subdp">
              <img src={user?.profilePic} className="dpimg" />
                <input type="file" id='fileInput' style={{display:"none"}}/>
        
          </div>
          
      </div>
  </div>
  );
}

export default Subheader;
