import React, { useContext } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useUserAuth } from '../contexts/AuthContext';
import { useFonts } from 'expo-font';

// ... (types remain the same)

export default function SignUpScreen({ navigation }: Props) {
  const { onGoogleButtonPress } = useUserAuth();
  const [fontsLoaded] = useFonts({
    'Khand': require('../../assets/fonts/Khand-Regular.ttf'),
    'Khand-Medium': require('../../assets/fonts/Khand-Medium.ttf'),
    'Khand-Bold': require('../../assets/fonts/Khand-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Create your account</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />
        <View style={styles.createAccountButton}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.createAccountButtonText}>Create Account</Text>
        </TouchableOpacity></View>
        <TouchableOpacity style={styles.googleButton} onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
          <Image source={require('../../assets/images/Google.png')} style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signupLink}>Login</Text>
          </TouchableOpacity></View>
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
  heading: {
    fontFamily: 'Khand-Bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 32,
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
});