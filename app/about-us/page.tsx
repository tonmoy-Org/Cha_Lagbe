import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import garden from '@/public/about/g1.jpg'; // Tea Garden image
import collect from '@/public/about/c1.jpeg'; // Collecting Tea Leaves image
import Image from 'next/image';

const AboutUs: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
            <Typography variant="h4" component="h1" align="center" sx={{ mb: 4, fontWeight: 'bold', color: '#008e48' }}>
                আমাদের সম্পর্কে
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                            আমাদের গল্প
                        </Typography>
                        <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            আমাদের চা দোকানটি রাজশাহী শহরে অবস্থিত, যেখানে আমরা সুস্বাদু এবং উচ্চমানের চা সরবরাহ করি।
                            আমাদের চা গাছগুলি আমাদের প্রিয় বাংলার মাটিতে বেড়ে ওঠে, যা স্বাদে এবং সুগন্ধে অনন্য।
                            আমরা সকলের জন্য চা প্রেমের একটি কেন্দ্র তৈরি করতে প্রতিজ্ঞাবদ্ধ।
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Image src={garden.src} alt="Tea Garden" width={300} height={400} style={{ width: '100%', borderRadius: '8px' }} />
                            <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                                আমাদের চা বাগান যেখানে আমরা চা পাতার যত্ন নিই।
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                            আমাদের মিশ্রণ
                        </Typography>
                        <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            আমাদের বিশেষত্ব হল আমাদের নিজস্ব চা মিশ্রণ। আমাদের জ্ঞানী চা বিশেষজ্ঞরা
                            বিভিন্ন প্রকারের চা পাতার সাথে মশলা মিশিয়ে এমন স্বাদ তৈরি করেছেন যা আপনার অভিজ্ঞতাকে
                            বিশেষ করে তুলবে। আপনি যে কোন ধরনের চা পছন্দ করুন না কেন, আমাদের মিশ্রণগুলি
                            আপনার প্রত্যাশা পূরণ করবে।
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Image src={collect.src} width={300} height={400} alt="Collecting Tea Leaves" style={{ width: '100%', borderRadius: '8px' }} />
                            <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                                চা পাতা সংগ্রহের সময় আমাদের কঠোর পরিশ্রম।
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" component="h2" align="center" sx={{ mb: 2 }}>
                    আমাদের মিশন
                </Typography>
                <Typography variant="body1" align="center">
                    আমরা বিশ্বাস করি যে প্রতিটি কাপ চা একটি নতুন গল্প বলতে পারে।
                    আমাদের লক্ষ্য হল সকলের জন্য সেই গল্পগুলোকে উপস্থাপন করা এবং
                    একটি উষ্ণ এবং অতিথিপরায়ণ পরিবেশে চা প্রেমীদের মিলন ঘটানো।
                </Typography>
            </Box>
        </Container>
    );
};

export default AboutUs;
