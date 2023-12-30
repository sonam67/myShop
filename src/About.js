import React from 'react'
import HeroSection from './components/HeroSection';

const About = () => {
  const data ={
    name: 'Ecommerce Plateform',
  }
  const photo={
    img: 'images/shop2.jpg',
  }
  return (

    <div>
      
      <HeroSection mydata={data} mydata2={photo}/>
    </div>
  );
};

export default About
