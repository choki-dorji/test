import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Define the state type
interface StateType{
  logins: boolean
}



// Initial state
const initialState: StateType = {
    logins: false
};

const Reducer3 = createSlice({
  name: "login",
  initialState,
  reducers: {
    isLoggedin: (state, action) => {
      state.logins = (action.payload);
    },
   
    // Add other reducer actions if needed
  },
});

export const { isLoggedin } = Reducer3.actions;

export default Reducer3.reducer;