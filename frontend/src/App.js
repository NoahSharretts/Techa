import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// import SignupFormPage from './components/SignupFormPage';
import CreateUser from './components/CreateUser';
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
// import { Modal } from './context/Modal';
import Splash from './components/Splash';
import Feed from './components/Feed';
import Footer from './components/Footer';

function App() {
  const sessionUser = useSelector((state) => state.session.user)
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // useEffect(() => {
  //   if(sessionUser) setIsLoaded(true);
  //   console.log(isLoaded, sessionUser)
  // }, [dispatch, sessionUser]);


  return (
    <>
      <Navigation isLoaded={isLoaded} />
        <Switch>
          <Route exact path="/">
            { sessionUser? <Feed />: <Splash/> }
          </Route>
          {/* <Route exact path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route exact path='/signup'>
            <CreateUser />
          </Route>
          <Route exact path='/feed'>
          </Route>
        </Switch>
        <Footer />
    </>
  );
}

export default App;
