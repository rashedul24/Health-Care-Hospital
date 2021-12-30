import React from 'react';

const Department = ({ department }) => {
  const { name, img } = department;
  return (
    <div className=' col-lg-4 col-md-6 my-3'>
      <img className='mb-3 rounded' src={img} alt="" />
      <h2>{name}</h2>      
    </div>
  );
};

export default Department;