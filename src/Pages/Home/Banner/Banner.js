import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/patient.png';
import banner2 from '../../../images/banner/building.png';
import banner3 from '../../../images/banner/ot.jpg';

const Banner = () => {
  return (
    <>
      <Carousel fade>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 "
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='text-warning'>Patient Satisfaction</h3>
      
    </Carousel.Caption>
    
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 "
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className='text-warning'>Hospital Building</h3>
      
    </Carousel.Caption>

    
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 "
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className='text-warning'>Digital OT</h3>
      
    </Carousel.Caption>

    
  </Carousel.Item>
</Carousel>
    </>
  );
};

export default Banner;