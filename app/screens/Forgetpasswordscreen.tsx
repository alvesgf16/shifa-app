import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for the navigation prop
type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
  RecoveryTracker: undefined;
};

type forgetPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ForgetPassword'>;

type props = {
  navigation: forgetPasswordScreenNavigationProp;
};

export default function ForgetPasswordScreen({ navigation }: props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Forgot Password</Text>
        <Text style={styles.label}>Your Email</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your email" 
          placeholderTextColor="#888" // Set placeholder text color
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.submitButton} onPress={() => {}}>
          <Text style={styles.submitButtonText}>Change Password</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Remembered your password? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F1', // Same background color as the LoginScreen
    padding: 16,
  },
  content: {
    marginTop: 150, // Shift everything down
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 50, // Increased height for the text input
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  submitButton: {
    backgroundColor: '#7AA5AA', // Color for the Change Password button
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    fontSize: 16,
    color: '#007BFF',
  },
});