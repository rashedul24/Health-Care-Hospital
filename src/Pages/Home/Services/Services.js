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
    <div className='row me-0 bg-info p-4'>
      <h2>Our Services</h2>

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