import React from 'react';

const Doctor = ({doctor}) => {
  const { name, img, degree } = doctor;
  return (
    <div className=' col-lg-4 col-md-6 my-5'>
    <img className='mb-3 rounded' src={img} alt="" />
      <h2>{name}</h2>   
      <h4>{degree}</h4>  
  </div>
  );
};

export default Doctor;