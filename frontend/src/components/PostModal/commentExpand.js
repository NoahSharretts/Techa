import { Modal } from '../../context/Modal';
import { useState } from 'react'
import PostExpand from './PostExpand';
import './postExpand.css'


function CommentModal({ post }) {
  const [showForm, setShowForm] = useState(false)


  return (
    <div className="postcard-icon-comment">
      <svg
        onClick={() => setShowForm(true)}
        aria-label="Comment"
        className="_8-yf5 comment-icon"
        color="#262626"
        fill="#262626"
        height="24"
        role="img"
        viewBox="0 0 48 48"
        width="24"
      >
        <path
          clipRule="evenodd"
          d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
          fillRule="evenodd"
        ></path>
      </svg>
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <PostExpand setShowForm={setShowForm} post={post}/>
        </Modal>
      )}
    </div>

  )
}

export default CommentModal;
