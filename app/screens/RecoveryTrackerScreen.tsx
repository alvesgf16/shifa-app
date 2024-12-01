import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
  RecoveryTracker: undefined;
};

type RecoveryTrackerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RecoveryTracker'>;

type Props = {
  navigation: RecoveryTrackerScreenNavigationProp;
};

const RecoveryTrackerScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Recovery Tracker!</Text>
      <Button
        title="Go Back to Login"
        onPress={() => navigation.navigate('Login')} // Example of navigating back to the Login screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF9F1',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default RecoveryTrackerScreen;
