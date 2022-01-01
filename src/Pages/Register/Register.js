import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const Register = () => {
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }
  const handleRegistration = e => {
    e.preventDefault();

        console.log(email, password);
  
  }
  return (
    <div  className='text-center mx-5'>
      <h1>Please Register Here</h1>
      <br />
      <form onSubmit={handleRegistration}>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange  } type="password" className="form-control" id="inputPassword3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-success">Sign in</button>
</form>
      <br />
      <Link to="/login">Already Registered?</Link>

    </div>
  );
  
};

export default Register;