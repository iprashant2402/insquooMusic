import React from 'react';
import {View, Text, Button} from 'react-native';
import {logout} from '../../../utils/auth';
import styles from './EntryScreen.styles';

const EntryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Entry Screen</Text>
      <Button onPress={logout} title="logout" />
    </View>
  );
};

export default EntryScreen;
