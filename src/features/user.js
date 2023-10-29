import { createSlice } from "@reduxjs/toolkit";
// this createSlice function allows u to create yr reducer in a very easy way
//  it becomes very intuitive for you to split your logic and be able to access it throughout your application
// the whole point of this is that it becomes organized in a way that's easy to understand
const initialStateValue = { name: "", age: 0, email: "" };
export const userSlice = createSlice({
  // here's where it contains all the info about the reducer, the actions we want to take on the state, and the name of the state.
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    // REDUCER FUNCTIONS
    //FUNCTION THAT TAKE IN A STATE AND AN ACTION.
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      // RESET BACK TO INITIAL STATE
      // don't need action here
      state.value = initialStateValue;
    },
  },
});
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
// the slice contains the reducer
