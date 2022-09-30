
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/post';
import { updateComment } from '../../store/comment';
import * as yup from 'yup';
import { useFormik } from 'formik';

function EditCommentForm({ setShowForm, comment }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id)


  const formik = useFormik({
    initialValues: {
      id: comment.id,
      body: comment.body,
      userId

    },
    validationSchema: yup.object({
      body: yup.string().min(5).max(350).required('Comment must be be between 5 and 350 characters'),
    }),
    onSubmit: async (values) => {
      dispatch(updateComment(values)).then(() =>
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
      <h3>Edit your comment!</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className='postForm'>
          <div>
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
}

export default EditCommentForm;
