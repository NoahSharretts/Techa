import { Modal } from '../../context/Modal';
import { useState } from 'react'
import PostExpand from './PostExpand';
import './postExpand.css'


function ProfilePostModal({ post }) {
  const [showForm, setShowForm] = useState(false)


  return (
    <>
      <div className="post-image-wrapper">
        <div className="post-image-wrapper-inner"></div>
        <img
          className="post-image-profile-page"
          src={post.photo}
          alt=""
          onClick={() => setShowForm(true)}
        />
      </div>
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <PostExpand setShowForm={setShowForm} post={post}/>
        </Modal>
      )}
    </>

  )
}

export default ProfilePostModal;
