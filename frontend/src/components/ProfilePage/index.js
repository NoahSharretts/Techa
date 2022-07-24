import './ProfilePage.css';
import React from 'react';
import { useEffect } from 'react';
import { useParams, } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {  getOneUser } from '../../store/users'
import PostModal from '../PostModal';
import Friendship from './Friendship';


function ProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.users);
  
  useEffect(() => {
    dispatch(getOneUser(id))
  }, [dispatch]);
  
  
  
  
  const posts = user.Posts
  console.log(posts, 'posts')

  return (
    <div className='profileContainer'>
      <div className='profileHeader'>
        <div className='profileImg'>
          <img id='profileImg' src={user.avatar}></img>
        </div>
        <div className='profileUsername'>
          <h3>{user.username}</h3>
        </div>
        <div className='followBtn'>
          <Friendship />
        </div>
      </div>
      <br></br>
      <div className='postsContainer'>
        {posts?.map((post) => (
          <div className='profilePost' key={post.id}>
            <img id='postPhoto' src={post.photo}></img>
            <PostModal post={post} />
          </div>
          
          
        ))}
      </div>
    </div>
  )
}

export default ProfilePage;
