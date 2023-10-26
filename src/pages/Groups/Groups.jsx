import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGroups } from 'redux/features/groupsSlice';
import { Action, Header, Info, Subscribers } from 'components/Group'

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
      </div>

      <div className='aside-container'>
        <Action />
        <Subscribers />
      </div>
    </>
  );
}

export default Gruops;
