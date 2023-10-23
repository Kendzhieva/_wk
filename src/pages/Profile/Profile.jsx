import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getMyRequest, getUserByID, removeFriend, sendFriendRequest } from 'redux/features/otherUsersSlice';
import style from './Profile.module.css'
import { createPost } from 'redux/features/postSlice';
import { toast } from 'react-toastify';
import userAvatarPlaceholder from 'assets/image/user/userDefaultAvatar.png'

const Profile = () => {
  const [isProfileHasInFriends, setIsProfileHasInFriends] = useState('non')

  const { profileId } = useParams();
  const dispatch = useDispatch()
  const { user: authedUser } = useSelector(state => state.user)
  const { user, status, error } = useSelector(state => state.otherUsers)

  useEffect(() => {
    dispatch(getUserByID(profileId))

    let friendRequest;

    dispatch(getMyRequest())
      .then(({ payload = [] }) => {
        friendRequest = payload.find((request) =>
          request.senderId === authedUser._id &&
          request.receiverId === profileId
        )
      })

    setIsProfileHasInFriends(
      friendRequest
        ? friendRequest.status
        : authedUser.friends.some(friendID => friendID === profileId)
          ? 'has'
          : 'non'
    )
  }, [profileId])


  const FriendRequestHandle = () => {
    if (isProfileHasInFriends !== 'non' || isProfileHasInFriends !== 'has') return
    if (isProfileHasInFriends === 'non') {
      dispatch(removeFriend(profileId))
        .then(({ payload }) => toast.success(payload.message))
    } else {
      dispatch(sendFriendRequest(profileId))
        .then(({ payload }) => toast.success(payload.message))
    }

  }

  if (error) {
    return <h2>{error.message || 'произошли технические шоколадки'}</h2>
  }

  if (status === 'idle' || status === 'loading') {
    return <h2>Loading...</h2>
  }

  return (
    <div className={style.profile}>
      <div className={style.top}>
        <div className={style.cover}>

        </div>
        <div className={style.profileHeader}>
          <img
            src={user.avatar || userAvatarPlaceholder}
            alt={`${user.name}`}
            className={style.avatar}

          />
          <div className={style.info}>
            <h2 className={style.name}>{user.name} {user.surname}</h2>
            <div className={style.fullInfo}>

            </div>
          </div>
          {
            authedUser._id === profileId
              ?
              <div className={style.handlers}>
                <button className={style.button}><Link to={'/edit'}>Редактировать</Link></button>
              </div>
              :
              <div className={style.handlers}>
                <button
                  disabled={isProfileHasInFriends === 'pending'}
                  onClick={FriendRequestHandle}
                  className={style.button}
                >
                  {isProfileHasInFriends === 'non'
                    ? ' Удaлить из друзей'
                    : isProfileHasInFriends === 'pending'
                      ? 'в ожидании'
                      : 'Дoбавить в друзья '}
                </button>
              </div>
          }

        </div>
      </div>
      <div className={style.bottom}>
        <section>{/* <createPost/> */}</section>
        <div className='aside-container'>ASIDE PANEL</div>
      </div>
    </div>
  )

};

export default Profile;
