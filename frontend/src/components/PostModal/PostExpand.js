import './postExpand.css';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, } from 'react-router-dom'
import { allUsers } from "../../store/users"; 
import { deletePost } from '../../store/post';
import { getComments, createComment, deleteComment } from '../../store/comment'
import EditPostModal from "../EditPostModal";

function CreatePostForm({ setShowForm, post }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const users = useSelector((state) => state.users)
  const allComments = useSelector((state) => state.comments);
  // const postComments = Object.values(allComments).find((comment) => comment.userId === user.id)
  const [body, setBody] = useState('');
  
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
   
  const handleComment = (e) => {
    e.preventDefault();

    const comment = {
      userId: user.id,
      body,
      postId: post.id
    }

    dispatch(createComment(comment))
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
            <img id='postPhoto' src={post?.photo}></img>
          </div>
          <div>
            {(post.userId === user.id)? 
              <div>
                <EditPostModal postId={post.id}/>
                <button onClick={handleDelete} value={post.id}>Delete</button>
              </div> : null
            }
          </div>
        </div>
      </div>
      <div className='commentsContainer'>
        <div className='avatarComment'>
          <img id='avatarImgComment' src={ post?.User?.avatar} />
          <div id='usernameComment'>{ post?.User?.username }</div>
        </div>
        <div className='postDescription'>
        {post.body}
        </div>
          <div className='commentsFeed'>
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
                      { comment.userId === user.id ?
                        <button value={comment.id} onClick={handleCommentDelete}>Del</button> : null
                      }
                    </div>
                  </div>               
                )}
              </div>
            )}
          </div>
          <div className='commentInputContainer'>
            <input className='commentInput' onChange={(e) => setBody(e.target.value)}></input>
            <button onClick={handleComment}>Send</button>
          </div>
        </div>
    </div>
  )
}

export default CreatePostForm;
