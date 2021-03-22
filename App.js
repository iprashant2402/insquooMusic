import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/routes';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {webClientId_google} from './src/config/config';
import {AuthProvider} from './src/context/auth/AuthContext';

GoogleSignin.configure({
  webClientId: webClientId_google,
});

export default function App() {
  const [user, setUser] = React.useState(null);
  const updateUser = data => {
    setUser(data);
  };
  return (
    <AuthProvider
      value={{
        user,
        updateUser,
      }}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}
