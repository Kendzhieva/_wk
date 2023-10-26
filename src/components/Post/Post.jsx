import styles from './Post.module.css'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostComments, setLikePost } from 'redux/features/postSlice';

//icon
import { IoIosArrowDown } from 'react-icons/io'
import { GoHeart, GoHeartFill } from 'react-icons/go'
import { FaRegCommentAlt, FaCommentAlt } from 'react-icons/fa'
import { PiShareFat } from 'react-icons/pi'
import { FaEye } from 'react-icons/fa';
import PostComments from 'components/PostComments/PostComments';



function Post({ title, content, createdAt, creatorId, image, likes, _id }) {

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  const [liked, setLiked] = useState(likes.some(item => item === user._id))
  const [likeNum, setLikeNum] = useState(likes.length)
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState([])


  useEffect(() => {

    dispatch(getPostComments(_id))
      .then(({ payload }) => {
        setComments(payload)
      })

  }, [])

  const handleClickLike = () => {
    dispatch(setLikePost({ postId: _id })).then(() => {
      setLiked(!liked)
      setLikeNum(liked ? likeNum - 1 : likeNum + 1)
    })
  }

  const handleShowComments = () => {
    setShowComments((prev) => !prev)
  }

  return (
    <article className={styles.post}>
      <section className={styles.header}>

        <div className={styles.author}>
          <img
            className={styles.logo}
            src='https://avatars.mds.yandex.net/i?id=e708784c502029fd3580605e76109216_l-5761336-images-thumbs&n=27&h=480&w=480'
            alt='Figma community'
          />
          <div>
            <h4 className={styles.name}>Figma community</h4>
            <p className={styles.date}>{new Date(createdAt).toLocaleString('ru-RU', {
              hour: '2-digit',
              minute: '2-digit',
              day: "numeric",
              month: 'long',
              year: 'numeric'
            })}</p>
          </div>
        </div>
        <IoIosArrowDown color='#C1C5CC' size={"20px"} />
      </section>

      <section className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <p className={styles.text}>{content}
        </p>
        {image && <img
          className={styles.cover}
          src={image}
          alt={title}
        />}
      </section>

      <section>
        <div className={styles.uploads}>
          <div className={styles.left}>
            <div className={styles.upload} onClick={handleClickLike}>
              {liked ? <GoHeartFill color='#818C99' /> : <GoHeart color='#818C99' />}
              <p>{likeNum}</p>
            </div>
            <div className={styles.upload} onClick={handleShowComments}>
              {showComments ? <FaCommentAlt color='#818C99' /> : <FaRegCommentAlt color='#818C99' />}
              <p>{comments.length}</p>
            </div>
            <div className={styles.upload}>
              <PiShareFat color='#818C99' />
              <p>11</p>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.upload}>
              <FaEye color='#818C99' />
              <p>3789</p>
            </div></div>
        </div>

        <div>
        </div>
      </section>

      <PostComments showComments={showComments} comments={comments} setComments={setComments} postId={_id} />
    </article>
  );
}

export default Post;
