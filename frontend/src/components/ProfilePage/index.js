import './ProfilePage.css';
import React from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers } from '../../store/users'

function ProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const users = useSelector((state) => state.users)

  return (
    <div className='profileContainer'>
      <div className='header'>

      </div>
      <div className='postsContainer'>

      </div>
    </div>
  )
}

export default ProfilePage;
