import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../../components/Button/Button';
import styles from './HomeScreen.styles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to apps"
        onclick={() => navigation.navigate('AppList')}
      />
    </View>
  );
};

export default HomeScreen;
