import React from 'react';
import { Container, Paper, Typography, IconButton } from '@mui/material';
import { GitHub, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const About: React.FC = () => {
    return (
        <Container>
            <Paper style={{ padding: '15px', marginTop: '15px' }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    About This App
                </Typography>
                <Typography variant="body1" gutterBottom>
                    This app is a simple news feed that displays the latest articles about Tesla.
                </Typography>
                <Typography variant="body1">
                    It uses the News Catcher API to fetch article data, and displays it using a modern, responsive interface built with Material UI.
                </Typography>
                <div>
                    <IconButton aria-label="GitHub" color="primary" href="https://github.com/yourusername">
                        <GitHub />
                    </IconButton>
                    <IconButton aria-label="Instagram" color="secondary" href="https://instagram.com/yourusername">
                        <Instagram />
                    </IconButton>
                    <IconButton aria-label="Twitter" style={{color: '#1DA1F2'}} href="https://twitter.com/yourusername">
                        <Twitter />
                    </IconButton>
                    <IconButton aria-label="LinkedIn" style={{color: '#0e76a8'}} href="https://linkedin.com/in/yourusername">
                        <LinkedIn />
                    </IconButton>
                </div>
            </Paper>
        </Container>
    );
};

export default About;
