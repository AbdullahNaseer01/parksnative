import {createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {db} from '../../config/firebase';
import {ToastAndroid} from 'react-native';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

// GoogleSignin.configure({
//   webClientId:
//     '410122792339-986og3kdl5im005jcjr1o4a9rnls27b4.apps.googleusercontent.com',
//     /// the credential have to be replaced with the web client id of the google cloud console
// });


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
  },
});

export const {setUser, setLoading, setError} = authSlice.actions;

// SignUp
export const registerUser =
  ({displayName, email, password, phoneNumber}) =>
  async dispatch => {
    dispatch(setLoading(true));
    console.log(displayName, email, password, phoneNumber);
    if (!displayName || !email || !password || !phoneNumber) {
      ToastAndroid.show(
        'Please fill your all required fields',
        ToastAndroid.SHORT,
      );
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      auth().currentUser?.updateProfile({
        displayName: displayName,
      });
      await db().collection('students').doc(auth().currentUser?.uid).set({
        displayName: displayName,
        email: email,
        phoneNumber: phoneNumber,
      });
      dispatch(
        setUser({
          displayName: displayName,
          email: email,
          phoneNumber: phoneNumber,
        }),
      );
      setLoading(false);
      ToastAndroid.show('User registered successfully!', ToastAndroid.SHORT);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        ToastAndroid.show('This email is already in use', ToastAndroid.SHORT);
      }
      if (error.code === 'auth/invalid-email') {
        ToastAndroid.show('This email is invalid', ToastAndroid.SHORT);
      }
      if (error.code === 'auth/weak-password') {
        ToastAndroid.show('Password is too weak', ToastAndroid.SHORT);
      }
      console.log('Error', error.message);
      setLoading(false);
    }
  };

export const loginUser =
  ({email, password}) =>
  async dispatch => {
    dispatch(setLoading(true));
    try {
      if (!email || !password) {
        ToastAndroid.show(
          'Please enter your email and password correctly',
          ToastAndroid.SHORT,
        );
      }
      await auth().signInWithEmailAndPassword(email, password);
      const currentUser = auth().currentUser;
      if (currentUser) {
        dispatch(
          setUser({
            displayName: currentUser.displayName || '',
            email: currentUser.email || '',
          }),
        );
      }
      ToastAndroid.show('User logged in!', ToastAndroid.SHORT);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        ToastAndroid.show('User not found', ToastAndroid.SHORT);
      }
      if (error.code === 'auth/wrong-password') {
        ToastAndroid.show('Invalid password', ToastAndroid.SHORT);
      }
      if (error.code === 'auth/invalid-email') {
        ToastAndroid.show('Invalid email', ToastAndroid.SHORT);
      }
      ToastAndroid.show('Login failed', ToastAndroid.SHORT);
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };


  // export const googleSignin = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  //     await GoogleSignin.signOut();
  //     const {idToken} = await GoogleSignin.signIn();
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //     await auth().signInWithCredential(googleCredential);
  //     const userDoc = await firestore()
  //       .collection('users')
  //       .doc(auth()?.currentUser?.uid)
  //       .get();
  
  //     if (!userDoc.exists) {
  //       await firestore()
  //         .collection('users')
  //         .doc(auth()?.currentUser?.uid)
  //         .set({
  //           displayName: auth()?.currentUser?.displayName,
  //           email: auth()?.currentUser?.email,
  //           profileImage: auth()?.currentUser?.photoURL || null,
  //           uid: auth()?.currentUser?.uid,
  //         });
  //       ToastAndroid.show('New user signed up successfully!', ToastAndroid.SHORT);
  //     } else {
  //       ToastAndroid.show('User signed in successfully!', ToastAndroid.SHORT);
  //     }
  //   } catch (error) {
  //     console.log('error', error);
  //     ToastAndroid.show('Google Signin failed', ToastAndroid.SHORT);
  //     if (error.code === 'auth/account-exists-with-different-credential') {
  //       console.log('danger', 'Account already exists with different credential');
  //       ToastAndroid.show(
  //         'Account already exists with different credential',
  //         ToastAndroid.SHORT,
  //       );
  //     }
  //     if (error.code === 'auth/invalid-credential') {
  //       console.log('danger', 'Invalid credential');
  //       ToastAndroid.show('Invalid credential', ToastAndroid.SHORT);
  //     }
  //   }
  // };

export default authSlice.reducer;
