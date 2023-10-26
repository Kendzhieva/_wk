import styles from './Action.module.css'

//icon
import { BiBell } from 'react-icons/bi'
import { RiChat3Line } from 'react-icons/ri'
import { PiShareFat } from 'react-icons/pi'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaRegStar } from 'react-icons/fa6'
import { HiSearch } from 'react-icons/hi'
import { GoStop } from 'react-icons/go'
import { useState } from 'react'

function Action() {

  const [showMenu, setShowMenu] = useState(false)


  return (
    <ul className={styles.menu}>
      <li className={styles.menu_item}>
        <RiChat3Line color='#528BCC' size={'24px'} />
        <div className={styles.info}>
          <h4 className={styles.text}>Написать сообщение</h4>
          <p className={styles.title}>Время ответа — 5 минут</p>
        </div>
      </li>

      <li className={styles.menu_item}>
        <BiBell color='#55677D' size={'24px'} />
        <div className={styles.info}>
          <h4 className={styles.title}>Включить уведомления</h4>
        </div>
      </li>

      <li className={styles.menu_item}>
        <PiShareFat color='#55677D' size={'24px'} />
        <div className={styles.info}>
          <h4 className={styles.title}>Рассказать друзьям</h4>
        </div>
      </li>

      {

        showMenu ?
          <>
            <li className={styles.menu_item}>
              <FaRegStar color='#55677D' size={'24px'} />
              <div className={styles.info}>
                <h4 className={styles.title}>Сохранить в закладках</h4>
              </div>
            </li>

            <li className={styles.menu_item}>
              <HiSearch color='#55677D' size={'24px'} />
              <div className={styles.info}>
                <h4 className={styles.title}>Скрыть похожие</h4>
              </div>
            </li>

            <li className={styles.menu_item}>
              <GoStop color='#55677D' size={'24px'} />
              <div className={styles.info}>
                <h4 className={styles.title}>Пожаловаться</h4>
              </div>
            </li>
          </>
          :
          <li onClick={() => setShowMenu(true)} className={styles.menu_item}>
            <FiMoreHorizontal color='#55677D' size={'24px'} />
            <div className={styles.info}>
              <h4 className={styles.title}>Еще</h4>
            </div>
          </li>



      }
    </ul>
  );
}

export default Action;
