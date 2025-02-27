import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Define initial state
const initialState = {
  campgrounds: {
    data: [],
    total: 0,
  },
  campgroundDetails: null, // New state to store campground details
  loading: false,
  error: null,
};

// Define async thunk for fetching campgrounds
export const fetchCampgrounds = createAsyncThunk(
  'campgrounds/fetchCampgrounds',
  async params => {
    try {
      const options = {
        method: 'GET',
        url: 'https://developer.nps.gov/api/v1/campgrounds', // Updated endpoint to campgrounds
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

export const fetchCampgroundDetails = createAsyncThunk(
  'campgrounds/fetchCampgroundDetails',
  async campgroundId => {
    // Change params to campgroundId to fetch details of a specific campground
    try {
      const options = {
        method: 'GET',
        url: `https://developer.nps.gov/api/v1/campgrounds/${campgroundId}`, // Updated endpoint to campgrounds with campgroundId
        params: {
          // Add any additional params if needed
        },
        headers: {
          'X-Api-Key': 'gSwKu55KzwcQZdpTNQqqkG6t0m9orXYbFff25MFi', // Keep the same API key
        },
      };

      const response = await axios.request(options);
      return response.data; // Return only the data of the campground details
    } catch (error) {
      throw error;
    }
  },
);

// Define campgrounds slice
const campgroundsSlice = createSlice({
  name: 'campgrounds',
  initialState,
  reducers: {
    clearCampgroundsData: state => {
      state.campgrounds = {
        data: [],
        total: 0,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampgrounds.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampgrounds.fulfilled, (state, action) => {
        state.loading = false;
        // Append new campgrounds to the existing data
        state.campgrounds.data = [
          ...state.campgrounds.data,
          ...action.payload.data.data,
        ];
        state.campgrounds.total = action.payload.data.total;
      })
      .addCase(fetchCampgrounds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCampgroundDetails.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampgroundDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.campgroundDetails = action.payload;
      })
      .addCase(fetchCampgroundDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {clearCampgroundsData} = campgroundsSlice.actions;
export default campgroundsSlice.reducer;
