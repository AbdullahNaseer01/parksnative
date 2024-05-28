import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state
const initialState = {
  activities: [],
  activityDetails: null, // New state to store activity details
  loading: false,
  error: null,
};

// Define async thunk for fetching activities
export const fetchActivities = createAsyncThunk(
  "activities/fetchActivities",
  async (params) => {
    try {
      const options = {
        method: "GET",
        url: "https://developer.nps.gov/api/v1/activities", // Updated endpoint to activities
        params: params,
        headers: {
          "X-Api-Key": "gSwKu55KzwcQZdpTNQqqkG6t0m9orXYbFff25MFi", // Keep the same API key
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchActivityDetails = createAsyncThunk(
  "activities/fetchActivityDetails",
  async (activityId) => { // Change params to activityId to fetch details of a specific activity
    try {
      const options = {
        method: "GET",
        url: `https://developer.nps.gov/api/v1/activities/${activityId}`, // Updated endpoint to activities with activityId
        params: {
          // Add any additional params if needed
        },
        headers: {
          "X-Api-Key": "gSwKu55KzwcQZdpTNQqqkG6t0m9orXYbFff25MFi", // Keep the same API key
        },
      };

      const response = await axios.request(options);
      return response.data; // Return only the data of the activity details
    } catch (error) {
      throw error;
    }
  }
);

// Define activities slice
const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActivities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActivities.fulfilled, (state, action) => {
        state.loading = false;
        state.activities = action.payload;
      })
      .addCase(fetchActivities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchActivityDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActivityDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.activityDetails = action.payload;
      })
      .addCase(fetchActivityDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default activitiesSlice.reducer;
