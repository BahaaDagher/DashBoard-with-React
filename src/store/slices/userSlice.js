import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios";
console.log("token",localStorage.getItem('registeData'))

const localStorageData = JSON.parse(localStorage.getItem('registeData'));
const token = localStorageData ? localStorageData.token : 'default-token-value';

const userData = JSON.parse(localStorage.getItem('userData'));

export const userLogin = createAsyncThunk(
  "user/userLogin", 
  async (values) => {
    try {
      const response = await axios.post(
        "https://learninghouse.cloudy.mohamedmansi.com/dashboard/api/login" ,{
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
        "https://learninghouse.cloudy.mohamedmansi.com/dashboard/api/register" ,{
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
        "https://learninghouse.cloudy.mohamedmansi.com/dashboard/api/verifyOtp" ,{
          otp:values.otp,
          order_id:values.orderId,
        },{ headers: {"Authorization" : token}}
      );
      return response.data ;
    } catch (error) {
      console.error(error);
    }
});


export const logout = createAsyncThunk(
  "user/logout", 
  async () => {
    try {
      const response = await axios.post(
        "https://learninghouse.cloudy.mohamedmansi.com/dashboard/api/logout" ,{ headers: {"Authorization" : token}}
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
    isAuth: userData ? true : false ,
    isRegisterSuccess:false,
    isOtpSuccess:false
  
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(userLogin.fulfilled, (state, action) => {
        state.userData = action.payload.data.user;
        state.isAuth = true
      })

      .addCase(userRegister.fulfilled, (state, action) => {
        state.registerData = action.payload.data.user;
        state.isRegisterSuccess = action.payload.status
       
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.isOtpSuccess = action.payload.status
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isAuth = false ; 
      })
     
  }
});



export default userSlice.reducer;