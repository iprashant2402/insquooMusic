import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EntryScreen from '../screens/app/EntryScreen/EntryScreen';
import HomeScreen from '../screens/app/HomeScreen/HomeScreen';
import CodeScreen from '../screens/app/CodeScreen/CodeScreen';

const App = createStackNavigator();

const AppNavigator = () => {
  return (
    <App.Navigator
      initialRouteName="Entry"
      screenOptions={{header: () => null}}>
      <App.Screen name="Entry" component={EntryScreen} />
      <App.Screen name="Code" component={CodeScreen} />
      <App.Screen name="Home" component={HomeScreen} />
    </App.Navigator>
  );
};

export default AppNavigator;
