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
    isResearchSuccess: false,
    isResearchFail: false ,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getResearches.fulfilled, (state, action) => {
        state.researches = action.payload;
      })
      .addCase(sendResearch.fulfilled, (state, action) => {
        state.isResearchSuccess = action.payload.status
        state.isResearchFail  = (state.isResearchSuccess)? false : true  ;
      })
      .addCase(sendResearch.rejected, (state, action) => {
        state.isResearchSuccess = action.payload.status
        state.isResearchFail  = true  ;
      })
  }
});

export default researchesSlice.reducer;