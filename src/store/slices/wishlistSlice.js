// src/redux/slices/wishlistSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { app } from "../../../../firebase/firebaseConfig"; // Adjust the path as needed

const db = getFirestore(app);

export const updateWishlist = createAsyncThunk(
  "wishlist/updateWishlist",
  async ({ uid, parkCode }, { rejectWithValue }) => {
    try {
      const userDocRef = doc(db, "users", uid);
      const userDoc = await userDocRef.get();
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const wishlist = userData.wishlist || [];
        if (wishlist.includes(parkCode)) {
          await updateDoc(userDocRef, {
            wishlist: arrayRemove(parkCode),
          });
          console.log("Park removed from wishlist");
        } else {
          await updateDoc(userDocRef, {
            wishlist: arrayUnion(parkCode),
          });
            console.log("Park added to wishlist");
        }
      } else {
        throw new Error("User document does not exist");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateWishlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updateWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default wishlistSlice.reducer;
