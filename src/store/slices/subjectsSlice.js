import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSubjects = createAsyncThunk(
  "subjects/getSubjects", 
  async () => {
    const token = JSON.parse(localStorage.getItem('userData')).token;
    try {
      const response = await axios.get(
        "https://dash.baetiy.com/api/homeScreen"  , 
        { headers: {"Authorization" : token}}
      );
      return response.data.data.subjecets ;
    } catch (error) {
      console.error(error);
    }
});

const subjectsSlice = createSlice({
  name: "subjects",
  initialState: {
    subjects: [],
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(getSubjects.fulfilled, (state, action) => {
        state.subjects = action.payload;
       
      })
     
  }
});



export default subjectsSlice.reducer;