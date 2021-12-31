import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { singInUsingGoogle} = useAuth();
  return (
    <div  className='text-center'>
            <h1 >Please Login</h1>
            <button onClick={singInUsingGoogle}  className='btn btn-primary' >Google Sign In</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
  );
};

export default Login;