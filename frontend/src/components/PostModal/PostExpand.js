import './postExpand.css';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, } from 'react-router-dom'
import { allUsers } from "../../store/users"; 
import { deletePost } from '../../store/post';
import { getComments, createComment, deleteComment } from '../../store/comment'
import EditPostModal from '../EditPostModal'
import EditCommentModal from '../EditCommentModal';
import * as yup from 'yup';
import { useFormik } from 'formik';

function CreatePostForm({ setShowForm, post }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const users = useSelector((state) => state.users)
  const allComments = useSelector((state) => state.comments);
  // const postComments = Object.values(allComments).find((comment) => comment.userId === user.id)
  // const [body, setBody] = useState('');
  
  useEffect(() => {
    dispatch(getComments());
    dispatch(allUsers())
  }, [dispatch])

  const handleDelete = (e) => {
    dispatch(deletePost(e.target.value))
  }

  const handleCommentDelete = (e) => {
    dispatch(deleteComment(e.target.value))
  }
   
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

  const handleCancel = (e) => {
    e.preventDefault();
    setShowForm(false);
  }
 
  return (
    <div className='expandBox'>
      <div className='feedContainer'>
        <div className='postContainer'>
          <div className='avatarDiv'>
            <img id='avatarImg' src={ post?.User?.avatar} />
            <div id='username'>{ post?.User?.username }</div>
          </div>
          <div className='imgContainer'>
            <img id='postPhoto' src={post?.photo}></img>
          </div>
          <div>
            {(post.userId === user.id)? 
              <div>
                <EditPostModal post={post}/>
                <button onClick={handleDelete} value={post.id}>Delete</button>
              </div> : null
            }
          </div>
        </div>
      </div>
      <div className='commentsContainer'>
        <div className='commentsFeed'>
          <div className='avatarComment'>
            <img id='avatarImgComment' src={ post?.User?.avatar} />
            <div id='usernameComment'>{ post?.User?.username }</div>
          </div>
          <div className='postDescription'>
          {post.body}
          </div>
            {Object.values(allComments).map(comment => 
              <div className='commentBox' key={comment.id}>
                { comment.postId === post.id && (
                  <div className='comment' >
                    <div id='avatarComment'>
                      <img id='avatarImgComment' src={ users[comment.userId]?.avatar} />
                      <h3>{users[comment.userId]?.username}</h3>
                    </div>
                    <p id='commentBody'>{comment.body}</p>
                    <div className='deleteButton'>
                      { comment.userId === user.id && (
                        <div className='ownerButtons'> 
                          <EditCommentModal comment={comment} />
                          <button value={comment.id} onClick={handleCommentDelete}>Del</button> 
                        </div> 
                      )
                      }
                    </div>
                  </div>               
                )}
              </div>
            )}
          </div>
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
                <button type="submit">Done</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default CreatePostForm;
