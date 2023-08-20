import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios";


const userData = JSON.parse(localStorage.getItem('userData'));

export const userLogin = createAsyncThunk(
  "user/userLogin", 
  async (values) => {
    try {
      const response = await axios.post(
        "https://dash.baetiy.com/api/login" ,{
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
        "https://dash.baetiy.com/api/register" ,{
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
    const token = JSON.parse(localStorage.getItem('registeData')).token;
    try {
      const response = await axios.post(
        "https://dash.baetiy.com/api/verifyOtp" ,{
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
    const token = JSON.parse(localStorage.getItem('userData')).token;
    try {
      const response = await axios.post(
        "https://dash.baetiy.com/api/logout" ,{ headers: {"Authorization" : token}}
      );
      return response.data ;
    } catch (error) {
      console.error(error);
    }
});

export const profileData = createAsyncThunk(
  "user/profileData", 
  async (values) => {
    const token = JSON.parse(localStorage.getItem('userData')).token;
    try {
      const response = await axios.get(
        "https://dash.baetiy.com/api/getProfileData" ,
        { headers: {"Authorization" : token}}
      );
      return response.data.data.user ;
    } catch (error) {
      console.error(error);
    }
});

export const updateProfile = createAsyncThunk(
  "user/updateProfile", 
  async (values) => {
    const token = JSON.parse(localStorage.getItem('userData')).token;
    try {
      const response = await axios.post(
        "https://dash.baetiy.com/api/updateProfile" ,{
          name:values.name,
          email:values.email,
          phone:values.phone,
          level_id:values.level_id,
          image :values.image
        },
        { headers: {"Authorization" : token}}
      );
      return response.data ;
    } catch (error) {
      console.error(error);
    }
});


const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
    registerData:{},
    loginValidation:{},
    registerResponse : {}, 
    isAuth: userData ? true : false ,
    isRegisterSuccess:false,
    isOtpSuccess:false , 
    dataOfProfile : {} ,
    ResponseUpdateProfile : {} ,
  },
  extraReducers: (builder) => {
    builder

      .addCase(userLogin.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.loginValidation = action.payload;
        state.isAuth = action.payload.status
        
      })

      .addCase(userRegister.fulfilled, (state, action) => {
        state.registerData = action.payload;
        state.isRegisterSuccess = action.payload.status
        state.registerResponse = action.payload
       
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.isOtpSuccess = action.payload.status
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isAuth = false ; 
      })
      .addCase(profileData.fulfilled, (state, action) => {
        state.dataOfProfile = action.payload ; 
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.ResponseUpdateProfile = action.payload; 
      })
  }
});



export default userSlice.reducer;