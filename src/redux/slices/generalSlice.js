import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
};

const GeneralReducer = createSlice({
  name: "general",
  initialState,
  reducers: {},
});

export const generalActions = { ...GeneralReducer.actions };

export default GeneralReducer.reducer;
