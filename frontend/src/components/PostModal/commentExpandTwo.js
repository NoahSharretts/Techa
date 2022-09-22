import { Modal } from '../../context/Modal';
import { useState } from 'react'
import PostExpand from './PostExpand';
import './postExpand.css'


function CommentTwoModal({ post }) {
  const [showForm, setShowForm] = useState(false)
  const numberOfComments = post?.Comments?.length

  const anyComments = () => {
    if (numberOfComments) {
      return `View all ${numberOfComments} comments`;
    } else {
      return `View post details`;
    }
  };

  return (
    <>
      <div
        className="last-comment-wrapper"
        onClick={() => setShowForm(true)}
        >{anyComments()}</div>

      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <PostExpand setShowForm={setShowForm} post={post}/>
        </Modal>
      )}
    </>
  )
}

export default CommentTwoModal;
