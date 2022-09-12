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

  console.log(post, 'post')


  return (
    <div className='post'>
      <div className='post-header'>
        <div className='avatar-wrapper'>
          <img id='avatarImg' src={ post?.User?.avatar} />
        </div>
        <Link className='username-link' to={`/users/${post.userId}`}>
          { post?.User?.username }
        </Link>
      </div>
      <div className='post-modal-wrapper'>
        <PostModal post={post} />
      </div>
      <div className='description-wrapper'>
        <p className='likes-count'>
          { post?.Likes?.length } {post?.Likes?.length === 1 ? 'like' : 'likes'}
        </p>
        <Link className='username-link' to={`/users/${post.userId}`}>
            { post?.User?.username }
        </Link>
        <span id='description'>{ post.body }</span>
      </div>
    </div>
  )
}

export default Post;
