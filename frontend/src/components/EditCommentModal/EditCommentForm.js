import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updatePost, getPosts } from '../../store/post';
import { updateComment } from '../../store/comment'

function EditCommentForm({ setShowForm, comment }) {
  const dispatch = useDispatch();
  const histroy = useHistory();
  const userId = useSelector((state) => state.session.user.id)
  const [body, setBody] = useState(comment.body);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = comment.id
    const payload ={
      id,
      userId,
      body,
    }

    const postDispatch = dispatch(updateComment(payload))

    if(postDispatch) {
      setShowForm(false)
      dispatch(getPosts())
    }
    
  }

  const handleCancel = (e) => {
    e.preventDefault();
    setShowForm(false);
  }

  return (
    <div className='postFormContainer'>
      <h2>You may only update the description on your posts!</h2>
      <form onSubmit={handleSubmit}>
        <div className='postForm'>
            <textarea 
              id='body' 
              type='text' 
              onChange={(e) => setBody(e.target.value)} 
              value={body} 
            />
            <button onClick={handleCancel} type='button'>Cancel</button>
            <button type="submit">Done</button>
        </div>
      </form>
    </div>
  )
}

export default EditCommentForm;
