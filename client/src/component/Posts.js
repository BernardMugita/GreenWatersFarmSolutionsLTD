import '../CSS/CSScomponent/posts.css';
import { Link } from 'react-router-dom';

function Posts({post}) {
  return (
    <div className='Main-posts'>
        {post?.photo && (
          <img 
          className="postImg" 
          src={post?.photo} 
          alt=""/>
        )}
        <div className="postinfo">
          <div className="user">
            <b>{post?.username}</b>
          </div>
          <div className="postCats">
              {post?.categories.map((c) => (
                <span className='postcat'>{c.name}</span>
              ))}
          </div>
          <Link to={`/post/${post?._id}`} className='link'>
            <span className="posttitle">{post?.title}</span>
          </Link>
          <hr />
          <span className='date'>{new Date(post?.createdAt).toDateString()}</span>
        </div>
        <div className="postbody">
          <p>
              {post?.desc}
          </p>
        </div>
    </div>
    );
}

export default Posts;
