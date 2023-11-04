import styles from './ChatInput.module.css';

//icons
import { BsEmojiSmile } from 'react-icons/bs'
import { IoSend } from 'react-icons/io5'

function ChatInput() {
  return (
    <div className={styles.chatInput}>
      <form className={styles.addComment}>

        <div className={styles.wrapper}>
          <BsEmojiSmile color='var(--secondary-color)' size={"20px"} />
          <textarea
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

export default ChatInput;
