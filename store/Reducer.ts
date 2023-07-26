import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface CartState {
  items: number; // An array of item IDs in the cart
}

// Initial state
const initialState: CartState = {
  items: 0,
};

const Reducer1 = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.items = (action.payload);
    },
    // Add other reducer actions if needed
  },
});

export const { addToCart } = Reducer1.actions;

export default Reducer1.reducer;