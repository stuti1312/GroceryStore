import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../screens/Home"
import Favourites from "../screens/Favourites"
import Notification from "../screens/Notifications"
import Profile from "../screens/Profile"
import GetStarted from "../screens/GetStarted"
import Detail from "../screens/Detail"
import Categories from "../screens/Categories"
import BottomNavigator from "../navigators/BottomNavigator"
import New from '../screens/New';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen
        name="Favorite"
        component={Favourites}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const HomeRoute = () => {
  return (
    <Stack.Navigator initialRouteName='newScreen'>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="newScreen"
        component={New}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeRoute