import { Modal } from '../../context/Modal';
import { useState } from 'react'
import EditPostForm from './EditPostForm';
import './EditPostForm.css'

function EditPostModal({post}) {
  const [showForm, setShowForm] = useState(false)
  

  return (
    <div>
      <button 
        id='add-awnser' 
        onClick={() => setShowForm(true)} >Edit Post
      </button>
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <EditPostForm setShowForm={setShowForm} post={post} />
        </Modal>
      )}
    </div>
  )
}

export default EditPostModal;
