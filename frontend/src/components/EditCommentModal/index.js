import { Modal } from '../../context/Modal';
import { useState } from 'react'
import EditCommentForm from './EditCommentForm';
import './EditCommentForm.css'

function EditCommentModal({comment, post}) {
  const [showForm, setShowForm] = useState(false)


  return (
    <div>
       <svg
          className="h-6 w-6"
          onClick={() => setShowForm(true)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          height="1em"
          width="1em"
          tyle={{ transform: "rotate(360deg)" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <EditCommentForm setShowForm={setShowForm} comment={comment} post={post} />
        </Modal>
      )}
    </div>
  )
}

export default EditCommentModal;
