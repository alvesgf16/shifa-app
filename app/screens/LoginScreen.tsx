import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for the navigation prop
type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;


type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function LoginScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/Logo.png')} style={styles.logo} />
        <Text style={styles.logoText}>Shifa</Text>
      </View>
      <Text style={styles.heading}>Login to your account</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888" // Set placeholder text color
        keyboardType="email-address"
      />
      <View style={styles.passwordContainer}>
        <Text style={styles.label}>Password</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forgotText}>Forgot?</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888" // Set placeholder text color
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align content to the top
    padding: 16,
    paddingTop: Platform.OS === 'android' ? 40 : 60, // Adjust padding for Android and iOS
    backgroundColor: '#FFF9F1', // Set the background color to #FFF9F1
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 32, // Add margin to the top to create space
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain', // Ensure the image scales correctly
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  forgotText: {
    fontSize: 14,
    color: 'blue',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5, // Add border radius for better appearance on iOS
  },
  loginButton: {
    backgroundColor: '#F0CF7C', // Set the background color to #F0CF7C
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 5, // Add border radius for better appearance on iOS
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  signupText: {
    textAlign: 'center',
  },
  signupLink: {
    color: 'blue',
  },
});