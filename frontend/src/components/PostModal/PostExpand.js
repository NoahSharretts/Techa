import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, } from 'react-router-dom'
import { deletePost } from '../../store/post';
import { getComments, createComment } from '../../store/comment'
import EditPostModal from "../EditPostModal";

function CreatePostForm({ setShowForm, post }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const allComments = useSelector((state) => state.comments);
  // const postComments = Object.values(allComments).find((comment) => comment.userId === user.id)
  const [body, setBody] = useState('');
  
  useEffect(() => {
    dispatch(getComments())
  }, [dispatch])

  const handleDelete = (e) => {
    dispatch(deletePost(e.target.value))
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
    <div className='feedContainer'>
      <div className='postContainer'>
        <div className='avatarDiv'>
          <img id='avatarImg' src={ post?.User?.avatar} />
          <div id='username'>{ post?.User?.username }</div>
        </div>
        <div className='imgContainer'>
          <img src={post?.photo}></img>
        </div>
        <div>
          {(post.userId === user.id)? 
            <div>
              <EditPostModal postId={post.id}/>
              <button onClick={handleDelete} value={post.id}>Delete</button>
            </div> : null
          }
        </div>
        <div>
          {post.body}
        </div>
      </div>
      <div className='commentsContainer'>
          <div className='commentsFeed'>
            {Object.values(allComments).map(comment => 
              <div key={comment.id}>
                { comment.postId === post.id ? 
                <div className='comment' >{comment.body}</div> :null }
              </div>
            )}
          </div>
          <div>
            <input className='commentInput' onChange={(e) => setBody(e.target.value)}></input>
            <button onClick={handleComment}>Send</button>
          </div>
      </div>
    </div>
  )
}

export default CreatePostForm;
