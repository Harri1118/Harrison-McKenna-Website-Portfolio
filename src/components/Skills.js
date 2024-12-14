import MediaCard from '../elements/MediaCard';
import { Typography, Box, IconButton, Link } from '@mui/material';
import React, { useEffect } from 'react';
import AOS from 'aos';
import { Grid2 } from '@mui/material';
import objects from '../objectClassifications/objects.json'
import SkillsIcons from '../elements/SkillsIcons';


function Skills() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div
            style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                //minHeight: '100vh' // or adjust as needed
            }}
        >
            <Typography variant="h3" component="h3" data-aos="fade-up" fontFamily={"Ring of Kerry, sans-serif"}>
                Skills
            </Typography>
            <Box paddingTop={5}>
                <SkillsIcons skills={objects.Skills} animate="true"/>  
            </Box>
        </div>
    );
}

export default Skills;