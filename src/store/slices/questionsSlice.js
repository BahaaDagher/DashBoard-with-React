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

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    userData: [],
    isAuth:false
  
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(addQuestions.fulfilled, (state, action) => {
        state.userData = action.payload.data.user;
        state.isAuth = action.payload.status
       
      })
     
  }
});



export default questionsSlice.reducer;