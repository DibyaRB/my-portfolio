import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

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
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top_section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
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
            <Button btnText="Resume" btnLink="/Dibya-Ranjan-Bhoi-Resume.pdf" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="dibyaimg" />
          </div>
        </div>

        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['Sri Satya Sai Vidya Vihar', 'GPA of 9.2']}
            />
            <AboutInfoItem
              title="School"
              items={['Mothers Public School', '90.3%']}
            />
            <AboutInfoItem
              title="University"
              items={['KIIT University, Bhubaneswar', 'GPA of 8.85']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'React']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>
            <AboutInfoItem title="2016 - 2020" items={['Support Associate']} />
            <AboutInfoItem
              title="2020 - 2021"
              items={['Developer Associate']}
            />
            <AboutInfoItem title="2021 - Now" items={['Developer']} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
