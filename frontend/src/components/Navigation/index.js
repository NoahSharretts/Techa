import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

import CreatePostModal from '../CreatePostModal';
import './Navigation.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <>

  //     </>
  //   );
  // }

  return (
    <>
      {sessionUser && (
        <div className='navBar'>
          <NavLink to="/">Home</NavLink>
          <CreatePostModal />
          <ProfileButton user={sessionUser} />
        </div>
      )}
    </>
  );
}

export default Navigation;
