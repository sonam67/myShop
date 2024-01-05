import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import {FaDiscord,FaInstagram,FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get Started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>
        </div>
      </section>
      <footer>
        <div className="container grid grid-four-column">
            <div className="footer-about">
                <h3>My Shop</h3>
                <p>hfghj sdnbnvc nbcnbcv mvbmms erbrr ertnrtb SVsvdasm nbvnc ljdfvkl</p>
            </div>
            <div>
                <h3>Subscribe to get important Updates</h3>
                <div>
                    <input type="email" placeholder="Email"></input>
                    <input type="submit" value="Subscribe"></input>
                </div>
            </div>
            <div>
                <h3>Follow Us</h3>
                <div className="footer-social--icons">
                    <div>
                        <FaDiscord className="icons"/>
                    </div>
                    <div>
                        <FaInstagram className="icons"/>
                    </div>
                    <div>
                        <FaFacebook className="icons"/>
                    </div>
                </div>
            </div>
            <div className="footer-contact">
                <h3>Call Us</h3>
                {''/*<a href="tel:1234566575">+911234566575</a>*/}
                <h3>+911234567</h3>
            </div>
        </div>
        <div className="footer-bottom--section">
            <hr/>
            <div className="container grid grid-two-column">
              <p>@{new Date().getUTCFullYear()} MyShop. All Rights Reserved.</p>
            <div>
                <h3>PRIVACY POLICY</h3>
                <h3>TERMS & CONDITIONS</h3>
            </div>
            </div>
        </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
