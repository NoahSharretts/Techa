import { Modal } from '../../context/Modal';
import { useState } from 'react'
import PostExpand from './PostExpand';
import './PostExpand'

function PostModal({ post }) {
  const [showForm, setShowForm] = useState(false)


  return (
    <div>
      <img
        src={post.photo}
        id='post-photo'
        onClick={() => setShowForm(true)} >
      </img>

      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <PostExpand setShowForm={setShowForm} post={post}/>
        </Modal>
      )}
    </div>
  )
}

export default PostModal;
