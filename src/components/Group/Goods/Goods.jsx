import React from 'react';
import styles from './Goods.module.css'

import { MdKeyboardArrowRight } from 'react-icons/md'

function Goods() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.title}>Товары <span>10</span></p>
      </div>
      <div className={styles.goods}>

        <div className={styles.good}>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNE3MQYwUmF1SJgo3IjBBuN9K9KMbp9LsmoA&usqp=CAU'
            alt='GoodsPhoto'
            className={styles.cover}
          />
          <p className={styles.name}>Adobe Illustrator: расшире...</p>
          <p className={styles.price}>690 ₽</p>
        </div>

        <div className={styles.good}>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNE3MQYwUmF1SJgo3IjBBuN9K9KMbp9LsmoA&usqp=CAU'
            alt='GoodsPhoto'
            className={styles.cover}
          />
          <p className={styles.name}>Adobe Illustrator: расшире...</p>
          <p className={styles.price}>690 ₽</p>
        </div>

        <div className={styles.good}>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNE3MQYwUmF1SJgo3IjBBuN9K9KMbp9LsmoA&usqp=CAU'
            alt='GoodsPhoto'
            className={styles.cover}
          />
          <p className={styles.name}>Adobe Illustrator: расшире...</p>
          <p className={styles.price}>690 ₽</p>
        </div>

      </div>
      <div className={styles.footer}>
        <p className={styles.showAll}>Показать все товары <MdKeyboardArrowRight /> </p>
      </div>
    </div>
  );
}

export default Goods;
