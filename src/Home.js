import React from 'react'
import HeroSection from './components/HeroSection';
import { GlobalStyle } from './GlobalStyle';
import Trusted from './components/Trusted';
import Services from './components/Services';
import Contact from './Contact';

const Home = () => {
  const data ={
    name: 'My Shop',
  }
  const photo={
    img: 'images/shop.jpg',
  }
  return (
    <>
    <GlobalStyle/>
    <HeroSection mydata={data} mydata2={photo}/>
    <Services/>
    <Trusted/>
    <Contact/>
    </>
  );
};

export default Home;
