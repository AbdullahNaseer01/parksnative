import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state
const initialState = {
  events: [],
  eventDetails: null, // New state to store event details
  loading: false,
  error: null,
};

// Define async thunk for fetching events
export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async (params) => {
    try {
      const options = {
        method: "GET",
        url: "https://developer.nps.gov/api/v1/events", // Updated endpoint to events
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

export const fetchEventDetails = createAsyncThunk(
  "events/fetchEventDetails",
  async (eventId) => { // Change params to eventId to fetch details of a specific event
    try {
      const options = {
        method: "GET",
        url: `https://developer.nps.gov/api/v1/events/${eventId}`, // Updated endpoint to events with eventId
        params: {
          // Add any additional params if needed
        },
        headers: {
          "X-Api-Key": "gSwKu55KzwcQZdpTNQqqkG6t0m9orXYbFff25MFi", // Keep the same API key
        },
      };

      const response = await axios.request(options);
      return response.data; // Return only the data of the event details
    } catch (error) {
      throw error;
    }
  }
);

// Define events slice
const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchEventDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEventDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.eventDetails = action.payload;
      })
      .addCase(fetchEventDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default eventsSlice.reducer;
