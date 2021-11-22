import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { updatePost, getPosts } from '../../store/post'

function EditPostForm({ setShowForm, postId }) {
  const dispatch = useDispatch();
  const histroy = useHistory();
  const userId = useSelector((state) => state.session.user.id)
  const [body, setBody] = useState('');
  const [photo, setPhoto] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = postId
    const payload ={
      id,
      userId,
      body,
      photo,
    }

    const post = dispatch(updatePost(payload))

    if(post) {
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
      <h2>Update your post!</h2>
      <form onSubmit={handleSubmit}>
        <div className='postForm'>
        {/* <label htmlFor='body'>Your answer here</label> */}
            <input 
              id='photoInput' 
              value={photo} 
              onChange={(e) => setPhoto(e.target.value)} 
            />
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

export default EditPostForm;
