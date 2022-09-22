import React, { useState, useEffect } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import CreatePostModal from '../CreatePostModal';
import { searchUsers } from '../../store/search';


import './Navigation.css';


function Navigation({ isLoaded }){
  const dispatch = useDispatch()
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const searchResults = useSelector(state => state.search)
  const results = Object.values(searchResults);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input.length > 0) {
      dispatch(searchUsers(input));
    }
  }, [dispatch, input]);

  const showSearch = () => {
    document.querySelector(".search-results").classList.remove("hidden");
  };
  const hideSearch = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      document.querySelector(".search-results").classList.add("hidden");
    }
  };

  const reset = (id) => {
    document.querySelector(".search-results").classList.add("hidden");
    history.push(`/users/${id}`);
    setInput("");
  };

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
              <div className='search-container' onBlur={(e) => hideSearch(e)}>
                <input
                  className='search-bar-input'
                  value={input}
                  placeholder='Search'
                  onFocus={() => showSearch()}
                  onChange={(e) => setInput(e.target.value)}
                />
                <div className='search-results hidden'>
                {results?.length > 0 && input.length > 0 ? (
                  Object.values(results).map((res) => (
                    <div key={res.id} className="search-card">
                      <Link
                        to={`/users/${res.id}`}
                        className="search-name"
                        onClick={() => {
                          reset(res.id);
                        }}
                      >
                        {
                          <img
                            className="search-profile-image"
                            alt=""
                            src={res.avatar}
                          ></img>
                        }
                        {<span className="searchUsername">{res.username}</span>}
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="search-none">No results</div>
                )}
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
