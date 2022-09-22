import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import CreatePostModal from '../CreatePostModal';


import './Navigation.css';


function Navigation({ isLoaded }){
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const [input, setInput] = useState("");


  return (
    <>
      {sessionUser && (
        <div className='nav-wrapper'>
          <div className='nav'>
            <div className='logo-wrapper'>
              <NavLink to="/">
                <img className='logo' src='https://i.imgur.com/KrRwLMe.png' />
              </NavLink>
            </div>
            <div className='search-bar'>
              <div className='search-container'>
                <input
                  className='search-bar-input'
                  value={input}
                  placeholder='Search'
                  onFocus={() => showSearch()}
                  onChange={(e) => setInput(e.target.value)}
                />
                <div className='search-results'>

                </div>
              </div>
            </div>
            <CreatePostModal />
            <ProfileButton user={sessionUser} />
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
