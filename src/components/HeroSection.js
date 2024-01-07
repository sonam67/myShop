import React from "react";
import { NavLink } from "react-router-dom";
import {Button} from "../styles/Button";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyle";

const HeroSection = ({mydata,mydata2}) => {
    const {name}=mydata;
    const {img}=mydata2;
  return (
    <Wrapper>
        <GlobalStyle/>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>{name}</h1>
            <p>
              gfjdg jdfhjs ekjhj rjthjyty weklwjen wqkeuiwjd jqqnladb ksd;woes
              bevwabnvewb awbvebwv vcacsd bv nbv nbthrb nb nebtr hfj asa swdsd
              dfdf mbmnbfd nbsvdebvr nbev.
            </p>
            <NavLink to="/cart">
                <Button>Shop Now</Button>
            </NavLink>
          </div>
          <div className="hero-section-img">
            <figure>
                <img src={img} alt="hero section img" className="img-style"></img>
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 8rem;
    height: 8rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0 ;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: #f8ce46;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
