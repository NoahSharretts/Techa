import './Post.css'
import { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, deletePost, getPostById } from '../../store/post'
import PostModal from '../PostModal';

function Post({ post }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user)





  return (
    <div className='post'>
      <div className='post-header'>
        <div className='avatar-wrapper'>
          <img id='avatarImg' src={ post?.User?.avatar} />
        </div>
        <Link to={`/users/${post.userId}`}>
          <div id='username'>{ post?.User?.username }</div>
        </Link>
      </div>
      <div className='postDiv'>
        <PostModal post={post} />
      </div>
      <div className='descriptionBox'>
        <span id='descUsername'>{ post?.User?.username }</span>{post.body}
      </div>
    </div>
  )
}

export default Post;
