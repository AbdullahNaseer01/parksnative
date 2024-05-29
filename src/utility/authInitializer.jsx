import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeAuthState } from '../store/slices/authSlice'; // Adjust the import path accordingly

const AuthInitializer = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuthState());
  }, [dispatch]);

  return children;
};

export default AuthInitializer;
