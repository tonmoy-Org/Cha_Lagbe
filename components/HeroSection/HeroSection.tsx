'use client';

import Image from 'next/image';
import React from 'react';
import banner from '@/public/banner/b1.jpg';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section style={{ position: 'relative', textAlign: 'right', color: 'white' }}>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '300px', sm: '480px', md: '720px' }, // Responsive height
                    overflow: 'hidden' // Prevents overflow
                }}
            >
                <Image
                    src={banner}
                    alt="Banner"
                    layout="fill"
                    objectFit="cover"
                    style={{ filter: 'brightness(70%)' }} // Darkens the banner for text clarity
                />
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: { xs: '3%', sm: '5%' },
                    transform: 'translateY(-50%)',
                    padding: { xs: '0px', lg: '20px' },
                    borderRadius: '8px',
                    textAlign: 'right',
                    zIndex: 2
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <Typography variant="h2" component="h1" sx={{
                        fontWeight: 'bold',
                        marginBottom: 1,
                        color: 'white',
                        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
                        fontSize: { xs: '2rem', sm: '2rem', md: '3rem' },
                        width: { xs: 250, lg: '100%' },
                        mx: 'auto'
                    }}>
                        বাংলাদেশের সেরা চা
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
                >
                    <Typography variant="body1" sx={{
                        fontSize: { xs: '0.8rem', sm: '1.25rem', md: '1.5rem' }, // Responsive font size
                        color: 'white',
                        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
                        lineHeight: { xs: 1.6, sm: 1.6, md: 1.8 }, // Responsive line height
                    }}>
                        প্রকৃতির উপহার, আমাদের বিশুদ্ধ <br className='lg:hidden' /> এবং সুস্বাদু চা।<br />
                    </Typography>
                </motion.div>
            </Box>
        </section>
    );
}
