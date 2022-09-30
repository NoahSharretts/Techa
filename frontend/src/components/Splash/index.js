import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from 'react-router-dom'
import './Splash.css'

function Splash() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  const handleDemo = () => {
    setCredential("Dmo")
    setPassword("password")

    return dispatch(sessionActions.login({ credential, password }))
  }

  return (
    <>
      <div className='splash-page'>
        <div className='tagline-wrapper'>
          <span>
            Techa - show off your tech, discover new tech, connect!
          </span>
        </div>
        <div className='splash-login'>
          <div className='form-wrapper'>
            <div className='title-wrapper'>
              <img className='logo' src='https://i.imgur.com/KrRwLMe.png' alt="" />
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
              <ul>
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>
              <input
                className="login-form-input"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                placeholder="Email"
              />
              <input
                className="login-form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
              <button className="login-btn" type="submit">Log In</button>
              <button className="login-btn" onClick={handleDemo}>Demo User</button>
            </form>
          </div>
          <div className="sign-up-form">
            <p>
              {" "}
              Don't have an account?&nbsp;
            <Link className="sign-up btn" to="/signup">Sign-up</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="social-links">
          <p>Created by: Noah Garcia-Sharretts</p>
          <a className="icons" href="https://github.com/NoahSharretts">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="githubLogo"
            />
          </a>
          <a className="icons" href="https://www.linkedin.com/in/noah-garcia-sharretts-7ab735208/">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
              alt="linkedInLogo"
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default Splash;
