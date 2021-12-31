import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);
  
  
  return (
    <div className='row m-0 bg-info'>
      <h2 className='my-4'>Our Services</h2>

      {
        services.map(service => <Service
        key={service.id}
        service={service}
        
        ></Service>)
     }
    </div>
  );
};

export default Services;