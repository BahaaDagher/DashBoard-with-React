import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProjects = createAsyncThunk(
  "projects/getProjects", 
  async () => {
  
    const token = JSON.parse(sessionStorage.getItem('userData')).token;
    try {
      const response = await axios.get(
        "https://test.learnning.mohamedmansi.com/api/getProjecets?page=1&limit=20" , 
        { headers: {"Authorization" : token}}
      );
      return response.data.data.projecets;
    } catch (error) {
      console.error(error);
    }
});

export const sendProject = createAsyncThunk(
  "projects/sendProject", 
  async (values) => {
    const token = JSON.parse(sessionStorage.getItem('userData')).token;
    try {
      const response = await axios.post(
        "https://test.learnning.mohamedmansi.com/api/addProjecet" , {
          name:values.name,
          subjecet_id:values.subjecet_id,
          teacher_name: values.teacher_name,
        },{ headers: {"Authorization" : token}}
      );
      return response.data ;
    } catch (error) {
      console.error(error);
    }
});

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    loading : false,
    sendProjectResponse: {},
    isResearchSuccess: false,
    isResearchFail: false ,
  },
  extraReducers: (builder) => {
    builder

    .addCase(getProjects.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getProjects.rejected, (state, action) => {
      state.loading = false;
    })
    .addCase(getProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.loading = false;
    })
    .addCase(sendProject.fulfilled, (state, action) => {
      state.isResearchSuccess = action.payload.status
      state.isResearchFail  = (state.isResearchSuccess)? false : true  ;
      state.sendProjectResponse = action.payload;
    })
    .addCase(sendProject.rejected, (state, action) => {
      state.isResearchSuccess = action.payload.status
      state.isResearchFail  = true  ;
    })
  }
});

export default projectsSlice.reducer;