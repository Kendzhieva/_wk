import styles from './Info.module.css'

//icon
import { RxTextAlignLeft } from 'react-icons/rx';
import { FaEarthEurope } from 'react-icons/fa6';
import { HiOutlinePhone } from 'react-icons/hi';
import { PiMapPinFill } from 'react-icons/pi';
import { useSelector } from 'react-redux';

function Info() {
  const { group } = useSelector((state) => state.groups)

  return (
    <div className={styles.group_info}>
      <div className={styles.header}>
        <h2 className={styles.header_title}>{group.title}</h2>
        <p className={styles.header_text}>{group.description}</p>

      </div>

      <div className={styles.a}>
        <p className={styles.a_text}>Информация</p>

      </div>
      <div className={styles.info}>
        <div className={styles.uploads}>

          <div className={styles.upload}>
            <RxTextAlignLeft color='#9BA1AD' size={'24px'} />
            <p className={styles.upload_text}>Tips, Tricks & Tutorials</p>

          </div>

          <div className={styles.upload}>
            <FaEarthEurope color='#9BA1AD' size={'24px'} />
            <p className={styles.upload_link}>http://www.adobe.com/</p>
          </div>

          <div className={styles.upload}>
            <HiOutlinePhone color='#9BA1AD' size={'24px'} />
            <p className={styles.upload_link}>+7 (999) 212-21-12</p>
          </div>

          <div className={styles.upload}>
            <PiMapPinFill color='#9BA1AD' size={'24px'} />
            <p className={styles.upload_text}>Реки Мойки наб., 59, Санкт-Петербург</p>
          </div>
        </div>

        <div className={styles.map}>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2927.209094030168!2d74.57441515140269!3d42.80506729700766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eca11eb064457%3A0x66022e08725a3ba3!2z0KTQu9Cw0LzQuNC90LPQvg!5e0!3m2!1sru!2skg!4v1698306352514!5m2!1sru!2skg"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe> */}
        </div>

      </div>
    </div>
  );
}

export default Info;
