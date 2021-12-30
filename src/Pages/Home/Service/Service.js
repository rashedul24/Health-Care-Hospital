import React from 'react';
import './Service.css';

const Service = ({service}) => {
  const { img, name } = service;
  return (
    <div className='service col-lg-4 col-md-6'>
      <img  src={img} alt="" />
      <h2>{name}</h2>
      <button className='btn my-3 btn-primary'>Details</button>
      
    </div>
  );
};

export default Service;