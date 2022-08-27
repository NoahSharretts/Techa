import './ProfilePage.css';
import React from 'react';
import { useEffect } from 'react';
import { useParams, } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers, getOneUser } from '../../store/users'


function ProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const posts = useSelector((state) => state.users);

  console.log(posts, 'here')

  useEffect(() => {
    dispatch(getOneUser(id))
  }, [dispatch]);


  return (
    <div className='profileContainer'>
      <div className='header'>
        <h2>Profile Page</h2>
        <div className='userPostWrapper'>
          {Object.values(posts).map(post =>
            <div key={post.id} className='usersPost'>
              <img id='postPhoto' src={post.photo} />
            </div>
            )}
        </div>
      </div>
      <div className='postsContainer'>

      </div>
    </div>
  )
}

export default ProfilePage;
