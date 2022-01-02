import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const { singInUsingGoogle} = useAuth();
  const auth = getAuth();
  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNameChange = e => {
    setName(e.target.value);
  }


  const toggleLogin = e => {
    setIsLoggedIn(e.target.checked)
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }
  const handleRegistration = e => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password should be 6 characters')
    }
    isLoggedIn ? loginTask(email, password) : createNewUser(email, password);
  
  }

  const loginTask = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user
        console.log(user);
        setError('')
      })
      .catch(error => {
        setError(error.message);
    })
  }

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      setError('');
      emailVerification()
      setUserName();
    })
    .catch(error => {
      setError(error.message);
  })
  }
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
    .then(result=>{})
  }
  
  const emailVerification = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
      
    })
  }
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(result => {
      
    })
  }

  return (
    <div  className=' mx-5'>
      <form onSubmit={handleRegistration}>
        <h2 className='text-primary'>Please {isLoggedIn ? 'Login' : 'Register' }</h2>
  {!isLoggedIn && <div className="row mb-3">
    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input onBlur={handleNameChange} type="text" className="form-control w-50" id="inputName" placeholder='Your Name' required/>
    </div>
  </div>}
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control w-50" id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange  } type="password" className="form-control w-50" id="inputPassword3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check d-flex justify-content-start">
        <input onChange={toggleLogin} className="form-check-input me-2" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1"> Already Registered?
        </label>
      </div>
    </div>
        </div>
        <div className="row text-danger mb-3">{ error}</div>
        <button type="submit" className="btn btn-success">{isLoggedIn ? 'Login' : 'Register'}</button>
        <button onClick={handleResetPassword} type="button" className="btn btn-secondary ms-2">Reset Password</button>
</form>
      

      <div  className='text-center'>
            <h4 >Or</h4>
            <button onClick={singInUsingGoogle}  className='btn btn-primary mb-3' >Google Sign In</button>
            
        </div>

    </div>
  );
  
};

export default Register;