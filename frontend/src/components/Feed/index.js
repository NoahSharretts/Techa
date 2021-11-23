import './Post.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, deletePost, getPostById } from '../../store/post'
import Post from './Post';

function Feed() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts)


  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  
  return (
    <div className='feedContainer'>
      {Object.values(posts).map((post) => (
        <div className='postContainer' key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  )
}

export default Feed;
