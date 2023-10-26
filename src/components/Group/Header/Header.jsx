import React from 'react';
import styles from './Header.module.css'
import UserDefaultAvatar from 'assets/image/user/userDefaultAvatar.png'
import { MdKeyboardArrowDown } from 'react-icons/md';


function Header() {
  return (

    <div className={styles.basic}>
      <div className={styles.cover}></div>

      <div className={styles.info}>
        <img
          src={UserDefaultAvatar}
          alt='AVATAR'
          className={styles.avatar}
        />
        <div className={styles.editable}>
          <p>asdfgh</p>
        </div>
        <button className={styles.button} type='submit'>Записаться</button>
        <button className={styles.button_active} type='submit'>Вы участник <MdKeyboardArrowDown /></button>

      </div>

    </div>


  );
}

export default Header;
