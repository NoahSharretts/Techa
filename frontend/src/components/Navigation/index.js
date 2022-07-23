import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SearchBar from './searchBar';

import CreatePostModal from '../CreatePostModal';
import './Navigation.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);


  return (
    <>
      {sessionUser && (
        <div className='navBar'>
          <NavLink exact to="/">Home</NavLink>
          <SearchBar></SearchBar>
          <CreatePostModal />
          <NavLink exact to={`/users/${sessionUser.id}`}><img className='avatarImg' src={sessionUser.avatar}></img></NavLink>
          <ProfileButton user={sessionUser} />
        </div>
      )}
    </>
  );
}

export default Navigation;
