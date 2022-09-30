import './CreateUser.css';
import { useState } from "react";
import { createUser } from '../../store/session';
import * as sessionActions from "../../store/session";
import { Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector  } from "react-redux";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  if (user) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];

    if (password === confirmPassword) {

      dispatch(createUser({ username, email, password, avatar }))
        .then(() => {
          setUsername("");
          setEmail("");
          setPassword("");
          setAvatar(null);
        })
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            newErrors = data.errors;
            setErrors(newErrors);
          }
        });
    }

    return setErrors([
      "Confrim Passworf field must be the same as the Password field"
    ])
  };

  const handleDemo = (e) => {
    e.preventDefault()

    dispatch(sessionActions.login({ credential: "Dmo", password: "password" }))

    return
  }

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setAvatar(file);
  };


  return (
    <>
      <div className='signup-form-wrapper'>
        <div className='tagline-wrapper'>
          <span>
            Techa - show off your tech, discover new tech, connect!
          </span>
        </div>
        <div className='signup-page'>
          <div className='form-wrapper'>
            <div className='title-wrapper'>
            <img className='logo' src='https://i.imgur.com/KrRwLMe.png' alt="" />
            </div>
            {errors.length > 0 &&
              errors.map((error) => <div key={error}>{error}</div>)}
            <form className='signup-form' onSubmit={handleSubmit}>
              <input
                className='signup-form-input'
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                className='signup-form-input'
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className='signup-form-input'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                className="signUpFormInput"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <label>
                Profile Picture
                <input type="file" name="avatar" onChange={updateFile} />
              </label>
              <button className='signup-btn' type="submit">Sign Up!</button>
              <button className='signup-btn' type='submit' onClick={handleDemo}>Demo User</button>
            </form>
          </div>
          <div className="redirect-login">
            <p>
              Have an account?&nbsp;
              <Link className="link" to="/">
                Log in
              </Link>
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
  );
};

export default CreateUser;
