// dependencies
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';

// screens
import Login from '../screens/authScreens/LoginScreen';
import Register from '../screens/authScreens/RegisterScreen';
import HomeScreen from '../screens/homeScreen/Index';
import WishList from '../screens/wishlistScreen/WishList';
import Search from '../screens/searchScreen/Search';
import Calender from '../screens/calender/Calender';
import DetailsScreen from '../screens/detailsScreen/Index';
import EditProfile from '../screens/profileScreens/EditProfile';

// colors
import {COLORS} from '../constants/colors.constant';
import ForgotScreen from '../screens/authScreens/ForgotPassword';
import UserProfileScreen from '../screens/profileScreens/UserProfile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Define the Tab Navigator with vector icons
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'wishList') {
            iconName = 'favorite';
          } else if (route.name === 'search') {
            iconName = 'search';
          } else if (route.name === 'calendar') {
            iconName = 'calendar-today';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.SECONDARY,
        tabBarInactiveTintColor: COLORS.PRIMARY,
      })}>
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
        component={UserProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

// Define the Stack Navigator
const Navigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="Main"
              component={TabNavigator}
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
          </>
        ) : (
          <>
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
              name="ForgotScreen"
              component={ForgotScreen}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
