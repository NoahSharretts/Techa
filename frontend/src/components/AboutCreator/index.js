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
                  "https://i.imgur.com/PHwikvO.jpg"
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
                I am an aspiring software engineer based in San Francisco Bay Area. My background is
                sales experience, customer focus and customer care.
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
              <div className="users-posts">
                <a
                  href="https://www.linkedin.com/in/noah-garcia-sharretts-7ab735208/"
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
              <div className="users-posts">
                <a href="https://github.com/NoahSharretts" target="blank">
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
              <div className="users-posts">
                <a
                  href="https://ignored-group4.herokuapp.com/"
                  target="blank"
                >
                  <div className="post-image-wrapper-inner">
                    <p className="profile-card-text">Ignored</p>
                    <img
                      className="post-image-profile-page"
                      src="https://i.imgur.com/zPJpDxh.png"
                      alt=""
                    ></img>
                  </div>
                </a>
              </div>
              <div className="users-posts">
                <a href="https://codium-app.herokuapp.com/" target="blank">
                  <div className="post-image-wrapper-inner">
                    <p className="profile-card-text">Codium</p>
                    <img
                      className="post-image-profile-page"
                      src="https://i.imgur.com/OOumqEO.png"
                      alt=""
                    ></img>
                  </div>
                </a>
              </div>
              <div className="users-posts">
                <a href="https://noahsharretts.github.io/" target="blank">
                  <div className="post-image-wrapper-inner">
                    <p className="profile-card-text">Portfolio</p>
                    <img
                      className="post-image-profile-page"
                      src="https://i.imgur.com/hyNHZh5.png"
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
