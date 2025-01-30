import React, { useEffect, useState } from 'react';
import { Typography, Box, IconButton, Link, useMediaQuery } from '@mui/material';
import AOS from 'aos';
import '../css/Header.css';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import ImageSlider from '../elements/ImageSlider'
import SequentialAnimation from '../elements/SequentialAnimation';
import '../App.css'

function Header() {
  const isMobile = useMediaQuery('(max-width:768px)');

  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
    { !isMobile &&
    <Box
      component="header"
      data-aos="fade-up"
      className="header"
      sx={{ textAlign: 'center', padding: '2rem', backgroundColor: 'rgba(0, 0, 0, 0.7)'}}
    >
<TypeAnimation
  sequence={[
    'Welcome',
    1000,
  ]}
  wrapper="h1" // Wraps the animation in an h1 element
  speed={50}
  style={{ display: 'inline-block', fontSize: '10vw', fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4' }} // Changed to Roboto
  repeat={0}
  data-aos="fade-up"
/>  
      <ImageSlider  />
      <Box id="header" paddingTop={10} height="100px"/>
      <Typography variant="h2" component="h2" data-aos="fade-up"
      style={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4'}}
      >
        Goal
      </Typography>
      <SequentialAnimation/>
    </Box>
  }
  {isMobile &&
    <Box
    component="header"
    data-aos="fade-up"
    className="header"
    sx={{textAlign: 'center', padding: '2rem', backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
      
    }}
  >
<TypeAnimation
  sequence={['Welcome', 1000]}
  wrapper="h1"
  speed={50}
  style={{
    display: 'inline-block',
    fontSize: '13vw', // Default for small devices
    fontFamily: 'Bruno Ace SC, serif',
    fontStyle: 'normal',
    color: '#7BAFD4',
    textAlign: 'center',
    width: '100%'
  }}
  repeat={0}
  data-aos="fade-up"
/>

{/* Place the ImageSlider right below */}
{/* <ImageSlider/> */}
    {/* <Box id="header" paddingTop={10} height="100px"/> */}
    {/* <Typography variant="h2" component="h2" data-aos="fade-up"
    style={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4'}}
    >
      Goal
    </Typography>
    <SequentialAnimation/> */}
  </Box>
  }
</div>
  );
}

export default Header;