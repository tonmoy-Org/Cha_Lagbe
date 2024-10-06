'use client'

import Image from 'next/image';
import React from 'react';
import banner from '@/public/banner/b1.jpg';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <div>
            <section style={{ position: 'relative', textAlign: 'right', color: 'white' }}>
                <Box sx={{
                    position: 'relative',
                    width: '100%',
                    height: '720px',
                }}>
                    <Image
                        src={banner}
                        alt="Banner"
                        layout="fill"
                        objectFit="cover"
                        style={{ filter: 'brightness(70%)' }} // Darkens the banner for text clarity
                    />
                </Box>

                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '5%',
                    transform: 'translateY(-50%)',
                    padding: '20px',
                    borderRadius: '8px',
                    textAlign: 'right',
                    zIndex: 2
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <Typography variant="h2" component="h1" sx={{
                            fontWeight: 'bold',
                            marginBottom: 1,
                            color: 'white',
                            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' // Text shadow for better contrast
                        }}>
                            বাংলাদেশের সেরা চা
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
                    >
                        <Typography variant="body1" sx={{
                            fontSize: 25,
                            color: 'white',
                            textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)'
                        }}>
                            প্রকৃতির উপহার, আমাদের বিশুদ্ধ এবং সুস্বাদু চা।<br />
                        </Typography>
                    </motion.div>
                </Box>
            </section>
        </div>
    );
}
