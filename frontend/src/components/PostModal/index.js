import { Modal } from '../../context/Modal';
import { useState } from 'react'
import PostExpand from './PostExpand';
import './PostExpand'

function PostModal({ post }) {
  const [showForm, setShowForm] = useState(false)
  

  return (
    <div>
      <button 
        id='add-awnser' 
        onClick={() => setShowForm(true)} >Open
      </button>
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <PostExpand setShowForm={setShowForm} post={post}/>
        </Modal>
      )}
    </div>
  )
}

export default PostModal;
