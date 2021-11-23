import './Post.css'
import { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, deletePost, getPostById } from '../../store/post'
import EditPostModal from '../EditPostModal'
import PostModal from '../PostModal';

function Post({ post }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user)
  

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch])

  const handleDelete = (e) => {
    dispatch(deletePost(e.target.value))
  }

  
  
  
  return (
    <div className='feedContainer'>
      <div className='postContainer' key={post.id}>
        <div className='avatarDiv'>
          <div className='avatarImg'>
            <img id='avatarImg' src={ post?.User?.avatar} />
          </div>
          <Link to={`/users/${post.userId}`}>
            <div id='username'>{ post?.User?.username }</div>
          </Link>
        </div>
        <div className='imgContainer'>
          <img id='postPhoto' src={post.photo}></img>
        </div>
        <div>
          {(post.userId === user.id)? 
            <div>
              <EditPostModal postId={post.id}/>
              <button onClick={handleDelete} value={post.id}>Delete</button>
            </div> : null
          }
          <div className='postDiv'>
            <PostModal post={post} />
          </div>
        </div>
        <div className='descriptionBox'>
          <span id='descUsername'>{ post?.User?.username }</span>{post.body}
        </div>
      </div>
    </div>
  )
}

export default Post;
