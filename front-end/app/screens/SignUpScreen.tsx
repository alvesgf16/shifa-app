import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, Platform, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { registerUser } from '../apiService'; // Ensure the correct import path

type Props = {
  navigation: StackNavigationProp<any, any>;
};

export default function SignUpScreen({ navigation }: Props) {
  const [fontsLoaded] = useFonts({
    'Khand': require('../../assets/fonts/Khand-Regular.ttf'),
    'Khand-Medium': require('../../assets/fonts/Khand-Medium.ttf'),
    'Khand-Bold': require('../../assets/fonts/Khand-Bold.ttf'),
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAccountCreated, setIsAccountCreated] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  const handleCreateAccount = async () => {
    if (!email || !password) {
      Alert.alert('Validation Error', 'Please enter both email and password.');
      return;
    }

    try {
      const response = await registerUser(email, password);
      if (response) {
        setIsAccountCreated(true);
      } else {
        Alert.alert('Registration failed', 'Please try again.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      Alert.alert('Registration failed', 'An error occurred. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {!isAccountCreated ? (
          <>
            <Text style={styles.heading}>Create your account</Text>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#888"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <View style={styles.createAccountButton}>
              <TouchableOpacity onPress={handleCreateAccount}>
                <Text style={styles.createAccountButtonText}>Create Account</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
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
              onPress={() => navigation.goBack()}
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