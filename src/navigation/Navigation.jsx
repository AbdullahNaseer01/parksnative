import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/authScreens/LoginScreen';
import Register from '../screens/authScreens/RegisterScreen';
import HomeScreen from '../screens/homeScreen/Index';
import Profile from '../screens/profileScreens/Profile';
import WishList from '../screens/wishlistScreen/WishList';
import Search from '../screens/searchScreen/Search';
import Calender from '../screens/calender/Calender';
import DetailsScreen from '../screens/detailsScreen/Index';
import EditProfile from '../screens/profileScreens/EditProfile';

// Import your SVG icons
import HomeIcon from '../assets/icons/homeIcon.svg';
import HeartIcon from '../assets/icons/heartIcon.svg';
import SearchIcon from '../assets/icons/searchIcon.svg';
import CalendarIcon from '../assets/icons/calendarIcon.svg';
import ProfileIcon from '../assets/icons/profileIcon.svg';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Define the Tab Navigator with SVG icons
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent;

          if (route.name === 'Home') {
            IconComponent = HomeIcon;
          } else if (route.name === 'wishList') {
            IconComponent = HeartIcon;
          } else if (route.name === 'search') {
            IconComponent = SearchIcon;
          } else if (route.name === 'calendar') {
            IconComponent = CalendarIcon;
          } else if (route.name === 'Profile') {
            IconComponent = ProfileIcon;
          }

          return <IconComponent width={size} height={size} fill={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="wishList"
        component={WishList}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="calendar"
        component={Calender}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

// Define the Stack Navigator
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="detailsScreen"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="editProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
