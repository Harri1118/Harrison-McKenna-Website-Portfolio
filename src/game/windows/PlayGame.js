import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import CanvasComponent from './engine/Canvas'; // Match the export name
import Sprite from './engine/Sprite'

const PlayGame = () => {
  const [shapes,setShapes] = useState([])

    useEffect(() => {
      alert("test")
      const spr = new Sprite(0,0,50,50,5)
      let list = []
      list.push(spr)
      setShapes(list)
  }, []);
  return (
    <div>
      <Typography 
        variant="h3" 
        component="h2" 
        sx={{ fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4' }}
      >
        Title
      </Typography>
      <CanvasComponent shapes={shapes}/> 
    </div>
  );
};

export default PlayGame;
