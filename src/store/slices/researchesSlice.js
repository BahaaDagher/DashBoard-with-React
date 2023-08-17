import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getResearches = createAsyncThunk(
  "researches/getResearches", 
  async () => {
    const token = JSON.parse(localStorage.getItem('userData')).token;
    try {
      const response = await axios.get(
        "https://learninghouse.cloudy.mohamedmansi.com/dashboard/api/getResearches" , 
        { headers: {"Authorization" : token}}
      );
      return response.data.data.researchs ;
    } catch (error) {
      console.error(error);
    }
});

export const sendResearch = createAsyncThunk(
  "researches/sendResearch", 
  async (values) => {
    const token = JSON.parse(localStorage.getItem('userData')).token;
    try {
      const response = await axios.post(
        "https://learninghouse.cloudy.mohamedmansi.com/dashboard/api/addResearch" , {
          name:values.name,
          subjecet_id:values.subjecet_id,
        },{ headers: {"Authorization" : token}}
      );
      return response.data ;
    } catch (error) {
      console.error(error);
    }
});

const researchesSlice = createSlice({
  name: "researches",
  initialState: {
    researches: [],
    isResearchReceive: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getResearches.fulfilled, (state, action) => {
        state.researches = action.payload;
      })

      .addCase(sendResearch.fulfilled, (state, action) => {
        state.isResearchReceive = action.payload.status
      })
  }
});

export default researchesSlice.reducer;