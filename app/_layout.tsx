import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import RecoveryTrackerScreen from './screens/RecoveryTrackerScreen';
import DailyLogScreen from './screens/DailyLogScreen';
import VerifyPasswordScreen from './screens/VerifyPasswordScreen';
import CreatePasswordScreen from './screens/CreatePasswordScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import { AuthContextProvider } from './contexts/AuthContext';


const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <AuthContextProvider>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
      <Stack.Screen name="RecoveryTracker" component={RecoveryTrackerScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="DailyLog" component={DailyLogScreen} />
      <Stack.Screen name="VerifyPasswordScreen" component={VerifyPasswordScreen} />
      <Stack.Screen name="CreatePasswordScreen" component={CreatePasswordScreen} />

    </Stack.Navigator>
  </AuthContextProvider>
  );
}