'use client';

import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#1a1a1a',
                color: '#e0e0e0',
                py: 6,
                mt: 'auto',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#f3f3f3' }}>
                            আমাদের সম্পর্কে
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                            আমরা বিশ্বের বিভিন্ন দেশ থেকে সেরা মানের চা সংগ্রহ করে আমাদের গ্রাহকদের প্রদান করি। চায়ের প্রতি আমাদের ভালোবাসা এবং উচ্চমান বজায় রাখার প্রতিশ্রুতি আপনাকে একটি অনন্য চা অভিজ্ঞতা দিতে প্রতিশ্রুতিবদ্ধ।
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#f3f3f3' }}>
                            গুরুত্বপূর্ণ লিঙ্কসমূহ
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="/" color="inherit" underline="hover" sx={{ fontSize: 16, '&:hover': { color: '#4caf50' } }}>
                                হোম
                            </Link>
                            <Link href="/about-us" color="inherit" underline="hover" sx={{ fontSize: 16, '&:hover': { color: '#4caf50' } }}>
                                আমাদের সম্পর্কে
                            </Link>
                            <Link href="/contact-us" color="inherit" underline="hover" sx={{ fontSize: 16, '&:hover': { color: '#4caf50' } }}>
                                যোগাযোগ
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#f3f3f3' }}>
                            যোগাযোগ করুন
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                            ইমেইল: <Link href="mailto:support@myteashop.com" color="inherit" underline="hover" sx={{ '&:hover': { color: '#4caf50' } }}>support@myteashop.com</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                            ফোন: <Link href="tel:1234567890" color="inherit" underline="hover" sx={{ '&:hover': { color: '#4caf50' } }}>(১২৩) ৪৫৬-৭৮৯০</Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Divider sx={{ mt: 4, backgroundColor: '#4caf50' }} />
                <Box sx={{ textAlign: 'center', mt: 3 }}>
                    <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                        &copy; {new Date().getFullYear()} মাই টি শপ। সর্বস্বত্ব সংরক্ষিত।
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
