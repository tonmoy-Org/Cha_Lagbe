import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box, CardMedia } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import p1 from '@/public/products/p1.jpg'; // প্রিমিয়াম চা এর ছবি
import p2 from '@/public/products/p2.webp'; // গ্রীন টি এর ছবি
import p3 from '@/public/products/p3.webp'; // ইনস্ট্যান্ট চা এর ছবি

const ProductSection = () => {
    const products = [
        {
            name: 'প্রিমিয়াম চা',
            price: '৳৫০০/কেজি',
            link: '/order',
            image: p1 // প্রিমিয়াম চা এর ছবি
        },
        {
            name: 'গ্রীন টি',
            price: '৳৬০০/কেজি',
            link: '/order',
            image: p2 // গ্রীন টি এর ছবি
        },
        {
            name: 'ইনস্ট্যান্ট চা',
            price: '৳৫৫০/কেজি',
            link: '/order',
            image: p3 // ইনস্ট্যান্ট চা এর ছবি
        }
    ];

    return (
        <Box sx={{ pt: 8 }}>
            <Container maxWidth="lg" sx={{ p: 4, borderRadius: '8px' }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ mb: 5 }}>
                    আমাদের চা সমূহ
                </Typography>
                <Grid container spacing={4}>
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia sx={{ position: 'relative', height: 200 }}>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        layout="fill"
                                        objectFit="cover"
                                        style={{ borderRadius: '4px 4px 0 0' }} // উপরের ছবির কোণ গুলি গোলাকার
                                    />
                                </CardMedia>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body1">
                                        মূল্য: <span style={{ color: 'gold' }}>{product.price}</span>
                                    </Typography>
                                </CardContent>
                                <Box sx={{ flexGrow: 1 }} />
                                <Box sx={{ p: 2 }}>
                                    <Button
                                        variant="contained"
                                        sx={{ bgcolor: "#008e48" }}
                                        fullWidth
                                        component={Link}
                                        href={product.link}
                                    >
                                        এখনই কিনুন
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ProductSection;
