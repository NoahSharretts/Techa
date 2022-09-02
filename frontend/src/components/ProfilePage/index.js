import './ProfilePage.css';
import React from 'react';
import { useEffect } from 'react';
import { useParams, } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser } from '../../store/users'
import { getUserPosts } from '../../store/profilePage'


function ProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.users[`${id}`]);
  const posts = useSelector((state) => state.userPosts)

  console.log(user, 'user')
  console.log(posts, 'posts')


  useEffect( () => {

    dispatch(getOneUser(id))
    dispatch(getUserPosts(id))


  }, [ ]);


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
