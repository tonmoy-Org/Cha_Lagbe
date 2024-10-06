import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import deliveryImage from '@/public/delivery/d1.jpg';
import paymentImage from '@/public/pay/o1.webp'; // Import your payment image here

const DeliverySection = () => {
    return (
        <Container maxWidth="lg" sx={{ my: 8 }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ mb: 5 }}>
                আমাদের দ্রুত ডেলিভারি এবং পেমেন্ট সিস্টেম
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        দ্রুত এবং নিরাপদ ডেলিভারি
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        আমাদের চা সরবরাহের প্রক্রিয়া দ্রুত এবং নিরাপদ। আমাদের দক্ষ ডেলিভারি টিম আপনার অর্ডারটি যত দ্রুত সম্ভব পৌঁছে দেয়।
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        আমরা প্রতিশ্রুতিবদ্ধ যে, আপনার অর্ডারটি সময়মতো এবং নিরাপদে আপনার দরজায় পৌঁছে যাবে।
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        আমাদের প্রক্রিয়ায় ব্যবহৃত বিশেষ প্রযুক্তি নিশ্চিত করে যে, আপনার অর্ডার সঠিকভাবে ট্র্যাক করা হয় এবং কোন সমস্যা ছাড়াই ডেলিভারি সম্পন্ন হয়।
                    </Typography>
                    <Typography variant="body1">
                        যেকোনো প্রয়োজনে আমাদের সাপোর্ট টিম সর্বদা আপনার সাথে রয়েছে।
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <img
                            src={deliveryImage.src}
                            alt="Fast Delivery"
                            style={{ width: '100%', height: 'auto', borderRadius: '8px' }} // Adjust styles as needed
                        />
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ mt: 8 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <img
                                src={paymentImage.src} // Make sure to set the correct path
                                alt="Payment Methods"
                                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} // Adjust styles as needed
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom sx={{ mb: 1 }}>
                            পেমেন্ট ব্যবস্থা
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            আমরা বিভিন্ন নিরাপদ পেমেন্ট পদ্ধতি প্রদান করি যাতে আপনার কেনাকাটা সহজ এবং নিরাপদ হয়।
                        </Typography>
                        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                            <li>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    <strong>নেট ব্যাংকিং:</strong> আপনার ব্যাংক অ্যাকাউন্ট থেকে সরাসরি পেমেন্ট করুন।
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    <strong>ক্রেডিট/ডেবিট কার্ড:</strong> আপনার কার্ডের মাধ্যমে সহজেই পেমেন্ট করুন।
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    <strong>মোবাইল ফাইন্যান্সিং:</strong> বিকাশ, রকেট, নগদ ইত্যাদির মাধ্যমে দ্রুত পেমেন্ট করুন।
                                </Typography>
                            </li>
                        </ul>
                        <Typography variant="body1">
                            আমরা আপনার তথ্যের সুরক্ষার প্রতি অত্যন্ত গুরুত্ব দিই এবং নিশ্চিত করি যে, আপনার পেমেন্ট তথ্য সম্পূর্ণ নিরাপদ।
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default DeliverySection;
