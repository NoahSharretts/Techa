import { Modal } from '../../context/Modal';
import { useState } from 'react'
import EditCommentForm from './EditCommentForm';
import './EditCommentForm.css'

function EditCommentModal({comment}) {
  const [showForm, setShowForm] = useState(false)
  

  return (
    <div>
      <button 
        id='add-awnser' 
        onClick={() => setShowForm(true)} >Edit
      </button>
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <EditCommentForm setShowForm={setShowForm} comment={comment} />
        </Modal>
      )}
    </div>
  )
}

export default EditCommentModal;
