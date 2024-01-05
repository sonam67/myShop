import React from 'react'
import HeroSection from './components/HeroSection';
import { GlobalStyle } from './GlobalStyle';
import Trusted from './components/Trusted';
import Services from './components/Services';
import Contact from './Contact';
import FeatureProduct from './components/FeatureProduct';

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
    <FeatureProduct/>
    <Services/>
    <Trusted/>
    <Contact/>
    </>
  );
};

export default Home;
