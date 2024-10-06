// app/slices/orderSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrderState {
  items: string[]; // Example state
}

const initialState: OrderState = {
  items: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item !== action.payload);
    },
  },
});

export const { addItem, removeItem } = orderSlice.actions;

export default orderSlice.reducer;
