import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Navigation from './navigation/Navigation';
import AuthInitializer from './utility/authInitializer';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AuthInitializer>
        <Navigation />
      </AuthInitializer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    // flex: 1,
  },
});
