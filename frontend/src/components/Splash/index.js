import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from 'react-router-dom'
// import LoginFormModal from '../LoginFormModal';
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
    <div className='splash-page'>
      <div className='tagline-wrapper'>
        <span>
          Techa - show 0ff y0ur tech, disc0ver new tech, c0nnect!
        </span>
      </div>
      <div className='splash-login'>
        <div className='form-wrapper'>
          <div className='title-wrapper'>
            <h1>
              Techa
            </h1>
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
  )
}

export default Splash;
