import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, Platform, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { useUserAuth } from '../contexts/AuthContext';
import { loginUser } from '../apiService'; // Ensure the correct import path

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ProfileScreen: undefined;
  ForgetPassword: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function LoginScreen({ navigation }: Props) {
  const { onGoogleButtonPress, user } = useUserAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts({
    'Khand': require('../../assets/fonts/Khand-Regular.ttf'),
    'Khand-Medium': require('../../assets/fonts/Khand-Medium.ttf'),
    'Khand-Bold': require('../../assets/fonts/Khand-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Validation Error', 'Please enter both email and password.');
      return;
    }
    try {
      const response = await loginUser(email, password);
      if (response) {
        // Navigate to Home screen on successful login
        navigation.navigate('Home');
      } else {
        Alert.alert('Login failed', 'Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Login failed', 'An error occurred. Please try again.');
    }
  };

  return (
    user ? (navigation.navigate('Home')) : (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/Logo.png')} style={styles.logo} />
          <Text style={styles.logoText}>Shifa</Text>
        </View>
        <Text style={styles.heading}>Login to your account</Text>
        <Text style={styles.label}>Email or Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Email or Username"
          placeholderTextColor="#888"
          keyboardType="default"
          value={email}
          onChangeText={setEmail}
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
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
              style={styles.googleButton}
              onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
            >
              <Image source={require('../../assets/images/Google.png')} style={styles.googleIcon} />
              <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  ));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F1',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  logoText: {
    fontFamily: 'Khand-Bold',
    fontSize: 24,
    marginTop: 8,
  },
  heading: {
    fontFamily: 'Khand-Bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 32,
  },
  label: {
    fontFamily: 'Khand-Medium',
    fontSize: 16,
    marginBottom: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  forgotText: {
    fontFamily: 'Khand',
    fontSize: 14,
    color: 'blue',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontFamily: 'Khand',
  },
  loginButton: {
    backgroundColor: '#F0CF7C',
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
  },
  loginButtonText: {
    fontFamily: 'Khand-Bold',
    fontSize: 18,
    color: '#303C50',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D1E9FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  googleButtonText: {
    fontFamily: 'Khand-Medium',
    color: 'black',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontFamily: 'Khand',
    fontSize: 16,
  },
  signupLink: {
    fontFamily: 'Khand-Medium',
    fontSize: 16,
    color: 'blue',
  },
});