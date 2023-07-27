import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { title } from "process";

// Define the state type
interface StateType{
  id:number, 
  title:string,
  description:string,
  price:number,
  image:string,
}

interface CartState {
  items: StateType[];
  
  // An array of item IDs in the cart
}

// Initial state
const initialState: CartState = {
  items: [
  ],
};

const Reducer1 = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
   
    // Add other reducer actions if needed
  },
});

export const { addToCart } = Reducer1.actions;

export default Reducer1.reducer;