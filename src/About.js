import { useProductContext } from "./context/productContext";
import HeroSection from './components/HeroSection';

const About = () => {
  const { myName } = useProductContext();
  const data ={
    name: 'Ecommerce Plateform',
  }
  const photo={
    img: 'images/shop2.jpg',
  }
  return (

    <div>
      {myName}
      <HeroSection mydata={data} mydata2={photo}/>
    </div>
  );
};

export default About
