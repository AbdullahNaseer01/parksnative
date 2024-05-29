import {createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ToastAndroid} from 'react-native';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    updateWishlist: (state, action) => {
      if (state.user) {
        state.user.wishlist = action.payload;
      }
    },
  },
});

export const {setUser, setLoading, setError, updateWishlist} =
  authSlice.actions;

// Initialize the auth state by checking if a user is already logged in
export const initializeAuthState = () => async dispatch => {
  dispatch(setLoading(true));
  auth().onAuthStateChanged(async user => {
    if (user) {
      try {
        const userDoc = await firestore()
          .collection('users')
          .doc(user.uid)
          .get();
        const userData = userDoc.data();
        dispatch(
          setUser({
            displayName: userData.displayName || '',
            email: userData.email || '',
            phoneNumber: userData.phoneNumber || '',
            wishlist: userData.wishlist || [],
          }),
        );
      } catch (error) {
        console.error('Failed to fetch user data: ', error);
        dispatch(setError(error.message));
      }
    } else {
      dispatch(setUser(null));
    }
    dispatch(setLoading(false));
  });
};

// SignUp
export const registerUser =
  ({displayName, email, password, phoneNumber}) =>
  async dispatch => {
    dispatch(setLoading(true));
    if (!displayName || !email || !password || !phoneNumber) {
      ToastAndroid.show('Please fill all required fields', ToastAndroid.SHORT);
      dispatch(setLoading(false));
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      const currentUser = auth().currentUser;
      if (currentUser) {
        await currentUser.updateProfile({displayName});
        await firestore().collection('users').doc(currentUser.uid).set({
          displayName,
          email,
          phoneNumber,
          wishlist: [],
        });
        dispatch(setUser({displayName, email, phoneNumber, wishlist: []}));
        ToastAndroid.show('User registered successfully!', ToastAndroid.SHORT);
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        ToastAndroid.show('This email is already in use', ToastAndroid.SHORT);
      } else if (error.code === 'auth/invalid-email') {
        ToastAndroid.show('This email is invalid', ToastAndroid.SHORT);
      } else if (error.code === 'auth/weak-password') {
        ToastAndroid.show('Password is too weak', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Registration failed', ToastAndroid.SHORT);
      }
      console.error('Registration error: ', error.message);
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

// Login
export const loginUser =
  ({email, password}) =>
  async dispatch => {
    dispatch(setLoading(true));
    if (!email || !password) {
      ToastAndroid.show(
        'Please enter your email and password correctly',
        ToastAndroid.SHORT,
      );
      dispatch(setLoading(false));
      return;
    }
    try {
      await auth().signInWithEmailAndPassword(email, password);
      const currentUser = auth().currentUser;
      if (currentUser) {
        const userDoc = await firestore()
          .collection('users')
          .doc(currentUser.uid)
          .get();
        const userData = userDoc.data();
        dispatch(
          setUser({
            displayName: userData.displayName || '',
            email: userData.email || '',
            phoneNumber: userData.phoneNumber || '',
            wishlist: userData.wishlist || [],
          }),
        );
        ToastAndroid.show('User logged in!', ToastAndroid.SHORT);
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        ToastAndroid.show('User not found', ToastAndroid.SHORT);
      } else if (error.code === 'auth/wrong-password') {
        ToastAndroid.show('Invalid password', ToastAndroid.SHORT);
      } else if (error.code === 'auth/invalid-email') {
        ToastAndroid.show('Invalid email', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Login failed', ToastAndroid.SHORT);
      }
      console.error('Login error: ', error.message);
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

const isItemInWishlist = (wishlist, item) => {
  return wishlist.some(
    wishlistItem => wishlistItem?.data?.id === item?.data?.id,
  );
};

// Add to Wishlist
export const addToWishlist = item => async (dispatch, getState) => {
  dispatch(setLoading(true));
  const {user} = getState().auth;
  const newWishlist = [...user.wishlist, item];

  try {
    await firestore().collection('users').doc(auth().currentUser?.uid).update({
      wishlist: newWishlist,
    });
    dispatch(updateWishlist(newWishlist));
    ToastAndroid.show('Item added to wishlist!', ToastAndroid.SHORT);
  } catch (error) {
    console.log('Error adding to wishlist: ', error.message);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Remove from Wishlist
export const removeFromWishlist = itemId => async (dispatch, getState) => {
  dispatch(setLoading(true));
  const {user} = getState().auth;
  const newWishlist = user.wishlist.filter(
    wishlistItem => wishlistItem?.data?.id !== itemId,
  );

  try {
    await firestore().collection('users').doc(auth().currentUser?.uid).update({
      wishlist: newWishlist,
    });
    dispatch(updateWishlist(newWishlist));
    ToastAndroid.show('Item removed from wishlist!', ToastAndroid.SHORT);
  } catch (error) {
    console.log('Error removing from wishlist: ', error.message);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default authSlice.reducer;
