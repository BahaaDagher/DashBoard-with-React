import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const addQuestions = createAsyncThunk(
  "questions/addQuestions", 
  async (values) => {
    const token = JSON.parse(localStorage.getItem('userData')).token;
    try {
      const response = await axios.post(
        "https://test.learnning.mohamedmansi.com/api/addQuestion" ,{
          questions:JSON.stringify(values)
        },{ headers: {"Authorization" : token ,'Content-Type': 'application/json'}}
      );
      return response.data ;
    } catch (error) {
      console.error(error);
    }
});

export const getQuestions = createAsyncThunk(
  "questions/getQuestions", 
  async () => {
    const token = JSON.parse(localStorage.getItem('userData')).token;
    try {
      const response = await axios.get(
        "https://test.learnning.mohamedmansi.com/api/getQuestions?exam_id=1" ,
        { headers: {"Authorization" : token}}
      );
      return response.data ;
    } catch (error) {
      console.error(error);
    }
});

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    isQuestionsAdded:{}

  },
  extraReducers: (builder) => {
    builder
     
      .addCase(addQuestions.fulfilled, (state, action) => {
       state.isQuestionsAdded =action.payload
      })

      .addCase(getQuestions.fulfilled, (state, action) => {
        state.questions = action.payload.data.questions;
      })
     
  }
});



export default questionsSlice.reducer;