import React from 'react';
import HeroImg from '../assets/images/banner.png';
import PText from './PText';

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero__heading">
          <span> Hello, This is </span>
          <span>Dibya Ranjan </span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>

        <div className="hero__info">
          <PText> This is my text </PText>
        </div>
      </div>
    </div>
  );
}
