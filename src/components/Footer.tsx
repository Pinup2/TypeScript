import { Typography, Box } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'secondary.main',
                color: 'white',
                mt: 3,
                p: 2,
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
            }}
        >
            <Typography variant="body1" align="center">
                &copy; {new Date().getFullYear()} All rights reserved.
            </Typography>
            <Typography variant="body1" align="center">
                Contact: +1 (123) 456-7890
            </Typography>
        </Box>
    );
};

export default Footer;
