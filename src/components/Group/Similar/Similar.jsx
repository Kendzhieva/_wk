import React, { useEffect } from 'react';
import UserDefaultAvatar from 'assets/image/user/userDefaultAvatar.png'
import styles from './Similar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllGroups } from 'redux/features/groupsSlice';


function Similar() {

  const dispatch = useDispatch()
  const { groups } = useSelector(state => state.groups)

  useEffect(() => {
    dispatch(getAllGroups(3))
  }, [])

  return (
    <div className={styles.similar}>

      <div className={styles.info}>
        <p className={styles.title}>Похожие сообщества</p>
        <p className={styles.close}>Скрыть</p>
      </div>

      <div className={styles.groups}>

        {
          groups.map(group => (
            <div className={styles.group}>
              <img
                src={UserDefaultAvatar}
                alt='AVATAR'
                className={styles.avatar}
              />
              <p className={styles.name}>{group.title}</p>
              <p className={styles.type}>{group.description}</p>
              <button className={styles.button}>Подписаться</button>
            </div>
          ))
        }



      </div>
    </div>
  );
}

export default Similar;
