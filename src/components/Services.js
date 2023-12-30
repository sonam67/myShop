import React from 'react'
import styled from 'styled-components'
import {TbTruckDelivery} from 'react-icons/tb';
import {MdSecurity} from 'react-icons/md';
import {GiReceiveMoney} from 'react-icons/gi';
import {RiSecurePaymentLine} from 'react-icons/ri';

const Services = () => {
  return (
    <>
      <Wrapper>
        <div className='container'>
            <div className='grid grid-three-column'>
                <div className='services-1'>
                    <div>
                        <TbTruckDelivery className="icon"/>
                        <h3>Super Fast and Free Delivery</h3>
                    </div>
                </div>
                <div className='services-2'>
                    <div className='services-colum-2-1'>
                        <div>
                            <MdSecurity className="icon"/>
                            <h3>Non-contact Shipping</h3>
                        </div>
                    </div>
                    <div className='services-colum-2-2'>
                        <div>
                            <GiReceiveMoney className="icon"/>
                            <h3>Money-back Guaranteed</h3>
                        </div>
                    </div>
                </div>
                <div className='services-3'>
                    <div>
                        <RiSecurePaymentLine className="icon"/>
                        <h3>Super Secure Payment System</h3>
                    </div>
                </div>
            </div>
        </div>
      </Wrapper>
    </>
  )
};
const Wrapper = styled.section`
  padding: 9rem 0;

  .grid {
    gap: 4.8rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    
  }
  .services-1{
    border: solid #2b80e2 .2rem;
  }
  .services-3{
    border: solid green .2rem;
  }
  .services-1:hover{
    background-color: #2b80e2;
    color: white;
  }
  .services-3:hover{
    background-color: green;
    color: white;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2-1 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      border-color: "#8a2be2";
      border: solid #9b28a4 .2rem;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
    .services-colum-2-2 {
        background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      border-color: "#8a2be2";
      border: solid orangered .2rem;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }
  .services-colum-2-2:hover{
    background-color: orangered;
    color: white;
  }
  .services-colum-2-1:hover{
    background-color: #9b28a4;
    color: white;
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;

export default Services
