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
      <img className='rounded mt-3' src={singleService?.img} alt="" />
      <h4 className='my-3'>Service Name: {singleService?.name} </h4>
      <p><span className='fw-bold'>Description: </span>{  singleService?.description}</p>
    </div>
  );
};

export default SingleService;