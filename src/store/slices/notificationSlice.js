import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotifications = createAsyncThunk(
  "notification/getNotifications", 
  async () => {
    try {
      const response = await axios.get(
        "https://test.learnning.mohamedmansi.com/api/levels"
      );
      return response.data ;
    } catch (error) {
      console.error(error);
    }
});

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notifications: {},
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(getNotifications.fulfilled, (state, action) => {
        state.notifications = action.payload;
      })
     
  }
});



export default notificationSlice.reducer;