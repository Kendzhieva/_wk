import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGroups } from 'redux/features/groupsSlice';
import { Action, Goods, Header, Info, Links, Similar, Subscribers } from 'components/Group'
import styles from './groups.module.css'

function Gruops() {

  const { groups } = useSelector((state) => state.groups)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllGroups())
  }, [])

  console.log(groups);
  return (
    <>


      <div>
        <Header />
        <Info />
        <Similar />
        <Links />
        <Goods />
      </div>

      <div className='aside-container'>
        <Action />
        <Subscribers />
      </div>
    </>
  );
}

export default Gruops;
