import React from 'react';
import Vision from './Vision/Vision';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Doctors from './Doctors/Doctors';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Doctors></Doctors>
      <Vision></Vision>
    </div>
  );
};

export default Home;