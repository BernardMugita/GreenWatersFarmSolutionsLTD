import React from 'react';
import '../../CSS/BlogCSS/Newpost.css';
import Sidebar from '../../component/Sidebar';
import Subheader from '../../component/Subheader';
import {BiImageAdd} from 'react-icons/bi';
import noImage from '../../Resources/noimage.jpg';

function Newpost() {
  return(
  <div className='newpost'>
    <Subheader/>
    <div className="body">
    <div className="post"> 
        <img src={noImage} className="selectimage" />
        <form>
        <div className="postFormGroup">
            <input type="text" className='head' placeholder='Title' autoFocus={true}/>
            <label htmlFor="fileInput">
              <BiImageAdd className='add'/>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
        </div>
        <div className="postFormGroup">
            <textarea className="post-body" placeholder='Create new Blog Post'></textarea>
        </div>
                <button className='Submit'>Publish Post</button>
        </form>
    </div>
            <Sidebar/>
    </div>
</div>
  );
}

export default Newpost;
