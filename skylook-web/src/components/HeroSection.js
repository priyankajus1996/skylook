import React from 'react';
import '../App.css';
// import { Button } from './Button';
import Button from 'react-bootstrap/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>SkyLook Productions</h1>
      <p>Sign Board & Interiors</p>
      <p>We build Indoor and Outdoor Signage that make businesses.</p>
       <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>  */}
        <Button variant="outline-info"> GET STARTED</Button>
        <Button variant="outline-info"> WATCH TRAILER <i className='far fa-play-circle' /></Button>

        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div> 
    </div>
  );
}

export default HeroSection;
