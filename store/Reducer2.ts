import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface CartState {
  id: string; // An array of item IDs in the cart
}

// Initial state
const initialState: CartState = {
  id: "",
};

const Reducer2 = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.id = (action.payload);
    },
   
    // Add other reducer actions if needed
  },
});

export const { search } = Reducer2.actions;

export default Reducer2.reducer;