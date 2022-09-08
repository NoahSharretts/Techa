import './ProfilePage.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser } from '../../store/users'
import { getUserPosts } from '../../store/profilePage'


function ProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.users);
  const posts = useSelector((state) => state.userPosts)

  console.log(user, 'user')

  useEffect( () => {
    dispatch(getOneUser(id))
    dispatch(getUserPosts(id))
  },[ id ]);


  return (
    <div className='profile-page'>
      <div className='profile-page-wrapper'>
        <div className='profile-page-header'>
          <div className='avatar-wrapper'>
            <img src={ user.avatar } />
          </div>
          <div className='username-wrapper'>
            <h2>{ user.username }</h2>
          </div>
          <div className='users-posts-wrapper'>
            {Object.values(posts).map(post =>
              <div key={post.id} className='users-posts'>
                <img id='post-photo' src={post.photo} />
              </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
