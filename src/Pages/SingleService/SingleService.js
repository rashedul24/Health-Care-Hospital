import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleService = () => {
  const { serviceId } = useParams();
  const [servicesInfo, setServicesInfo] = useState([]);
  const [singleService, setSingleService] = useState({});
  useEffect(() => {
    fetch("/services.json")
      .then(res => res.json())
      .then(data => setServicesInfo(data))
  }, []);

  useEffect(() => {
    const service = servicesInfo.find(serviceInfo => serviceInfo?.id === serviceId) 
    setSingleService(service)
  },[servicesInfo])
  
  return (
    <div className='my-2'>
      <h2>Service Name: {singleService?.name} </h2>
      <img className='rounded mt-3' src={singleService?.img} alt="" />
    </div>
  );
};

export default SingleService;