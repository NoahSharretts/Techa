import './ProfilePage.css';
import React from 'react';
import { useParams } from 'react-router';
function ProfilePage() {
  const { id } = useParams();

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
