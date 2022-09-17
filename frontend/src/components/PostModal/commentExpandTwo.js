import { Modal } from '../../context/Modal';
import { useState } from 'react'
import PostExpand from './PostExpand';
import './PostExpand'


function CommentTwoModal({ post }) {
  const [showForm, setShowForm] = useState(false)
  const comments = post?.Comments.length;

  return (
    <>
      <div
        className="last-comment-wrapper"
        onClick={() => setShowForm(true)}
        >{`View all ${comments} comments`}</div>

      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <PostExpand setShowForm={setShowForm} post={post}/>
        </Modal>
      )}
    </>
  )
}

export default CommentTwoModal;
