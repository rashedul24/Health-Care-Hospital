import React from 'react';

const Service = ({service}) => {
  const { img, name } = service;
  return (
    <div className=' col-lg-4 col-md-6 my-3'>
      <img className='mb-3 rounded' src={img} alt="" />
      <h2>{name}</h2>
      <button className='btn btn-primary'>Details</button>
      
    </div>
  );
};

export default Service;