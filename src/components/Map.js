import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImage from '../assets/images/map.png';

const MapStyles = styled.div`
  background: url(${MapImage}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    max-width: 300px;
    width: 100%;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }

  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here I Am</h3>
          <PText>Bengaluru, Karnataka, India</PText>
          <a
            href="https://goo.gl/maps/p4koVCsnKrw5sFxY7"
            target="_blank"
            rel="noreferrer"
            className="map__card__link"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
