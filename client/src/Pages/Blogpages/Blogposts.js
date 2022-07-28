import React from 'react';
import "../../CSS/BlogCSS/Blogposts.css";
import Posts from '../../component/Posts';
import Subheader from '../../component/Subheader';
import Sidebar from '../../component/Sidebar';

function Blogposts({ posts }) {
  return (
  <div>
    <Subheader/>
    <div className="blogpost">
      <div className="posts">
        {posts?.map((p) => (<Posts post={p}/>))}
      </div>

    <Sidebar/>
    </div>
  </div>
  );
}

export default Blogposts;
