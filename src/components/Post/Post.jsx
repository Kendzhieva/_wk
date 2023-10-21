import styles from './Post.module.css'
import React, { useState } from 'react';

//icon
import { IoIosArrowDown } from 'react-icons/io'
import { GoComment, GoHeart, GoHeartFill } from 'react-icons/go'
import { PiShareFat } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux';
import { setLikePost } from 'redux/features/postSlise';



function Post({ title, content, createdAt, creatorId, image, likes, _id }) {

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  const [liked, setLiked] = useState(likes.some(item => item === user._id))

  const handleClickLike = () => {
    dispatch(setLikePost({ postId: _id })).then(() => {
      setLiked(!liked)
    })
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
        <div>
          <div onClick={handleClickLike}>
            {liked ? <GoHeartFill /> : <GoHeart />}
            <p>{likes.length}</p>
          </div>
          <div>
            <GoComment />
            <p>12</p>
          </div>
          <div>
            <PiShareFat />
            <p>11</p>
          </div>
        </div>
        <div>

        </div>
      </section>
    </article>
  );
}

export default Post;
