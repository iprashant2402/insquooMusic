import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AppListScreen from '../screens/app/AppListScreen/AppListScreen';
import HomeScreen from '../screens/app/HomeScreen/HomeScreen';
import CodeScreen from '../screens/app/CodeScreen/CodeScreen';

const App = createMaterialTopTabNavigator();

const AppNavigator = () => {
  // const config = {
  //   animation: 'spring',
  //   config: {
  //     stiffness: 1000,
  //     damping: 500,
  //     mass: 3,
  //     overshootClamping: true,
  //     restDisplacementThreshold: 0.01,
  //     restSpeedThreshold: 0.01,
  //   },
  // };
  // const MyTransition = {
  //   transitionSpec: {
  //     open: config,
  //     close: config,
  //   },
  //   headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  //   cardStyleInterpolator: ({current, next, layouts}) => {
  //     return {
  //       cardStyle: {
  //         transform: [
  //           {
  //             translateX: current.progress.interpolate({
  //               inputRange: [0, 1],
  //               outputRange: [layouts.screen.width, 0],
  //             }),
  //           },
  //           // {
  //           //   rotate: current.progress.interpolate({
  //           //     inputRange: [0, 0],
  //           //     outputRange: [0, 0],
  //           //   }),
  //           // },
  //           // {
  //           //   scale: next
  //           //     ? next.progress.interpolate({
  //           //         inputRange: [0, 1],
  //           //         outputRange: [1, 0.9],
  //           //       })
  //           //     : 1,
  //           // },
  //         ],
  //       },
  //       overlayStyle: {
  //         opacity: current.progress.interpolate({
  //           inputRange: [0, 1],
  //           outputRange: [0, 0.5],
  //         }),
  //       },
  //     };
  //   },
  // };
  return (
    <App.Navigator initialRouteName="Home" screenOptions={{header: () => null}}>
      <App.Screen name="AppList" component={AppListScreen} />
      {/* <App.Screen name="Code" options={MyTransition} component={CodeScreen} /> */}
      <App.Screen name="Home" component={HomeScreen} />
    </App.Navigator>
  );
};

export default AppNavigator;
