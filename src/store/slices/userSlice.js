import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const token = JSON.parse(localStorage.getItem('registeData')).token
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

export const userRegister = createAsyncThunk(
  "user/userRegister", 
  async (values) => {
    try {
      const response = await axios.post(
        "https://learninghouse.cloudy.mohamedmansi.com/api/register" ,{
          name:values.name,
          phone:values.phone,
          email:values.email,
          password:values.password,
          level_id:values.level_id,
          package_id:values.package_id
        }
      );
      return response.data ;
    } catch (error) {
      console.error(error);
    }
});

export const sendOtp = createAsyncThunk(
  "user/sendOtp", 
  async (values) => {
    try {
      const response = await axios.post(
        "https://learninghouse.cloudy.mohamedmansi.com/api/verifyOtp" ,{
          otp:values.otp,
          order_id:values.orderId,
        
        },{ headers: {"Authorization" : token}}
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
    registerData:[],
    isAuth:false,
    isRegisterSuccess:false,
    isOtpSuccess:false
  
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(userLogin.fulfilled, (state, action) => {
        state.userData = action.payload.data.user;
        state.isAuth = action.payload.status
       
      })

      .addCase(userRegister.fulfilled, (state, action) => {
        state.registerData = action.payload.data.user;
        state.isRegisterSuccess = action.payload.status
  
       
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.isOtpSuccess = action.payload.status
  
       
      })
     
  }
});



export default userSlice.reducer;