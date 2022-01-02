import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children}) => {
  const { user } = useAuth();
  return (
    
      
      
        user.displayName ? children :
          <Navigate
            to= "/login"
          ></Navigate>
    
      

  );
};

export default PrivateRoute; 