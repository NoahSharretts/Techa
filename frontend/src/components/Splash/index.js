import './Splash.css'
import { NavLink } from 'react-router-dom'
import LoginFormModal from '../LoginFormModal';

function Splash() {
  
  
  
  
  
  return (
    <>
      <div className='splashBox'>
        <h1>Techa</h1>
        <h4>Are you ready?</h4>
        <div className='buttonDiv'>
          <LoginFormModal />
          <NavLink to="/signup" className='signup btn'>Sign-up</NavLink>
        </div>
      </div>
    </>
  )
}

export default Splash;
