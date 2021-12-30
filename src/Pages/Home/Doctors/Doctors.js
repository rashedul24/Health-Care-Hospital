import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className='row  bg-success p-5'>
      <h2>Doctors Team</h2>

      {
        doctors.map(doctor => <Doctor
        key={doctor.id}
        doctor={doctor}
        
        ></Doctor>)
     }
    </div>
  );
};

export default Doctors;