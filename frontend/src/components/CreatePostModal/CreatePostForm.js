import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { createPost } from '../../store/post'

function CreatePostForm({ setShowForm }) {
  const dispatch = useDispatch();
  const histroy = useHistory()
  const [body, setBody] = useState('');
  const [photo, setPhoto] = useState('');
  const [topic, setTopic] = useState(1)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTopic(1);
    const payload ={
      photo,
      body,
      topic
    }

    const post = await dispatch(createPost(payload)).then(() => setShowForm(false))
    
  }

  const handleCancel = (e) => {
    e.preventDefault();
    setShowForm(false);
  }

  return (
    <div className='postFormContainer'>
      <h2>Share your tech off!</h2>
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

export default CreatePostForm;
