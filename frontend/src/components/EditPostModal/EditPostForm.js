
import { useDispatch, useSelector } from 'react-redux';
import { updatePost, getPosts } from '../../store/post'
import * as yup from 'yup';
import { useFormik } from 'formik';

function EditPostForm({ setShowForm, post }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id)

  const formik = useFormik({
    initialValues: {
      id: post.id,
      body: post.body,
      userId

    },
    validationSchema: yup.object({
      body: yup.string().min(5).max(350).required('Comment must be be between 5 and 350 characters'),
    }),
    onSubmit: async (values) => {
      dispatch(updatePost(values)).then(() =>
      dispatch(getPosts())
      )
      setShowForm(false);
    },
  });

  const cancel = () => {
    setShowForm(false)
  }

  return (
    <div className='edit-post-container'>
      <div className='edit-post-header'>
        <h2 className='edit-post-title'>Update description!</h2>
      </div>
      <div>
        <div className='close-modal' onClick={cancel}>
          x
        </div>
        <form className='edit-post-form' onSubmit={formik.handleSubmit}>
          <div className='fieldDiv'>
            <div>``
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
              <button className='edit-post-submit-btn' type="submit">Update Post</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPostForm;
