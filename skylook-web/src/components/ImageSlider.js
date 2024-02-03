import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './ImageSlider.css';

// const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <img src="/site/cu.jpg" onDragStart={handleDragStart} role="presentation" />,
//   <img src="/site/cu.jpg" onDragStart={handleDragStart} role="presentation" />,
//   <img src="/site/cu.jpg" onDragStart={handleDragStart} role="presentation" />,
//   <img src="/site/cu.jpg" onDragStart={handleDragStart} role="presentation" />,
//   <img src="/site/cu.jpg" onDragStart={handleDragStart} role="presentation" />,
//   <img src="/site/cu.jpg" onDragStart={handleDragStart} role="presentation" />,
//   <img src="/site/cu.jpg" onDragStart={handleDragStart} role="presentation" />,
//   <img src="/site/cu.jpg" onDragStart={handleDragStart} role="presentation" />,
//   <img src="/site/cu.jpg" onDragStart={handleDragStart} role="presentation" />,


// ];


const responsive = {
    0: { items: "/site/cu.jpg" },
    568: { items:"/site/cu.jpg" },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1"> <img src="/site/cu.jpg" role="presentation" /></div>,
    <div className="item" data-value="2"><img src="/site/cu.jpg"role="presentation" /></div>,
    <div className="item" data-value="1"> <img src="/site/cu.jpg" role="presentation" /></div>,
    <div className="item" data-value="2"><img src="/site/cu.jpg"role="presentation" /></div>,<div className="item" data-value="1"> <img src="/site/cu.jpg" role="presentation" /></div>,
    <div className="item" data-value="2"><img src="/site/cu.jpg"role="presentation" /></div>,<div className="item" data-value="1"> <img src="/site/cu.jpg" role="presentation" /></div>,
    <div className="item" data-value="2"><img src="/site/cu.jpg"role="presentation" /></div>,
  
];


function ImageSlider() {
  return (
    <div className='img_slider'>
         <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        dotsDisabled="false"
    />
    </div>
  )
}

export default ImageSlider


