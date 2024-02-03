import React from 'react';
import '../../App.css';
// import Cards from '../Cards';
import HeroSection from '../HeroSection';
import ImageSlider from '../ImageSlider'
import AboutSection from '../AboutSection';
// import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <ImageSlider />
      <AboutSection />
      {/* <Cards /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;
