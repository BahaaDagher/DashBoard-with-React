import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk(
  "user/userLogin", 
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

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
    isAuth:false
  
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(userLogin.fulfilled, (state, action) => {
        state.userData = action.payload.data.user;
        state.isAuth = action.payload.status
       
      })
     
  }
});



export default userSlice.reducer;