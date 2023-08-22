import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const groupChatGet = createAsyncThunk(
  "chat/groupChatGet", 
  async (values) => {
    const token = JSON.parse(localStorage.getItem('userData')).token;
    try {
      const response = await axios.get(
        `https://dash.baetiy.com/api/groupChat?group_id=${values.group_id}&limit=10&page=${values.page}`, 
        { headers: {"Authorization" : token}}
      );
      return response.data ;
    } catch (error) {
      console.error(error);
    }
});

export const groupChatSend = createAsyncThunk(
    "chat/groupChatSend", 
    async (values) => {
      const token = JSON.parse(localStorage.getItem('userData')).token;
      try {
        const response = await axios.post(
          "https://dash.baetiy.com/api/groupChat_sendMessage" ,{
            message:values.message,
            group_id :values.group_id
          },
          { headers: {"Authorization" : token}}
        );
        return response.data ;
      } catch (error) {
        console.error(error);
      }
  });

  export const StudentChatGet = createAsyncThunk(
    "chat/StudentChatGet", 
    async (values) => {
      const token = JSON.parse(localStorage.getItem('userData')).token;
      try {
        const response = await axios.get(
          `https://dash.baetiy.com/api/chat?limit=5&page=${values.page}`, 
          { headers: {"Authorization" : token}}
        );
        return response.data ;
      } catch (error) {
        console.error(error);
      }
  });
  
  export const StudentChatSend = createAsyncThunk(
      "chat/StudentChatSend", 
      async (values) => {
        const token = JSON.parse(localStorage.getItem('userData')).token;
        try {
          const response = await axios.post(
            "https://dash.baetiy.com/api/sendChat" ,{
              message:values.message,
            },
            { headers: {"Authorization" : token}}
          );
          return response.data ;
        } catch (error) {
          console.error(error);
        }
    });
    export const technicalChatGet = createAsyncThunk(
      "chat/technicalChatGet",
      async (values) => {
        const token = JSON.parse(localStorage.getItem('userData')).token;
        try {
          const response = await axios.get(
            `https://dash.baetiy.com/api/technical_support?limit=5&page=${values.page}`, 
            { headers: {"Authorization" : token}}
          );
          return response.data ;
        } catch (error) {
          console.error(error);
        }
    });
    
    export const technicalChatSend = createAsyncThunk(
        "chat/technicalChatSend",
        async (values) => {
          const token = JSON.parse(localStorage.getItem('userData')).token;
          try {
            const response = await axios.post(
              "https://dash.baetiy.com/api/technical_support_sendMessage" ,{
                message:values.message,
              },
              { headers: {"Authorization" : token}}
            );
            return response.data ;
          } catch (error) {
            console.error(error);
          }
      });

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    groupChatGetResponse : {} ,
    groupChatSendResponse : {} ,
    studentChatGetResponse : {} ,
    studentChatSendResponse : {} ,
    technicalChatGetResponse : {} ,
    technicalChatSendResponse : {} ,
  },
  extraReducers: (builder) => {
    builder

      .addCase(groupChatGet.fulfilled, (state, action) => {
        state.groupChatGetResponse = action.payload;
      })
      .addCase(groupChatSend.fulfilled, (state, action) => {
        state.groupChatSendResponse = action.payload;
      })
      .addCase(StudentChatGet.fulfilled, (state, action) => {
        state.studentChatGetResponse = action.payload;
      })
      .addCase(StudentChatSend.fulfilled, (state, action) => {
        state.studentChatSendResponse = action.payload;
      })
      .addCase(technicalChatGet.fulfilled, (state, action) => {
        state.technicalChatGetResponse = action.payload;
      })
      .addCase(technicalChatSend.fulfilled, (state, action) => {
        state.technicalChatSendResponse = action.payload;
      })
      
     
  }
});



export default chatSlice.reducer;