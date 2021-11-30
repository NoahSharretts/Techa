import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const user = useSelector((state) => state.session.user)

  if(user) return <Redirect to="feed"/>;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div className='loginContainer'>
      <h1>Log In</h1>
      <form id='loginForm' onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>Username or Email</label>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        
        <label>Password</label><input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
