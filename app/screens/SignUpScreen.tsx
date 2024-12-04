import React, { useContext } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useUserAuth } from '../contexts/AuthContext';

// Define the type for the navigation prop
type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

export default function SignUpScreen({ navigation }: Props) {
  const { onGoogleButtonPress } = useUserAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Create your account</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888" // Set placeholder text color
          keyboardType="email-address"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888" // Set placeholder text color
          secureTextEntry
        />
        <TouchableOpacity style={styles.createAccountButton} onPress={() => {}}>
          <Text style={styles.createAccountButtonText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton} onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
          <Image source={require('../../assets/images/Google.png')} style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signupLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align content to the top
    padding: 16,
    backgroundColor: '#FFF9F1', // Set the background color to #FFF9F1
  },
  contentContainer: {
    marginTop: Platform.OS === 'android' ? 60 : 80, // Add top margin to shift content down
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the text
    backgroundColor: '#D1E9FF', // Set the background color to #D1E9FF
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 16,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain', // Ensure the image scales correctly
  },
  googleButtonText: {
    color: 'black', // Set the text color to black for better contrast
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5, // Add border radius for better appearance on iOS
  },
  createAccountButton: {
    backgroundColor: '#F0CF7C', // Set the background color to #F0CF7C
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 5, // Add border radius for better appearance on iOS
  },
  createAccountButtonText: {
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