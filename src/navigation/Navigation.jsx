import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/authScreens/LoginScreen';
import Register from '../screens/authScreens/RegisterScreen';
import HomeScreen from '../screens/homeScreen/Index';
import Profile from '../screens/profileScreens/profile';
import WishList from '../screens/wishlistScreen/WishList';
import Search from '../screens/searchScreen/Search';
import Calender from '../screens/calender/Calender';
import DetailsScreen from '../screens/detailsScreen/Index';
import EditProfile from '../screens/profileScreens/EditProfile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Define the Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="wishList"
        component={WishList}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="calendar"
        component={Calender}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="detailsScreen"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="editProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
