import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac, MdPhonelinkSetup, MdCode } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What I really do?" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            description="I am capable of creating Unique and highly performant User Interfaces."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            description="I am very passionate about React and Javascript."
          />
          <ServicesSectionItem
            title="App Development"
            description="I also create Mobile Apps with Eye Catching UI."
            icon={<MdPhonelinkSetup />}
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
