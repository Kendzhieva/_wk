import { useSelector } from 'react-redux';
import styles from './Subscribers.module.css';
import UserDefaultAvatar from 'assets/image/user/userDefaultAvatar.png'


function Subscribers() {

  const { group } = useSelector((state) => state.groups)

  const limitString = (string, limit) => {
    if (string && string.length > limit) {
      return `${string.slice(0, limit)}...`;
    } else {
      return string;
    }
  }
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
        <h4 className={styles.title}>
          Подписчики
          {group && group.members && (
            <span>{group.members.length}</span>
          )}
        </h4>

        <ul className={styles.subscribers_menu}>
          {group.members.map(member => (
            <li className={styles.item}>
              <img
                className={styles.avatar}
                src={UserDefaultAvatar}
                alt='AVATAR'
              />
              <p className={styles.name}>{limitString(member.userId, 6)}</p>
            </li>
          ))}


        </ul>
      </div>
    </>
  );
}

export default Subscribers;
