import { ChatInput, ChatMsgContainer } from 'components/Chat';
import styles from './Chat.module.css';

function Chat() {
  return (
    <>
      <div className={styles.chat}>
        <ChatMsgContainer />
        <ChatInput />
      </div>
    </>
  );
}

export default Chat;
