import Post from 'components/Post/Post';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from 'redux/features/postSlice';

function Feed() {

  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.posts)

  console.log(posts);

  useEffect(() => {

    dispatch(getPosts(posts))
  }, [])

  return (
    <>
      <div style={{ width: '100%' }}>
        {posts.map((post) => {
          return <Post {...post} />
        })}

      </div>
      <aside className='aside-container'>

      </aside>
    </>
  );
}

export default Feed;
