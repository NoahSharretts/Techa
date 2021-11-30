import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import { useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session";
import './LoginForm.css'

const credential = 'Dmo';
const password = 'password'

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()


  const handleDemo = () => {
    return dispatch(sessionActions.login({ credential, password }))
  }

  return (
    <div className='splash'>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
      <button onClick={handleDemo}>Demo</button>
    </div>
  );
}

export default LoginFormModal;
