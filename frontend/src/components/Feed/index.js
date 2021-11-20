import './Feed.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, deletePost } from '../../store/post'
import EditPostModal from '../EditPostModal'

function Feed() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts)
  const user = useSelector((state) => state.session.user)

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  const handleDelete = (e) => {
    dispatch(deletePost(e.target.value))
  }
  
  return (
    <div className='feedContainer'>
      {Object.values(posts).map((post) => (
        <div className='postContainer' key={post.id}>
          <div className='avatarDiv'>
            <img id='avatarImg' src={ post?.User?.avatar} />
            <div id='username'>{ post?.User?.username }</div>
          </div>
          <div className='imgContainer'>
            <img src={post.photo}></img>
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
      ))}
    </div>
  )
}

export default Feed;
