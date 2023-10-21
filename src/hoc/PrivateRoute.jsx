import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

function PrivateRoutes({ children }) {
  const { user } = useSelector(state => state.user)
  return user ? children : <Navigate to={'/auth'} />
}

export default PrivateRoutes;
