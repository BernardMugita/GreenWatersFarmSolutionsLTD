import '../../CSS/Main/blog.css';
import Subheader from '../../component/Subheader';
import Posts from '../../component/Posts';
import Sidebar from '../../component/Sidebar';
import Banner from '../../component/Banner';
import axios from "axios";
import { useState, useEffect } from 'react';
import {useLocation} from 'react-router';

function Blog() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data)
    }
    fetchPosts()
  },[search])
  return (
    <div>
      <Subheader/>
      <div className="container-fluid">
      <Banner/>
      <div className='blog'>
        <div className="posts">
          <h1>Blog Posts</h1>
            <Posts posts={posts}/>
        </div>
        <Sidebar className="side"/>
        
        
        </div>
      </div>
    </div>
  );
}

export default Blog;
