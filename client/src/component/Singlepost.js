import '../CSS/CSScomponent/Singlepost.css';
import noImage from '../Resources/noimage.jpg';
import {FaEdit} from 'react-icons/fa';
import {FaTrashAlt} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import {useLocation} from 'react-router';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Singlepost() {
    const location = useLocation()
    const path = location.pathname.split("/"[2])
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts" + path);
            setPost(res.data);
        };
        getPost()
    }, [path]);
  return (
  <div className='singlepost'>
      <div className="singlepostWrapper">
          {post?.photo && (
              <img src={post?.photo} alt="" className="singlePostImg"/>
          )}
          
          <h1 className="singlePostTitle">
              {post?.title}
          </h1>
          <div className="singlePostIcons">
            <FaEdit className='singlePostEdit'/>
            <FaTrashAlt className='singlePostDelete'/>
          </div>
          <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    <Link to={`/?user=${post?.username}`}>
                        Author: <b>{post?.username}</b>
                    </Link>
                </span>
                <span className="singlePostDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
                <div className="singlePostDesc">
                <p>
                    {post?.desc}
                </p>
                </div>

          </div>
      </div>

  </div>
)};
