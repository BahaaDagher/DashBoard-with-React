import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const addQuestions = createAsyncThunk(
  "questions/addQuestions", 
  async (values) => {
    try {
      const response = await axios.post(
        "https://learninghouse.cloudy.mohamedmansi.com/api/login" ,{
            phone:values.email,
            password:values.password
        }
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
        "https://learninghouse.cloudy.mohamedmansi.com/dashboard/api/getQuestions?exam_id=1" ,
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

  },
  extraReducers: (builder) => {
    builder
     
      .addCase(addQuestions.fulfilled, (state, action) => {
       
      })

      .addCase(getQuestions.fulfilled, (state, action) => {
        state.questions = action.payload.data.questions;
      })
     
  }
});



export default questionsSlice.reducer;