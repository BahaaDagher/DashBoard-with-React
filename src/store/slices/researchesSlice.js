import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getResearches = createAsyncThunk(
  "researches/getResearches", 
  async () => {
    const token = JSON.parse(localStorage.getItem('userData')).token;
    try {
      const response = await axios.get(
        "https://test.learnning.mohamedmansi.com/api/getResearches?page=1&limit=20" , 
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
        "https://test.learnning.mohamedmansi.com/api/addResearch" , {
          name:values.name,
          subjecet_id:values.subjecet_id,
          teacher_name: values.teacher_name,
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
    sendResearchResponse: {},
    loading : false,
    isResearchSuccess: false,
    isResearchFail: false ,
  },
  extraReducers: (builder) => {
    builder

      .addCase(getResearches.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getResearches.fulfilled, (state, action) => {
        state.researches = action.payload;
        state.loading = false;
      })
      .addCase(getResearches.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(sendResearch.fulfilled, (state, action) => {
        state.isResearchSuccess = action.payload.status
        state.isResearchFail  = (state.isResearchSuccess)? false : true  ;
        state.sendResearchResponse = action.payload;
        state.sendLoading = false ;
      })
      .addCase(sendResearch.rejected, (state, action) => {
        state.isResearchSuccess = action.payload.status
        state.isResearchFail  = true  ;
        state.sendLoading = false ;
      })
  }
});

export default researchesSlice.reducer;