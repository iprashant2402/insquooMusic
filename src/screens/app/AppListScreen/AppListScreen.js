import React from 'react';
import {
  View,
  Text,
  NativeModules,
  BackHandler,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Button from '../../../components/Button/Button';
import {logout} from '../../../utils/auth';
import {InstalledApps} from '../../../utils/InstalledApps';
import styles from './AppListScreen.styles';

const AppListScreen = ({navigation}) => {
  const [apps, setApps] = React.useState([]);

  React.useEffect(() => {
    setApps(JSON.parse(InstalledApps.getApps));
  }, []);

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return BackHandler.removeEventListener('hardwareBackPress');
  }, []);

  const _handleOnPress = app => {
    InstalledApps.launchApplication(app.name);
  };

  return (
    <ScrollView style={styles.container}>
      <Button title="Go to home" onclick={() => navigation.navigate('Home')} />
      {apps.map((app, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() => _handleOnPress(app)}
            style={styles.appListItem}>
            <Image
              style={styles.icon}
              resizeMode={'contain'}
              source={{uri: 'data:image/png;base64,' + app.icon}}
            />
            <Text style={styles.text}>{app.label}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default AppListScreen;
