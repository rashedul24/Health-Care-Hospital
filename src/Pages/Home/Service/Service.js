import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
  const { img, name, id } = service;
  return (
    <div className='service col-lg-4 col-md-6'>
      <img  src={img} alt="" />
      <h2>{name}</h2>
      <Link to={`/singleService/${id}`}>
      <button className='btn my-3 btn-primary'>Service Details</button></Link>
      
    </div>
  );
};

export default Service; 