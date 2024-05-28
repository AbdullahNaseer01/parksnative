import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Define initial state
const initialState = {
  data: {
    data: {data: [], total: 0},
  },
  articleDetails: null, // New state to store article details
  loading: false,
  error: null,
};

// Define async thunk for fetching articles
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async params => {
    try {
      const options = {
        method: 'GET',
        url: 'https://developer.nps.gov/api/v1/articles',
        params: params,
        headers: {
          'X-Api-Key': 'gSwKu55KzwcQZdpTNQqqkG6t0m9orXYbFff25MFi',
        },
      };

      const response = await axios.request(options);

      return {data: response.data, params};
    } catch (error) {
      throw error;
    }
  },
);

export const fetchArticleDetails = createAsyncThunk(
  'articles/fetchArticleDetails', // Corrected action type
  async articleId => {
    // Changed params to articleId to fetch details of a specific article
    try {
      const options = {
        method: 'GET',
        url: `https://developer.nps.gov/api/v1/articles?id=${articleId}`, // Use correct URL path for article details
        params: {
          // Add any additional params if needed
        },
        headers: {
          'X-Api-Key': 'gSwKu55KzwcQZdpTNQqqkG6t0m9orXYbFff25MFi',
        },
      };

      const response = await axios.request(options);
      return response.data; // Return only the data of the article details
    } catch (error) {
      throw error;
    }
  },
);

// Define articles slice
const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    clearArticlesData: state => {
      state.data = {
        data: {data: [], total: 0},
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchArticles.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        // Append new articles to the existing data
        state.data.data.data = [
          ...state.data.data.data,
          ...action.payload.data.data,
        ];
        state.data.data.total = action.payload.data.total;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchArticleDetails.pending, state => {
        // Add pending case for fetchArticleDetails
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticleDetails.fulfilled, (state, action) => {
        // Add fulfilled case for fetchArticleDetails
        state.loading = false;
        state.articleDetails = action.payload;
      })
      .addCase(fetchArticleDetails.rejected, (state, action) => {
        // Add rejected case for fetchArticleDetails
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {clearArticlesData} = articlesSlice.actions;
export default articlesSlice.reducer;
