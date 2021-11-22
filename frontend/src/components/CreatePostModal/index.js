import { Modal } from '../../context/Modal';
import { useState } from 'react'
import CreatePostForm from './CreatePostForm';
import './CreatePostForm.css'

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
          <CreatePostForm setShowForm={setShowForm} />
        </Modal>
      )}
    </div>
  )
}

export default CreatePostModal;
