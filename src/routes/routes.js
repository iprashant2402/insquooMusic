import React from 'react';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import auth from '@react-native-firebase/auth';
import {Text, View} from 'react-native';

const Routes = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState(null);

  // Handle user state changes
  function onAuthStateChanged(userData) {
    setUser(userData);
    if (initializing) {
      setInitializing(false);
    }
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    //TODO: RENDER A PROPER AUTH LOADING SCREEN
    return (
      <View>
        <Text>Logging you in broo..</Text>
      </View>
    );
  }

  return user ? <AppNavigator /> : <AuthNavigator />;
};

export default Routes;
