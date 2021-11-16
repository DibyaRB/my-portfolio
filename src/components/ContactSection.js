import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ContactInfoItem from './ContactInfoItem';
import ContactForm from './ContactForm';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }

  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }

  .left {
    width: 100%;
    max-width: 40%;
  }
  .right {
    width: 100%;
    max-width: 40%;
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact" subheading="Get in Touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+91 80939 97289" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="dibyabhoidibya@gmail.com"
            />
            <ContactInfoItem text="Bengaluru, Karnataka, India" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
