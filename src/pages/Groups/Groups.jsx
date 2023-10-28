import { GroupBlock } from 'components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGroups } from 'redux/features/groupsSlice';
import styles from './groups.module.css'

function Groups() {
  const { groups } = useSelector((state) => state.groups)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllGroups())
  }, [])

  return (
    <div className={styles.wrapper}>
      {
        groups.map((group) => {
          return <GroupBlock group={group} />
        })
      }
    </div>
  );
}

export default Groups;