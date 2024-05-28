import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state
const initialState = {
  amenities: [],
  amenityDetails: null, // New state to store amenity details
  loading: false,
  error: null,
};

// Define async thunk for fetching amenities
export const fetchAmenities = createAsyncThunk(
  "amenities/fetchAmenities",
  async (params) => {
    try {
      const options = {
        method: "GET",
        url: "https://developer.nps.gov/api/v1/amenities", // Updated endpoint to amenities
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

export const fetchAmenityDetails = createAsyncThunk(
  "amenities/fetchAmenityDetails",
  async (amenityId) => { // Change params to amenityId to fetch details of a specific amenity
    try {
      const options = {
        method: "GET",
        url: `https://developer.nps.gov/api/v1/amenities/${amenityId}`, // Updated endpoint to amenities with amenityId
        params: {
          // Add any additional params if needed
        },
        headers: {
          "X-Api-Key": "gSwKu55KzwcQZdpTNQqqkG6t0m9orXYbFff25MFi", // Keep the same API key
        },
      };

      const response = await axios.request(options);
      return response.data; // Return only the data of the amenity details
    } catch (error) {
      throw error;
    }
  }
);

// Define amenities slice
const amenitiesSlice = createSlice({
  name: "amenities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAmenities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAmenities.fulfilled, (state, action) => {
        state.loading = false;
        state.amenities = action.payload;
      })
      .addCase(fetchAmenities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAmenityDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAmenityDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.amenityDetails = action.payload;
      })
      .addCase(fetchAmenityDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default amenitiesSlice.reducer;
