import React from 'react';
import styles from './Offer.module.css'
import Avatar from 'assets/image/user/userDefaultAvatar.png'

//icon
import { PiMusicNotesBold } from 'react-icons/pi';
import { MdOutlineInsertPhoto, MdOutlineSlowMotionVideo } from 'react-icons/md';

function Offer() {
  return (
    <div className={styles.offer}>
      <div className={styles.frame}>
        <img
          className={styles.avatar}
          src={Avatar}
          alt='AVATAR'
        />
        <input placeholder='Предложите новость' className={styles.input} />
      </div>

      <div className={styles.vectors}>
        <div className={styles.vector}>
          <MdOutlineInsertPhoto size={'20px'} color='var(--secondary-color)' />
          <MdOutlineSlowMotionVideo size={'20px'} color='var(--secondary-color)' />
          <PiMusicNotesBold size={'20px'} color='var(--secondary-color)' />

        </div>
        <div className={styles.color}>
          <img
            src='https://s3-alpha-sig.figma.com/img/7b94/deba/58c778b86e24cd1a748fb2725da85f0a?Expires=1699228800&Signature=RuybGJP-P~A~T8AeEZ8wp8~BXbEghpphDQzCURTwfzwoPBa4EW1VTnmCSYclinu-R~mIb0MKEulSC99I3fZnhRqkdVnYgzELexp4BqbR~HojQBI3c8bU95vgjsXCegGGpxy1Agd7MDlLFrC5GdjxXtSw78qCi55SSAWWChN0cIirDfNG4Gy2PytFIA7-TsYxiWGxKjJT7Lk10c3~m3OMGMaekJDzI9GBZw7eLxnmSdMOmfK42BsV-nMWvWAK9lgURAdBc1RDthkgM5UfANSv67k04-ZulEf52F-Z17xdSX9i2p8lzh2~92r3nwQugR7WapkcnL9G6oGw4qSaGQbFdQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            alt='COLOR'
          />

        </div>
      </div>

    </div>
  );
}

export default Offer;
