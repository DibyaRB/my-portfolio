import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span> Dibya Ranjan </span>
            </p>

            <h2 className="about__heading">A UI Developer</h2>
            <div className="about__info">
              <PText>
                I am from Bengaluru, Karnataka, India. Since my childhood I have
                always loved Art and Design. I love to create things that are
                useful to others.
                <br />
                <br />I started programming since I was doing my Bachelors in
                Computer Science and Engineering. I loved it and now I have the
                opportunity to create beautiful and aesthetic user interfaces. I
                find it really interesting and I enjoy this process a lot.
                <br />
                <br />
                My Vision is to make the world a better place. Now almost
                everything is becoming better than ever. It's time for use to
                create beautiful things so that the world can be a better place.
              </PText>
            </div>
            <Button btnText="Resume" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="dibyaimg" />
          </div>
        </div>

        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem />
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}
