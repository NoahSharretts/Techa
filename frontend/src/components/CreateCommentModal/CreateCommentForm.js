import { useState, useEffect } from "react";
import { useDispatch,  } from 'react-redux';
import { useSelector } from "react-redux";
// import { useHistory, } from 'react-router-dom'
import { createComment, getComments } from '../../store/comment';

function CreateCommentForm({ setShowForm }) {
  const dispatch = useDispatch();
  // const [body, setBody] = useState('');
  const userId = useSelector((state) => state.session.user.id );


  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const payload ={
  //     userId,
  //     body,
  //     // postId
  //   }

  //   const post = dispatch(createPost(payload))
    
  //   if(post) {
  //     setShowForm(false);
  //     dispatch(getPosts());
  //   }
  // }
  const formik = useFormik({
    initialValues: {
      body: "",
      userId
      
    },
    validationSchema: yup.object({
      body: yup.string().min(5).max(350).required('Comment must be be between 5 and 350 characters'),
    }),
    onSubmit: async (values) => {
      dispatch(createComment(values)).then(() => 
      dispatch(getPosts())
      )
      setShowForm(false);
    },
  });


  const handleCancel = (e) => {
    e.preventDefault();
    setShowForm(false);
  }

  return (
    <div className='postFormContainer'>
      <h2>Post a comment!</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='postForm'>
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

export default CreateCommentForm;
