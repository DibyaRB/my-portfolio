import React from 'react';
import styled from 'styled-components';
import FooterColumn from './FooterColumn';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3 .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }

    .footer__col1 {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Dibya Ranjan Bhoi</h1>
          <PText>A User Interface Developer from Bengaluru, India.</PText>
        </div>
        <div className="footer__col2">
          <FooterColumn
            heading="Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterColumn
            heading="Contact"
            links={[
              {
                title: '+91 80939 97289',
                path: 'tel: +918093997289',
              },
              {
                title: 'dibyabhoidibya@gmail.com',
                path: 'mailto:dibyabhoidibya@gmail.com',
              },
              {
                title: 'Bengaluru, India',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterColumn
            heading="Social"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
              {
                title: 'LinkedIn',
                path: 'http://linkedin.com',
              },
            ]}
          />
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <PText> © 2021 - Dibya Ranjan | With &lt;3 </PText>
        </div>
      </div>
    </FooterStyles>
  );
}
