import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import RecoveryTrackerScreen from './screens/RecoveryTrackerScreen';


const Stack = createStackNavigator();

export default function RootLayout() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="RecoveryTracker" component={RecoveryTrackerScreen} />
      </Stack.Navigator>
  );
}