import { StyleSheet } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navigation from './navigation/Navigation';


const App = () => {
  return (
    <Provider store={store}>
    
      <Navigation />
    

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
