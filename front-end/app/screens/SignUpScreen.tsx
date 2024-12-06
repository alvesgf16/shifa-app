import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

type Props = {
  navigation: StackNavigationProp<any, any>;
};

export default function SignUpScreen({ navigation }: Props) {
  const [fontsLoaded] = useFonts({
    'Khand': require('../../assets/fonts/Khand-Regular.ttf'),
    'Khand-Medium': require('../../assets/fonts/Khand-Medium.ttf'),
    'Khand-Bold': require('../../assets/fonts/Khand-Bold.ttf'),
  });

  const [isAccountCreated, setIsAccountCreated] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  const handleCreateAccount = () => {
    setIsAccountCreated(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {!isAccountCreated ? (
          <>
            <Text style={styles.heading}>Create your account</Text>
            <Text style={styles.label}>Email or Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Email or Username"
              placeholderTextColor="#888"
              keyboardType="default"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
            />
            <View style={styles.createAccountButton}>
              <TouchableOpacity onPress={handleCreateAccount}>
                <Text style={styles.createAccountButtonText}>Create Account</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signupLink}>Login</Text>
              </TouchableOpacity>
            </View>
          </>
) : (
  <View style={styles.confirmationContainer}>
    <Text style={styles.heading}>Account Created Successfully!</Text>
    <Text style={styles.appMessage}>Thank you for downloading Shifa!</Text>
    <Text style={styles.confirmationMessage}>
      Your account has been created. Please log in with your credentials.
    </Text>
    <TouchableOpacity
      style={styles.loginButton}
      onPress={() => navigation.navigate('Login')}
    >
      <Text style={styles.loginButtonText}>Go to Login</Text>
    </TouchableOpacity>
  </View>
)}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: '#FFF9F1',
  },
  contentContainer: {
    marginTop: Platform.OS === 'android' ? 60 : 80,
    paddingHorizontal: 20,
  },
  label: {
    fontFamily: 'Khand-Medium',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontFamily: 'Khand',
  },
  createAccountButton: {
    backgroundColor: '#F0CF7C',
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
  },
  createAccountButtonText: {
    fontFamily: 'Khand-Bold',
    fontSize: 18,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  signupText: {
    fontFamily: 'Khand',
    textAlign: 'center',
  },
  signupLink: {
    fontFamily: 'Khand-Medium',
    color: 'blue',
  },
  confirmationContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 16,
    backgroundColor: '#FFF9F1',
  },
  heading: {
    fontFamily: 'Khand-Bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
    color: '#303C50', 
  },
  appMessage: {
    fontFamily: 'Khand-Medium',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 24,
    color: '#707070',
  },
  confirmationMessage: {
    fontFamily: 'Khand',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    color: '#555', 
  },
  loginButton: {
    backgroundColor: '#F0CF7C',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  loginButtonText: {
    fontFamily: 'Khand-Bold',
    fontSize: 18,
    color: '#303C50', 
  },
});