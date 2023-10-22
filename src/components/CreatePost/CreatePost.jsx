import { useRef, useState } from 'react';
import styles from './CreatePost.module.css';
import { BsEmojiSmile } from 'react-icons/bs'
import { LuImagePlus } from 'react-icons/lu'
import { set } from 'react-hook-form';
import uploadPhoto from 'utils/uploadPhoto';
import useTextArea from 'hooks/useTextArea';
import { useDispatch } from 'react-redux';
import { createPost } from 'redux/features/postSlice';


function CreatePost() {

  const [postTitleValue, setPostTitleValue] = useState('')
  const [postContent, setPostContent] = useState('')
  const [coverUrl, setCoverUrl] = useState('')

  const postContentRef = useRef()
  const dispatch = useDispatch()

  useTextArea(postContentRef.current, postContent)

  const handleUploadCover = async (e) => {
    const selectedFile = e.target.files[0]
    const selectedFileUrl = await uploadPhoto(selectedFile)
    setCoverUrl(selectedFileUrl)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      title: postTitleValue,
      content: postContent,
      image: coverUrl
    }
    dispatch(createPost(body))
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>

      <h3 className={styles.title}>Создание поста</h3>

      <div className={styles.wrapper}>
        <input
          className={styles.post_title}
          type='text' placeholder='Заголовок'
          onChange={(e) => setPostTitleValue(e.target.value)}
          value={postTitleValue}
        />
        <BsEmojiSmile color='var(--secondary-color)' size={"20px"} />
        <textarea
          className={styles.post_content}
          placeholder='Напиите...'
          rows={'7'}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </div>

      {coverUrl &&
        <img
          className={styles.cover}
          src={coverUrl}
          alt={postTitleValue ? `Фото -  ${postTitleValue}` : 'Изображение поста'}
        />
      }

      <div className={styles.handlers}>
        <div className={styles.upload}>
          <label title='Загрузить изображение'>
            <LuImagePlus color='var(--secondary-color)' size={"20px"} />
            <input
              type='file'
              accept='image/*'
              onChange={handleUploadCover}
            />
          </label>
        </div>
        <button className={styles.btn} type='submit'>Отправить</button>
      </div>

    </form>
  );
}

export default CreatePost;
