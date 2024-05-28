import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Define initial state
const initialState = {
  lessonPlans: {
    data: [],
    total: 0,
  },
  lessonPlanDetails: null, // New state to store lesson plan details
  loading: false,
  error: null,
};

// Define async thunk for fetching lesson plans
export const fetchLessonPlans = createAsyncThunk(
  'lessonPlans/fetchLessonPlans',
  async params => {
    try {
      const options = {
        method: 'GET',
        url: 'https://developer.nps.gov/api/v1/lessonplans', // Updated endpoint to lesson plans
        params: params,
        headers: {
          'X-Api-Key': 'gSwKu55KzwcQZdpTNQqqkG6t0m9orXYbFff25MFi', // Keep the same API key
        },
      };

      const response = await axios.request(options);
      return {data: response.data, params};
    } catch (error) {
      throw error;
    }
  },
);

export const fetchLessonPlanDetails = createAsyncThunk(
  'lessonPlans/fetchLessonPlanDetails',
  async lessonPlanId => {
    // Change params to lessonPlanId to fetch details of a specific lesson plan
    try {
      const options = {
        method: 'GET',
        url: `https://developer.nps.gov/api/v1/lessonplans/${lessonPlanId}`, // Updated endpoint to lesson plans with lessonPlanId
        params: {
          // Add any additional params if needed
        },
        headers: {
          'X-Api-Key': 'gSwKu55KzwcQZdpTNQqqkG6t0m9orXYbFff25MFi', // Keep the same API key
        },
      };

      const response = await axios.request(options);
      return response.data; // Return only the data of the lesson plan details
    } catch (error) {
      throw error;
    }
  },
);

// Define lesson plans slice
const lessonPlansSlice = createSlice({
  name: 'lessonPlans',
  initialState,
  reducers: {
    clearLessonPlansData: state => {
      state.lessonPlans = {
        data: [],
        total: 0,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLessonPlans.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLessonPlans.fulfilled, (state, action) => {
        state.loading = false;
        // Append new lesson plans to the existing data
        state.lessonPlans.data = [
          ...state.lessonPlans.data,
          ...action.payload.data.data,
        ];
        state.lessonPlans.total = action.payload.data.total;
      })
      .addCase(fetchLessonPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchLessonPlanDetails.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLessonPlanDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.lessonPlanDetails = action.payload;
      })
      .addCase(fetchLessonPlanDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {clearLessonPlansData} = lessonPlansSlice.actions;
export default lessonPlansSlice.reducer;
