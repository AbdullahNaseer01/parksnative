import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state
const initialState = {
  thingsToDo: [],
  thingToDoDetails: null, // New state to store thing to do details
  loading: false,
  error: null,
};

// Define async thunk for fetching things to do
export const fetchThingsToDo = createAsyncThunk(
  "thingsToDo/fetchThingsToDo",
  async (params) => {
    try {
      const options = {
        method: "GET",
        url: "https://developer.nps.gov/api/v1/thingstodo", // Updated endpoint to things to do
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

export const fetchThingToDoDetails = createAsyncThunk(
  "thingsToDo/fetchThingToDoDetails",
  async (thingToDoId) => { // Change params to thingToDoId to fetch details of a specific thing to do
    try {
      const options = {
        method: "GET",
        url: `https://developer.nps.gov/api/v1/thingstodo/${thingToDoId}`, // Updated endpoint to things to do with thingToDoId
        params: {
          // Add any additional params if needed
        },
        headers: {
          "X-Api-Key": "gSwKu55KzwcQZdpTNQqqkG6t0m9orXYbFff25MFi", // Keep the same API key
        },
      };

      const response = await axios.request(options);
      return response.data; // Return only the data of the thing to do details
    } catch (error) {
      throw error;
    }
  }
);

// Define things to do slice
const thingsToDoSlice = createSlice({
  name: "thingsToDo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchThingsToDo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchThingsToDo.fulfilled, (state, action) => {
        state.loading = false;
        state.thingsToDo = action.payload;
      })
      .addCase(fetchThingsToDo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchThingToDoDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchThingToDoDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.thingToDoDetails = action.payload;
      })
      .addCase(fetchThingToDoDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default thingsToDoSlice.reducer;
