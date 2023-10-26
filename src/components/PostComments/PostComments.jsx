import { useEffect, useState } from 'react';
import styles from './PostComments.module.css'

//icons
import { BsEmojiSmile } from 'react-icons/bs'
import { IoSend } from 'react-icons/io5'
import { useDispatch } from 'react-redux';
import { addPostComment, getPostComments } from 'redux/features/postSlice';



function PostComment({ showComments, postId, comments, setComments }) {

  const [commentValue, setCommentValue] = useState('')
  const dispatch = useDispatch()

  const addComment = (e) => {
    e.preventDefault()
    dispatch(addPostComment({ content: commentValue, postId }))
      .then(({ payload }) => {
        setCommentValue('')
        setComments((prev) => [...prev, payload])
      })
  }

  if (!showComments) return null
  return (
    <div className={styles.replies}>
      <div className={styles.comments}>

        {
          comments.map((comment) => {
            return (
              <div className={styles.comment}>
                <div className={styles.comment_avatar}>

                  <img
                    src='https://i.pinimg.com/474x/d1/4f/66/d14f66ddf892b7406a2113e022698a6e.jpg'
                    alt={comment.creatorId}
                  />
                </div>

                <div className={styles.content}>
                  <h4 className={styles.fullname}>{comment.creatorId}</h4>
                  <p className={styles.text}>{comment.content}</p>
                </div>
              </div>
            )
          })
        }


      </div>

      <form onSubmit={addComment} className={styles.addComment}>

        <div className={styles.wrapper}>
          <BsEmojiSmile color='var(--secondary-color)' size={"20px"} />
          <textarea
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
            className={styles.comment_content}
            placeholder='Напиите...'
            rows={'1'}
          />
          <button className={styles.btn} type='submit'><IoSend /></button>
        </div>

      </form>
    </div>
  );
}

export default PostComment;
