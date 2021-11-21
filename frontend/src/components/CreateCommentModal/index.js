import { Modal } from '../../context/Modal';
import { useState } from 'react'
import CreateCommentForm from './CreateCommentForm';
import './CreateCommentForm.css'

function CreatePostModal() {
  const [showForm, setShowForm] = useState(false)
  

  return (
    <div>
      <button 
        id='add-awnser' 
        onClick={() => setShowForm(true)} >Create Post
      </button>
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <CreateCommentForm setShowForm={setShowForm} />
        </Modal>
      )}
    </div>
  )
}

export default CreateCommentModal;
