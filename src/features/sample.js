import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "preview";

export const sampleSlice = createSlice({
  name: "sample",
  initialState: { value: initialStateValue },
   reducers: {

    changeSampleText: (state, action ) => {
        state.value = action.payload;   
    },
   },
});
export const { changeSampleText} = sampleSlice.actions;

export default sampleSlice.reducer;
// the slice contains the reducer