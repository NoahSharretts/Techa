import { useEffect } from "react";
import { useDispatch,  } from 'react-redux';
import { useSelector } from "react-redux";
import { allUsers } from "../../store/users";
import { createComment } from '../../store/comment';
import { getPosts } from "../../store/post";
import * as yup from 'yup';
import { useFormik } from 'formik';
import './CreateComment.css'

function CreateComment({  post }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
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
      dispatch(getPosts())
      formik.values.body = "";
    },
  });

  return (
    <div className='comment-form-container'>
      <form onSubmit={formik.handleSubmit}>
        <span className='fieldDiv'>
          <input
            id='comment-input'
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
        </span>
          <span className="comment-btn-wrapper">
            <button id='submit-comment-btn' type="submit">Post</button>
          </span>
      </form>
    </div>
  )
}

export default CreateComment;
