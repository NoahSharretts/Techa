import './postExpand.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers } from "../../store/users";
import { deletePost } from '../../store/post';
import { deleteComment, getPostComments } from '../../store/comment'
import EditPostModal from '../EditPostModal'
import EditCommentModal from '../EditCommentModal';
import CreateComment from '../CreateComment/CreateComment';


function CreatePostForm({ setShowForm, post }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const users = useSelector((state) => state.users)
  const comments = useSelector((state) => state.comments);


  useEffect(() => {
    dispatch(getPostComments(post.id));
    dispatch(allUsers())
  }, [dispatch, post.id])

  const handleDelete = () => {
    dispatch(deletePost(post.id))
    setShowForm(false)
  }

  const handleCommentDelete = (commentId) => {
    dispatch(deleteComment(commentId))
    dispatch(getPostComments(post.id))
  }

  const close = () => {
    setShowForm(false)
  }

  return (
    <div className='post-modal'>
      <div className='left-container'>
        <div className='imgContainer'>
          <img id='post-photo' src={post?.photo} alt="" />
        </div>
      </div>
      <div className='commentsContainer'>
          <div className='comment-header'>
            <div className='post-user'>
              <img id='avatarImgComment' src={ post?.User?.avatar} alt="" />
              <Link id='usernameComment' to={`/users/${post?.User?.id}`}>{ post?.User?.username }</Link>
            </div>
            <div className='owner-buttons'>
              {(post.userId === user.id) ?
                <>
                  <svg
                  onClick={handleDelete}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  height="1em"
                  width="1em"
                  tyle={{ transform: "rotate(360deg)" }}
                  fill="currentColor"
                  >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                  </svg>
                  <EditPostModal post={post}/>
                </>
                : null
              }
            </div>
            <div className='close-modal' onClick={close}>x</div>
          </div>
          <div className='comment-scroll'>
            <div className='post-body'>
              {post.body}
            </div>
              {Object.values(comments).map(comment =>
                <div className='comment-wrapper' key={comment.id}>
                    <div className='comment' >
                        <img id='avatarImgComment' src={ users[comment.userId]?.avatar} alt="" />
                        <div className='comment-content'>
                          <h3 className='comment-username'>
                            <Link to={`/users/${post.userId}`}>{users[comment.userId]?.username}</Link>
                          </h3>
                          <span className='comment-text'>{comment.body}</span>
                          <div className='buttons-wrapper'>
                          { comment.userId === user.id && (
                            <>
                              <EditCommentModal comment={comment} />
                              <svg
                                onClick={() => handleCommentDelete(comment.id)}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                height="1em"
                                width="1em"
                                tyle={{ transform: "rotate(360deg)" }}
                                fill="currentColor"
                                >
                                <path
                                  fillRule="evenodd"
                                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                  />
                              </svg>
                            </>
                             )
                            }
                          </div>
                        </div>
                    </div>
                </div>
              )}
          </div>
          <CreateComment post={post}/>
        </div>
    </div>
  )
}

export default CreatePostForm;
