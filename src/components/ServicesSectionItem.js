import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac } from 'react-icons/md';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem() {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">
        <MdDesktopMac />
        <div className="servicesItem__title">Web Design</div>
        <PText>Dummy text for my description</PText>
      </div>
    </ItemStyles>
  );
}
