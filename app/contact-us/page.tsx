import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';

const Contact: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 10, mb: 4, height: { md: '100vh' } }}>
            <Typography variant="h4" component="h1" align="center" sx={{ mb: 4, fontWeight: 'bold', color: '#008e48' }}>
                আমাদের সাথে যোগাযোগ করুন
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, height: { md: 500 } }}>
                        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                            আমাদের ঠিকানা
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            শ্রীমঙ্গল, মৌলভীবাজার, বাংলাদেশ
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            Daffodil Smart City, ঢাকা, বাংলাদেশ
                        </Typography>
                        <Typography variant="h5" component="h2" sx={{ mb: 2, mt: 4 }}>
                            যোগাযোগের নম্বর
                        </Typography>
                        <Typography variant="body1">
                            +880 1234-567890
                        </Typography>
                        <Typography variant="h5" component="h2" sx={{ mb: 2, mt: 4 }}>
                            ইমেইল
                        </Typography>
                        <Typography variant="body1">
                            contact@yourteashop.com
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, height: { md: 500 } }}>
                        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                            আমাদের মানচিত্র
                        </Typography>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9083339358485!2d90.4113683149816!3d23.810300584591444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b0f3e0a177%3A0x15e7b4fcdf8c0d4!2sRajshahi%20Tea%20Shop!5e0!3m2!1sen!2sbd!4v1682001542260!5m2!1sen!2sbd"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
