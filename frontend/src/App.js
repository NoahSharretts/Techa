import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import Splash from './components/Splash';
import Feed from './components/Feed';
import ProfilePage from './components/ProfilePage';
import AboutCreator from './components/AboutCreator';

function App() {
  const sessionUser = useSelector((state) => state.session.user)
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);




  return (
    <>
      <Navigation isLoaded={isLoaded} />
        <Switch>
          <Route exact path="/">
            { sessionUser? <Feed />: <Splash/> }
          </Route>
          <Route exact path='/signup'>
            <CreateUser />
          </Route>
          <Route exact path='/feed'>
          </Route>
          <Route exact path='/users/:id'>
            <ProfilePage />
          </Route>
          <Route exact path='/about'>
            <AboutCreator />
          </Route>
        </Switch>
    </>
  );
}

export default App;
