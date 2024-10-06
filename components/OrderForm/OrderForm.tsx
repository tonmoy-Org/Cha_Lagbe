  "use client";

  import * as React from "react";
  import Typography from "@mui/material/Typography";
  import TextField from "@mui/material/TextField";
  import Button from "@mui/material/Button";
  import Box from "@mui/material/Box";
  import { useForm, SubmitHandler } from "react-hook-form";
  import { Container, MenuItem, Select, InputLabel, FormControl, FormControlLabel, Checkbox } from "@mui/material";
  import { useState, useEffect } from "react";

  // Interface for form values
  interface FormValues {
    name: string;
    deliveryLocation: string;
    address: string;
    phone: string;
    teaType: string;  // Changed from mangoType to teaType
    quantity: number;
    comments?: string;
    terms: boolean;
  }

  const PreOrderForm: React.FC = () => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<FormValues>();

    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [courierCharge, setCourierCharge] = useState<number>(0);
    const [packagingCharge] = useState<number>(200); // Fixed packaging charge

    const quantity = watch("quantity", 0);
    const deliveryLocation = watch("deliveryLocation", "");

    useEffect(() => {
      // Set courier charge based on location
      if (deliveryLocation === "ঢাকা") {
        setCourierCharge(100);
      } else {
        setCourierCharge(120);
      }
    }, [deliveryLocation]);

    useEffect(() => {
      // Calculate total price
      if (quantity >= 10 && deliveryLocation && quantity > 0) {
        setTotalPrice(quantity * 150 + courierCharge + packagingCharge); // Adjusted tea price
      } else {
        setTotalPrice(0);
      }
    }, [quantity, deliveryLocation, courierCharge]);

    const onSubmit: SubmitHandler<FormValues> = (data) => {
      const orderDetails = { totalPrice, courierCharge, packagingCharge, ...data };
      console.log(orderDetails);
      alert(`অর্ডার সফলভাবে জমা হয়েছে! মোট মূল্য: ${totalPrice} টাকা`);
    };

    return (
      <Container sx={{ mt: 10, mb: 4 }} maxWidth="sm">
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", marginBottom: 1, color: "#008e48" }}
        >
          প্রি-অর্ডার চা ফর্ম
        </Typography>
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} sx={{ mb: 4 }}>
          <TextField
            label="নাম"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("name", { required: "নাম প্রয়োজন" })}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "default" },
                "&:hover fieldset": { borderColor: "#008e48" },
                "&.Mui-focused fieldset": { borderColor: "#008e48" },
              },
              "& .MuiInputLabel-root": { color: "default" },
              "&:hover .MuiInputLabel-root": { color: "#008e48" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#008e48" },
            }}
          />
          <FormControl fullWidth margin="normal"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "default" },
                "&:hover fieldset": { borderColor: "#008e48" },
                "&.Mui-focused fieldset": { borderColor: "#008e48" },
              },
              "& .MuiInputLabel-root": { color: "default" },
              "&:hover .MuiInputLabel-root": { color: "#008e48" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#008e48" },
            }}
          >
            <InputLabel id="delivery-location-label">ডেলিভারি লোকেশন</InputLabel>
            <Select
              labelId="delivery-location-label"
              label="ডেলিভারি লোকেশন"
              defaultValue=""
              {...register("deliveryLocation", { required: "ডেলিভারি লোকেশন নির্বাচন করুন" })}
              error={!!errors.deliveryLocation}
            >
              <MenuItem value="ঢাকা">ঢাকা</MenuItem>
              <MenuItem value="চট্টগ্রাম">চট্টগ্রাম</MenuItem>
              <MenuItem value="রাজশাহী">রাজশাহী</MenuItem>
              <MenuItem value="খুলনা">খুলনা</MenuItem>
              <MenuItem value="বরিশাল">বরিশাল</MenuItem>
              <MenuItem value="সিলেট">সিলেট</MenuItem>
            </Select>
            {errors.deliveryLocation && <Typography color="error">{errors.deliveryLocation.message}</Typography>}
          </FormControl>
          <TextField
            label="ঠিকানা"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            {...register("address", { required: "ঠিকানা প্রয়োজন" })}
            error={!!errors.address}
            helperText={errors.address?.message}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "default" },
                "&:hover fieldset": { borderColor: "#008e48" },
                "&.Mui-focused fieldset": { borderColor: "#008e48" },
              },
              "& .MuiInputLabel-root": { color: "default" },
              "&:hover .MuiInputLabel-root": { color: "#008e48" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#008e48" },
            }}
          />
          <TextField
            label="ফোন নম্বর"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("phone", {
              required: "ফোন নম্বর প্রয়োজন",
              pattern: { value: /^[0-9]+$/, message: "ভুল ফোন নম্বর" },
            })}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "default" },
                "&:hover fieldset": { borderColor: "#008e48" },
                "&.Mui-focused fieldset": { borderColor: "#008e48" },
              },
              "& .MuiInputLabel-root": { color: "default" },
              "&:hover .MuiInputLabel-root": { color: "#008e48" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#008e48" },
            }}
          />
          <FormControl fullWidth margin="normal"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "default" },
                "&:hover fieldset": { borderColor: "#008e48" },
                "&.Mui-focused fieldset": { borderColor: "#008e48" },
              },
              "& .MuiInputLabel-root": { color: "default" },
              "&:hover .MuiInputLabel-root": { color: "#008e48" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#008e48" },
            }}
          >
            <InputLabel id="tea-type-label">চা প্রকার</InputLabel>
            <Select
              labelId="tea-type-label"
              label="চা প্রকার"
              defaultValue=""
              {...register("teaType", { required: "চা প্রকার নির্বাচন করুন" })}
              error={!!errors.teaType}
            >
              <MenuItem value="সবুজ চা">সবুজ চা</MenuItem>
              <MenuItem value="কালো চা">কালো চা</MenuItem>
              <MenuItem value="হার্বাল চা">হার্বাল চা</MenuItem>
            </Select>
            {errors.teaType && <Typography color="error">{errors.teaType.message}</Typography>}
          </FormControl>
          <TextField
            label="পরিমাণ (সর্বনিম্ন ১০ কেজি)"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            inputProps={{ min: 10 }}
            {...register("quantity", { required: "পরিমাণ প্রয়োজন", min: { value: 10, message: "সর্বনিম্ন ১০ কেজি" } })}
            error={!!errors.quantity}
            helperText={errors.quantity?.message}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "default" },
                "&:hover fieldset": { borderColor: "#008e48" },
                "&.Mui-focused fieldset": { borderColor: "#008e48" },
              },
              "& .MuiInputLabel-root": { color: "default" },
              "&:hover .MuiInputLabel-root": { color: "#008e48" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#008e48" },
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, my: 2 }}>
            {/* Pricing breakdown */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                চা মূল্যের মোট:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {totalPrice > 0 ? quantity * 150 : 0} টাকা
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                কুরিয়ার চার্জ:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {totalPrice > 0 ? courierCharge : 0} টাকা
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                প্যাকেজিং চার্জ:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {totalPrice > 0 ? packagingCharge : 0} টাকা
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
                borderTop: "2px dotted black",
                pt: 1,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }} component="h1">
                সর্বমোট:
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }} component="h1">
                {totalPrice > 0 ? totalPrice : 0} টাকা
              </Typography>
            </Box>
          </Box>
          <TextField
            label="মন্তব্য"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={2}
            {...register("comments")}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "default" },
                "&:hover fieldset": { borderColor: "#008e48" },
                "&.Mui-focused fieldset": { borderColor: "#008e48" },
              },
              "& .MuiInputLabel-root": { color: "default" },
              "&:hover .MuiInputLabel-root": { color: "#008e48" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#008e48" },
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  {...register("terms", { required: "আপনার দেয়া সকল তথ্য সত্য" })}
                  sx={{
                    color: "#008e48",
                    "&.Mui-checked": { color: "#008e48" },
                  }}
                />
              }
              label="আপনার দেয়া সকল তথ্য সত্য"
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#008e48",
              "&:hover": { backgroundColor: "#008e48" },
            }}
            fullWidth
          >
            অর্ডার করুন
          </Button>
        </Box>
      </Container>
    );
  };

  export default PreOrderForm;
