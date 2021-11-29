import './ProfilePage.css';
import React from 'react';
import { useEffect } from 'react';
import { useParams, } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers, getUserPosts } from '../../store/users'


function ProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  
  
  
  // Get postid


  useEffect(() => {
    dispatch(getUserPosts(id))
  }, [dispatch]);


  return (
    <div className='profileContainer'>
      <div className='header'>
        <h2>Profile Page</h2>
        {Object.values(users).map(post => 
          <div>
            <img src={post.photo} />
          </div>
          )}
      </div>
      <div className='postsContainer'>

      </div>
    </div>
  )
}

export default ProfilePage;
