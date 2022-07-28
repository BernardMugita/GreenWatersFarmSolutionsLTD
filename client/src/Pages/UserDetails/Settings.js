import React from 'react';
import '../../CSS/UserDetails/settings.css';
import noImage from '../../Resources/noimage.jpg'
import {BiUserCircle} from 'react-icons/bi';
import Subheader from '../../component/Subheader';
import Sidebar from '../../component/Sidebar';

export default function Settings() {
  return (
  <div className='settings'>
      <Subheader/> 
      <div className="boddy">
      <div className="settingsWrapper">
          <div className="settingsTitle">
              <span className="settingsUpdateTitle">Update Your Account</span>
              <span className="settingsDeleteTitle">Delete Account</span>
          </div>
      <form className="settingsForm">
        <label htmlFor="">Profile Picture</label>
        <div className="settingdp">
            <img src={noImage} className="dpimg" />
        <label htmlFor="fileInput">
                <BiUserCircle className='settingsIcon'/>
        </label>
        <input type="file" id='fileInput' style={{display:"none"}}/>
        </div>
        <label>Username</label>
        <input type="text" placeholder='gwfsltd'/>
        <label>Email</label>
        <input type="text" placeholder='gwfsltd@gmail.com'/>
        <label>Password</label>
        <input type="text" placeholder='Password'/>
        <button>Submit</button>
      </form>
      </div>
      <Sidebar/>
      </div>
  </div>
  );
}
