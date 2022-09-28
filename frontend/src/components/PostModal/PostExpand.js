import './postExpand.css';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, } from 'react-router-dom'
import { allUsers } from "../../store/users";
import { deletePost } from '../../store/post';
import { getComments, deleteComment, getPostComments } from '../../store/comment'
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
  }, [dispatch])

  const handleDelete = (e) => {
    dispatch(deletePost(e.target.value))
  }

  const handleCommentDelete = (e) => {
    dispatch(deleteComment(e.target.value))
  }


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
            <img id='post-photo' src={post?.photo}></img>
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
            {Object.values(comments).map(comment =>
              <div className='commentBox' key={comment.id}>
                  <div className='comment' >
                    <div id='avatarComment'>
                      <img id='avatarImgComment' src={ users[comment.userId]?.avatar} />
                      <Link to={`/users/${post.userId}`}>{users[comment.userId]?.username}</Link>
                      <h4>{comment.updatedAt}</h4>
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
              </div>
            )}
          </div>
          <CreateComment post={post}/>
        </div>
    </div>
  )
}

export default CreatePostForm;
