import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import { useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session";

const credential = 'Dmo';
const password = 'password'

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()


  const handleDemo = () => {
    return dispatch(sessionActions.login({ credential, password }))
  }

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
      <button onClick={handleDemo}>demio</button>
    </>
  );
}

export default LoginFormModal;
