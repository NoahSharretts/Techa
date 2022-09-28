import { useState } from "react";
import { useDispatch, useSelector  } from 'react-redux';

import { createPost, getPosts } from '../../store/post'
import * as yup from 'yup';
import { useFormik } from 'formik';

function CreatePostForm({ setShowForm }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id);
  const [imagePreview, setImagePreview] = useState(null)

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
      setImagePreview(null)
    },
  });

  return (
    <div className='post-form-container'>
      <div className="post-form-header">
        <h2 className="form-header-title">Create a Post</h2>
      </div>
      <form className="post-form" onSubmit={formik.handleSubmit}>
        <div>
          {imagePreview && (
            <img
              style={{ maxwidth: "600px", height: "500px" }}
              src={imagePreview}
              alt=""
            ></img>
          )}
          <div className="img-input-wrapper">
            <label className="img-input-label" htmlFor='photo'>Select form computer</label>
            <input
              className="img-input"
              id='photo'
              type='file'
              name='photo'
              // value={formik.values.photo}
              onBlur={formik.handleBlur}
              onChange={(event) => {
                formik.setFieldValue('photo', event.currentTarget.files[0]);
                setImagePreview(URL.createObjectURL(event.currentTarget.files[0]))
              }}
            />
             {formik.touched.photo && formik.errors.photo ? (
              <div className="errorText">{formik.errors.photo}</div>
            ) : null}
          </div>
          <div className="fieldDiv">
            <label htmlFor='body'>Your description here</label>
            <textarea
              id='body'
              className="post-caption-input"
              name='body'
              type='text'
              placeholder="Caption"
              rows="4"
              onChange={formik.handleChange}
              value={formik.values.body}
              onBlur={formik.handleBlur}
            />
             {formik.touched.body && formik.errors.body ? (
               <div className="errorText">{formik.errors.body}</div>
               ) : null}
          </div>
          <button className="create-post-button" type="submit">Post</button>
        </div>
      </form>
    </div>
  )
}

export default CreatePostForm;
