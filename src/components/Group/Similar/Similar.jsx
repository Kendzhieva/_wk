import React from 'react';
import UserDefaultAvatar from 'assets/image/user/userDefaultAvatar.png'
import styles from './Similar.module.css'


function Similar() {
  return (
    <div className={styles.similar}>

      <div className={styles.info}>
        <p className={styles.title}>Похожие сообщества</p>
        <p className={styles.close}>Скрыть</p>
      </div>

      <div className={styles.groups}>

        <div className={styles.group}>
          <img
            src={UserDefaultAvatar}
            alt='AVATAR'
            className={styles.avatar}
          />
          <p className={styles.name}>Vkontakte</p>
          <p className={styles.type}>Образование</p>
          <button className={styles.button}>Подписаться</button>
        </div>

        <div className={styles.group}>
          <img
            src={UserDefaultAvatar}
            alt='AVATAR'
            className={styles.avatar}
          />
          <p className={styles.name}>Vkontakte</p>
          <p className={styles.type}>Образование</p>
          <button className={styles.button}>Подписаться</button>
        </div>

        <div className={styles.group}>
          <img
            src={UserDefaultAvatar}
            alt='AVATAR'
            className={styles.avatar}
          />
          <p className={styles.name}>Vkontakte</p>
          <p className={styles.type}>Образование</p>
          <button className={styles.button}>Подписаться</button>
        </div>


      </div>
    </div>
  );
}

export default Similar;
