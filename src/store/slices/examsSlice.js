import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getExams = createAsyncThunk(
  "exams/getExams", 
  async () => {
    const token = JSON.parse(localStorage.getItem('userData')).token;
    try {
      const response = await axios.get(
        "https://dash.baetiy.com/api/getExams" , 
        { headers: {"Authorization" : token}}
      );
      return response.data.data.exams ;
    } catch (error) {
      console.error(error);
    }
});

export const getExamQuestions = createAsyncThunk(
  "exams/getExamQuestions", 
  async (examId) => {
    const token = JSON.parse(localStorage.getItem('userData')).token;
    try {
      const response = await axios.get(
        `https://dash.baetiy.com/api/getQuestions?exam_id=${examId}` , 
        { headers: {"Authorization" : token}}
      );
      return response.data.data.questions ;
    } catch (error) {
      console.error(error);
    }
});

const examsSlice = createSlice({
  name: "exams",
  initialState: {
    Exams: [],
    ExamQuestions :[] 
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExams.fulfilled, (state, action) => {
        state.Exams = action.payload;
       
      })
      .addCase(getExamQuestions.fulfilled, (state, action) => {
        state.ExamQuestions = action.payload;
       
      })
     
  }
});



export default examsSlice.reducer;