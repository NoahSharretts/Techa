import { useState, useEffect } from "react";
import { useDispatch, useSelector  } from 'react-redux';
// import { useHistory, } from 'react-router-dom'
import { createPost, getPosts } from '../../store/post'
import * as yup from 'yup';
import { useFormik } from 'formik';

function CreatePostForm({ setShowForm }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id);



  const handleCancel = (e) => {
    e.preventDefault();
    setShowForm(false);
  }

  const formik = useFormik({
    initialValues: {
      body: "",
      photo: "",
      userId

    },
    validationSchema: yup.object({
      body: yup.string().min(5).max(350).required('Description must be be between 5 and 350 characters'),
      photo: yup.mixed().required('Post must have an image!'),
    }),
    onSubmit: async (values) => {
      dispatch(createPost(values)).then(() =>
      dispatch(getPosts())
      )
      setShowForm(false);
    },
  });



  return (
    <div className='postFormContainer'>
      <h2>Share your tech off!</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='postForm'>
          <div>
            <label htmlFor='photo'>Your photo</label>
            <input
              id='photo'
              type='file'
              name='photo'
              // value={formik.values.photo}
              onChange={(event) => {
                formik.setFieldValue('photo', event.currentTarget.files[0]);
              }
              }
              onBlur={formik.handleBlur}
            />
             {formik.touched.photo && formik.errors.photo ? (
              <div className="errorText">{formik.errors.photo}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor='body'>Your description here</label>
            <textarea
              id='body'
              name='body'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.body}
              onBlur={formik.handleBlur}
            />
             {formik.touched.body && formik.errors.body ? (
              <div className="errorText">{formik.errors.body}</div>
            ) : null}
          </div>
            <button onClick={handleCancel} type='button'>Cancel</button>
            <button type="submit">Done</button>
        </div>
      </form>
    </div>
  )



  // const [body, setBody] = useState('');
  // const [photo, setPhoto] = useState('');



  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const payload ={
  //     photo,
  //     body,
  //   }

  //   const post = dispatch(createPost(payload))

  //   if(post) {
  //     setShowForm(false);
  //     dispatch(getPosts());
  //   }
  // }


  // const handleCancel = (e) => {
  //   e.preventDefault();
  //   setShowForm(false);
  // }

  // return (

  // )
}

export default CreatePostForm;
