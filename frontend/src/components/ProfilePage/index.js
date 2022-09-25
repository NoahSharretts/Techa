import './ProfilePage.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser } from '../../store/users'
import { getUserPosts } from '../../store/profilePage'
import { findFollows, followUser, unfollowUser } from '../../store/follow';
import ProfilePostModal from '../PostModal/profilePostModal';

function ProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const user = useSelector((state) => state.users);
  const posts = useSelector((state) => state.userPosts)
  const [isLoaded, setIsLoaded] = useState(false);
  const [follow, setFollow] = useState(0);

  useEffect( () => {
    dispatch(getOneUser(id))
    dispatch(getUserPosts(id))
    setIsLoaded(true)
  },[ id, dispatch ]);

  console.log(user, 'user')

  const isFollowed = () => {
    const follows = user?.followers;
    if (follows) {
      for (let i = 0; i < follows.length; i++) {
        let follow = follows[i];
        if (follow.id === sessionUser?.id) {
          return true;
        }
      }
    }
    return false;
  };

  const createFollow = async (e) => {
    e.preventDefault();
    const payload = {
      followerId: user.id,
      followingId: sessionUser.id,
    };

    // await dispatch(followUser(payload, sessionUser.id));
    // await dispatch(getOneUser(id));
    // setFollow(follow + 1)
  };

  const deleteFollow = async () => {
    const bool = await dispatch(unfollowUser(user?.id, sessionUser.id));
    if (bool) {
      setFollow(follow - 1);
    }
    // await dispatch(getOneUser(id));
  };

  return (
    <div className='profile-page'>
      {isLoaded && (
      <div className='profile-page-wrapper'>
        <div className='profile-page-header'>
          <div className='avatar-wrapper'>
            <img src={ user?.avatar } />
          </div>
          <div className='user-data-wrapper'>
            <div className='username-wrapper'>
              <h2 className='username'>{ user?.username }</h2>
              {sessionUser?.id !== user?.id && (
                <>
                  {!isFollowed() ? (
                    <button className="followButton" onClick={createFollow}>
                      Follow
                    </button>
                  ) : (
                    <button onClick={deleteFollow} className="unfollowButton">
                      <img
                        src={
                          "https://img.icons8.com/material-sharp/24/000000/checked-user-male.png"
                        }
                        alt=""
                      ></img>
                    </button>
                  )}
                </>
              )}
            </div>
            <div className="bio">
                <span>{user?.bio}</span>
            </div>
            <div>
              <span className="bio-formatting">
                {posts?.length} {posts?.length === 1 ? "post" : "posts"}
              </span>
              <span className="bio-formatting">
                {/* {`${user?.followers.length}`}
                {user?.followers.length === 1 ? " follower" : " followers"} */}
              </span>
              {/* <span className="bio-formatting">{`${user?.following.length} following`}</span> */}
            </div>
          </div>
        </div>
        <div className="user-posts-wrapper-outer">
          <div className="section-selector">
            <div className="section-selector-button">
              <svg
                aria-label=""
                className="_8-yf5 "
                color="#8e8e8e"
                fill="#8e8e8e"
                height="12"
                role="img"
                viewBox="0 0 24 24"
                width="12"
              >
                <rect
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  width="18"
                  x="3"
                  y="3"
                ></rect>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="9.015"
                  x2="9.015"
                  y1="3"
                  y2="21"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="14.985"
                  x2="14.985"
                  y1="3"
                  y2="21"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="21"
                  x2="3"
                  y1="9.015"
                  y2="9.015"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="21"
                  x2="3"
                  y1="14.985"
                  y2="14.985"
                ></line>
              </svg>
              <span>POSTS</span>
            </div>
          </div>
          <div className='users-posts-wrapper'>
            {Object.values(posts).map(post =>
              <div key={post.id} className='users-posts'>
                <ProfilePostModal post={post}/>
              </div>
              )}
          </div>
        </div>
      </div>
      )}
    </div>
  );


}

export default ProfilePage;
