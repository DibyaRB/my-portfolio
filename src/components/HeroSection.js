import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/banner.png';
import PText from './PText';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }

  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span> Hello, This is </span>
            <span className="hero__name"> Dibya Ranjan </span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>

          <div className="hero__info">
            <PText>
              {' '}
              I am an UI Developer with a 5 Years Industry Expertise on
              designing User Interfaces. I love to design and make new web
              experiences for the people.{' '}
            </PText>
            <Button
              btnLink="/projects"
              btnText="See my Works"
              outline={false}
            />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="" />
            </div>
            <div className="hero_scoial_text">
              <ul>
                <li>
                  <a
                    href="http://facebook.com/at.the.edge.of.insanity"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="http://facebook.com/at.the.edge.of.insanity"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="http://facebook.com/at.the.edge.of.insanity"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
                <li>
                  <a
                    href="http://facebook.com/at.the.edge.of.insanity"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TW
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hero__scrollDown">
            <p>Scroll</p>
            {/* <img src={ScrollDownArrow} alt="" /> */}
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
