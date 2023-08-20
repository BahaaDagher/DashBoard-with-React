import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const addQuestions = createAsyncThunk(
  "questions/addQuestions", 
  async (values) => {
    const token = JSON.parse(localStorage.getItem('userData')).token;
    try {
      const response = await axios.post(
        "https://dash.baetiy.com/api/addQuestion" ,{
          questions:JSON.stringify(values)
        },{ headers: {"Authorization" : token ,'Content-Type': 'application/json'}}
      );
      return response.data ;
    } catch (error) {
      console.error(error);
    }
});

export const addImageQuestion = createAsyncThunk(
  "questions/addImageQuestion", 
  async (values) => {
    const token = JSON.parse(localStorage.getItem('userData')).token;
    try {
      const response = await axios.post(
        "https://dash.baetiy.com/api/addQuestion" ,
          values
         ,{ headers: {"Authorization" : token , "Content-Type": "multipart/form-data",}}
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
        "https://dash.baetiy.com/api/getQuestionsStudent" ,
        { headers: {"Authorization" : token , }}
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

      .addCase(addImageQuestion.fulfilled, (state, action) => {
        state.isQuestionsAdded = action.payload;
      })
     
  }
});



export default questionsSlice.reducer;