import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state
const initialState = {
  topics: [],
  topicDetails: null, // New state to store topic details
  loading: false,
  error: null,
};

// Define async thunk for fetching topics
export const fetchTopics = createAsyncThunk(
  "topics/fetchTopics",
  async (params) => {
    try {
      const options = {
        method: "GET",
        url: "https://developer.nps.gov/api/v1/topics", // Updated endpoint to topics
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

export const fetchTopicDetails = createAsyncThunk(
  "topics/fetchTopicDetails",
  async (topicId) => { // Change params to topicId to fetch details of a specific topic
    try {
      const options = {
        method: "GET",
        url: `https://developer.nps.gov/api/v1/topics/${topicId}`, // Updated endpoint to topics with topicId
        params: {
          // Add any additional params if needed
        },
        headers: {
          "X-Api-Key": "gSwKu55KzwcQZdpTNQqqkG6t0m9orXYbFff25MFi", // Keep the same API key
        },
      };

      const response = await axios.request(options);
      return response.data; // Return only the data of the topic details
    } catch (error) {
      throw error;
    }
  }
);

// Define topics slice
const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopics.fulfilled, (state, action) => {
        state.loading = false;
        state.topics = action.payload;
      })
      .addCase(fetchTopics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchTopicDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopicDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.topicDetails = action.payload;
      })
      .addCase(fetchTopicDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default topicsSlice.reducer;
