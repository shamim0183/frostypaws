import React from 'react';
import { AuthContext } from '../context/AuthContext';
import useAuth from '../hooks/useAuth';

const AuthProvider = ({ children }) => {
  

  const authInfo = useAuth()

  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;