import { useState, useEffect } from "react";
import { useDispatch,  } from 'react-redux';
import { useSelector } from "react-redux";
// import { useHistory, } from 'react-router-dom'
import { allUsers } from "../../store/users";
import { createComment, getComments } from '../../store/comment';
import * as yup from 'yup';
import { useFormik } from 'formik';
import './CreateComment.css'

function CreateComment({  post }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getComments());
    dispatch(allUsers())
  }, [dispatch])

  const formik = useFormik({
    initialValues: {
      body: "",
      userId: user.id,
      postId: post.id

    },
    validationSchema: yup.object({
      body: yup.string().min(5).max(350).required('Comment must be be between 5 and 350 characters'),
    }),
    onSubmit: async (values) => {
      dispatch(createComment(values))
      formik.values.body = "";
    },
  });

  return (
    <div className='comment-form-container'>
      <form onSubmit={formik.handleSubmit}>
        <div className='fieldDiv'>
          <div>
            <input
              id='body'
              placeholder='Add a comment...'
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
            <button id='submit-comment-btn' type="submit">Post</button>
        </div>
      </form>
    </div>
  )
}

export default CreateComment;
