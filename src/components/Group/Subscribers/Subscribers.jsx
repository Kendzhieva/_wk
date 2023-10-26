import styles from './Subscribers.module.css';
import UserDefaultAvatar from 'assets/image/user/userDefaultAvatar.png'


function Subscribers() {
  return (
    <>
      <div className={styles.friends}>
        <h4 className={styles.title}>Подписано 58 друзей</h4>
        <div className={styles.avatars}>
          <img
            src={UserDefaultAvatar}
            alt='AVATAR'
            className={styles.friends_avatar}
          />
          <img
            src={UserDefaultAvatar}
            alt='AVATAR'
            className={styles.friends_avatar}
          />
        </div>
      </div>


      <div className={styles.subscribers}>
        <h4 className={styles.title}>Подписчики <span>29 289</span></h4>

        <ul className={styles.subscribers_menu}>
          <li className={styles.item}>
            <img
              className={styles.avatar}
              src={UserDefaultAvatar}
              alt='AVATAR'
            />
            <p className={styles.name}>Elvis</p>
          </li>

          <li className={styles.item}>
            <img
              className={styles.avatar}
              src={UserDefaultAvatar}
              alt='AVATAR'
            />
            <p className={styles.name}>Sara</p>
          </li>

          <li className={styles.item}>
            <img
              className={styles.avatar}
              src={UserDefaultAvatar}
              alt='AVATAR'
            />
            <p className={styles.name}>Daniel</p>
          </li>

          <li className={styles.item}>
            <img
              className={styles.avatar}
              src={UserDefaultAvatar}
              alt='AVATAR'
            />
            <p className={styles.name}>Lucas</p>
          </li>

          <li className={styles.item}>
            <img
              className={styles.avatar}
              src={UserDefaultAvatar}
              alt='AVATAR'
            />
            <p className={styles.name}>Taylor</p>
          </li>

          <li className={styles.item}>
            <img
              className={styles.avatar}
              src={UserDefaultAvatar}
              alt='AVATAR'
            />
            <p className={styles.name}>Lucas</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Subscribers;
