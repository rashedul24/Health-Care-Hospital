import React from 'react';
import Vision from '../../Vision/Vision';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Vision></Vision>
    </div>
  );
};

export default Home;