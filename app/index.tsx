import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootLayout from './_layout';
import { AuthContextProvider } from './contexts/AuthContext';

export default function App() {
  return (
      <NavigationContainer>
        <RootLayout />
      </NavigationContainer>
  );
}
