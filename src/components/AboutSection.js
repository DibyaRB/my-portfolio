import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import SectionTitle from './SectionTitle';
import Button from './Button';
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }

  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }

  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 950px) {
    .aboutsection__left {
      flex: 4;
    }
    .aboutsection__right {
      flex: 3;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }

    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }

    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            heading="About me"
            subheading="Let me introduce myself"
          />
          <PText>
            I am a Web Developer from Bengaluru, India. I create enterprise
            grade User Interfaces. I love art and always try to show unique
            views to the audience through my design.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" outline />
          </div>
        </div>

        <div className="aboutSection__right">
          <img src={AboutImg} alt="aboutImage" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
