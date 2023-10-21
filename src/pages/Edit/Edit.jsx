import { useDispatch, useSelector } from 'react-redux';
import styles from './Edit.module.css';
import { useForm } from 'react-hook-form';
import { changeUserAvatar, editUser } from 'redux/features/userSlice';
import { useState } from 'react';
import UserDefaultAvatar from 'assets/image/user/userDefaultAvatar.png'
import uploadPhoto from 'utils/uploadPhoto';
import { toast } from 'react-toastify';

const Edit = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const [isEditable, setIsEditable] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState(user.avatar || UserDefaultAvatar)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const fullName = `${user.name || ''} ${user.surname || ''}`

  const handleEditUser = (data) => {
    dispatch(editUser({ userId: user._id, data }))
      .then(() => toast.success('даныве изменены'))
    setIsEditable(false)
  };

  const handleUploadAvatar = async (e) => {
    const selectedFile = e.target.files[0]
    const uploadedPhotoUrl = await uploadPhoto(selectedFile)
    dispatch(changeUserAvatar({ avatarUrl: uploadedPhotoUrl, userId: user._id }))
      .then(() => {
        toast.success('ваш avatar изменён')
        setAvatarUrl(uploadedPhotoUrl)
      })
  }

  return (
    <>
      <section>
        <div className={styles.basic}>
          <h4>Профиль</h4>
          <div className={styles.cover}></div>
          <div className={styles.info}>
            <label className={styles.avatar}>
              <img
                src={avatarUrl}
                alt='AVATAR'
              />
              <input type='file' name='avatar' onChange={handleUploadAvatar} />
            </label>
            {isEditable
              ?
              <form onSubmit={handleSubmit(handleEditUser)}>
                <input
                  {...register('name')}
                  type='text'
                  placeholder='Имя'
                  defaultValue={user.name}
                />
                <input
                  {...register('surname')}
                  type='text'
                  placeholder='Фамилия'
                  defaultValue={user.surname}
                />
                <button type='submit'>Cохранить</button>
              </form>
              :
              <>
                <div className={styles.editable}>
                  <p>{fullName}</p>
                </div>
                <button type='submit'>Изменить</button>
              </>
            }
          </div>
        </div>
        <div className={styles.additional}></div>
      </section>
      <div className='aside-container'>COMMUNITY</div>
    </>
  );
};

export default Edit;
