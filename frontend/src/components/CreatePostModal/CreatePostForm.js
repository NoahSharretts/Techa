import { useState, useEffect } from "react";
import { useDispatch,  } from 'react-redux';
// import { useHistory, } from 'react-router-dom'
import { createPost, getPosts } from '../../store/post'

function CreatePostForm({ setShowForm }) {
  const dispatch = useDispatch();
  const [body, setBody] = useState('');
  const [photo, setPhoto] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();

    const payload ={
      photo,
      body,
    }

    const post = dispatch(createPost(payload))
    
    if(post) {
      setShowForm(false);
      dispatch(getPosts());
    }
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
            <label htmlFor='photoInput'>Your answer here</label>
            <input 
              id='photoInput' 
              value={photo} 
              onChange={(e) => setPhoto(e.target.value)} 
            />
            <label htmlFor='body'>Your description here</label>
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
