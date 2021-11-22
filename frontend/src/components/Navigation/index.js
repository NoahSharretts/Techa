import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import CreatePostModal from '../CreatePostModal';
import './Navigation.css';
import CreatePostForm from '../CreatePostModal/CreatePostForm';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <CreatePostModal />
        <ProfileButton user={sessionUser} />
      </>
    );
  } 

  return (
    <div className='navBar'>
      {isLoaded && (
        <>
          <NavLink exact to="/">Home</NavLink>
          {sessionLinks}
        </>
      )}
    </div>
  );
}

export default Navigation;
