import {
  Action, Containers, Goods, Header, Info,
  Links, Offer, Similar, Subscribers
} from 'components/Group'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGroupInfo } from 'redux/features/groupsSlice';

function Group() {

  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(getGroupInfo(id))
  }, [])

  return (
    <>
      <div>
        <Header />
        <Info />
        <Similar />
        <Links />
        {/* <Goods /> */}
        <Offer />
      </div>

      <div className='aside-container'>
        <Action />
        <Subscribers />
        {/* <Containers /> */}
      </div>
    </>
  );
}

export default Group;

