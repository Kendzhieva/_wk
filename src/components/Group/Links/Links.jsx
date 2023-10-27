import React from 'react';
import styles from './Links.module.css'

function Links() {
  return (
    <div className={styles.links}>
      <div className={styles.link}>
        <img
          className={styles.img}
          src='https://newxboxone.ru/wp-content/uploads/2021/08/4afppzod93e71-scaled.jpg'
          alt='IMG'
        />
        <p className={styles.text}> Ссылка с материал...</p>
      </div>

      <div className={styles.link}>
        <img
          className={styles.img}
          src='https://newxboxone.ru/wp-content/uploads/2021/08/4afppzod93e71-scaled.jpg'
          alt='IMG'
        />
        <p className={styles.text}> Ссылка с материал...</p>
      </div>

      <div className={styles.link}>
        <img
          className={styles.img}
          src='https://newxboxone.ru/wp-content/uploads/2021/08/4afppzod93e71-scaled.jpg'
          alt='IMG'
        />
        <p className={styles.text}> Ссылка с материал...</p>
      </div>

    </div>
  );
}

export default Links;
