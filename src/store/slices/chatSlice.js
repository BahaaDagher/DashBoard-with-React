import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const groupChatGet = createAsyncThunk(
  "chat/groupChatGet", 
  async (vlaues) => {
    const token = JSON.parse(localStorage.getItem('userData')).token;
    try {
      const response = await axios.get(
        `https://test.learnning.mohamedmansi.com/api/groupChat?group_id=${vlaues.group_id}&limit=10&page=${vlaues.page}`, 
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
          "https://test.learnning.mohamedmansi.com/api/groupChat_sendMessage" ,{
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


const chatSlice = createSlice({
  name: "chat",
  initialState: {
    groupChatGetResponse : {} ,
    groupChatSendResponse : {} ,
    groupChatPages:0
  },
  extraReducers: (builder) => {
    builder

      .addCase(groupChatGet.fulfilled, (state, action) => {
        state.groupChatGetResponse = action.payload;
        state.groupChatPages +=1
      })
      .addCase(groupChatSend.fulfilled, (state, action) => {
        state.groupChatSendResponse = action.payload;
      })
     
  }
});



export default chatSlice.reducer;