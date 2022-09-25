import React, { useEffect, useState} from "react";

import "./AboutCreator.css";

function AboutCreator() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [])

  return (
    <div className="profile-page">
      {isLoaded && (
        <div className="profile-page-wrapper">
          <div className="profile-page-header">
            <div className="avatar-wrapper">
              <img
                src={
                  "https://media-exp1.licdn.com/dms/image/D4E35AQGNfI5D1F0s9w/profile-framedphoto-shrink_200_200/0/1638499476020?e=1664672400&v=beta&t=expsQHM-BIQnYQZf7-0k_J18ReRZMGSe2hiOKf7gYtA"
                }
                alt=""
              />
            </div>
            <div className="user-data-wrapper">
              <div className="username-wrapper">
                <span>Noah Garcia-Sharretts</span>
              </div>
              <div className="bio">
                <span>Website Creator</span>
              </div>
              <p>
                I'm a software engineer based in San Francisco Bay Area. I have a
                background in customer service.
              </p>
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
            <div className="user-posts-wrapper">
              <div className="users-post">
                <a
                  href=""
                  target="blank"
                >
                  <div className="post-image-wrapper-inner">
                    <p className="profile-card-text">LinkedIn</p>
                    <img
                      className="post-image-profile-page"
                      src="https://i.imgur.com/Z9M0KmM.jpg"
                      alt=""
                    ></img>
                  </div>
                </a>
              </div>
              <div className="users-post">
                <a href="" target="blank">
                  <div className="post-image-wrapper-inner">
                    <p className="profile-card-text">Github</p>
                    <img
                      className="post-image-profile-page"
                      src="https://i.imgur.com/5btn6RE.png"
                      alt=""
                    ></img>
                  </div>
                </a>
              </div>
              <div className="users-post">
                <a href="" target="blank">
                  <div className="post-image-wrapper-inner">
                    <p className="profile-card-text">AngelList</p>
                    <img
                      className="post-image-profile-page"
                      src="https://cdn-images-1.medium.com/max/1200/1*VHYE96X8zKxswXKFcar-Uw.png"
                      alt=""
                    ></img>
                  </div>
                </a>
              </div>
              <div className="users-post">
                <a
                  href=""
                  target="blank"
                >
                  <div className="post-image-wrapper-inner">
                    <p className="profile-card-text">RTC</p>
                    <img
                      className="post-image-profile-page"
                      src="https://res.cloudinary.com/dis83syog/image/upload/v1639097471/Personal%20Portfolio/Screen_Shot_2021-12-09_at_7.50.25_PM_upbwjm.png"
                      alt=""
                    ></img>
                  </div>
                </a>
              </div>
              <div className="users-post">
                <a href="" target="blank">
                  <div className="post-image-wrapper-inner">
                    <p className="profile-card-text">Pickup</p>
                    <img
                      className="post-image-profile-page"
                      src="https://res.cloudinary.com/dis83syog/image/upload/v1638663008/Personal%20Portfolio/Screen_Shot_2021-12-04_at_7.09.55_PM_xtclmg.png"
                      alt=""
                    ></img>
                  </div>
                </a>
              </div>
              <div className="users-post">
                <a href="" target="blank">
                  <div className="post-image-wrapper-inner">
                    <p className="profile-card-text">Speakeasy</p>
                    <img
                      className="post-image-profile-page"
                      src="https://res.cloudinary.com/dis83syog/image/upload/v1638664346/Personal%20Portfolio/Screen_Shot_2021-12-04_at_7.32.10_PM_zxiugu.png"
                      alt=""
                    ></img>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


export default AboutCreator
