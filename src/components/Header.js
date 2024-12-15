import React, { useEffect, useState } from 'react';
import { Typography, Box, IconButton, Link } from '@mui/material';
import AOS from 'aos';
import '../css/Header.css';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import ImageSlider from '../elements/ImageSlider'

const goal = `My name is Harrison! I'm a passionate developer with a keen interest in creating dynamic,
user-friendly web applications. With expertise in React.js and other
modern technologies, I enjoy solving complex problems and delivering
impactful solutions.`

function Header() {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <Box
      component="header"
      data-aos="fade-up"
      className="header"
      sx={{ textAlign: 'center', padding: '2rem' }}
    >
    <TypeAnimation
  sequence={[
    'Welcome',
    1000,
  ]}
  wrapper="h1" // Wraps the animation in an h1 element
  speed={50}
  style={{ display: 'inline-block', fontSize: '6rem' }}
  repeat={Infinity}
  data-aos="fade-up"
  />
      <ImageSlider/>
      <Typography variant="h2" component="h2" data-aos="fade-up">
        Goal
      </Typography>
      <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
      <TypeAnimation
        sequence={[
          goal,
          1000,
        ]}
        wrapper="p" // Wraps the animation in an h1 element
        speed={70}
        style={{ display: 'inline-block', fontSize: '20' }}
        repeat={Infinity}
        data-aos="fade-up"
      />
        <Link href="https://www.overleaf.com/project/66fb66249304752bb0d0559a" target="_blank" color="#fff">Check out my resume!</Link>
      </Box>
      
    </Box>
  );
}

export default Header;