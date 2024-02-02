import React from 'react';
import '../App.css';
// import { Button } from './Button';
import Button from 'react-bootstrap/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <div className="hero-text">
      <h1>SkyLook Productions</h1>
      <p>Sign Board & Interiors</p>
      <p>We build Indoor and Outdoor Signage that make businesses.</p>
      <div className='hero-btns'>
        <Button variant="outline-info"> GET STARTED</Button>
        <Button variant="outline-info"> WATCH TRAILER <i className='far fa-play-circle' /></Button>
      </div> 
      </div>
     
      <div class="ocean">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div>
    </div>
  );
}

export default HeroSection;
