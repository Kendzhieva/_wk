import { ChatBlock } from 'components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllChats } from 'redux/features/chatSlice';

function Chats() {
  const { list } = useSelector(state => state.chat)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllChats())
  }, [])

  console.log(list);

  return (
    <div>
      {
        list.map((chat) => {
          return <ChatBlock chat={chat} />
        })
      }
    </div>
  );
}

export default Chats;
