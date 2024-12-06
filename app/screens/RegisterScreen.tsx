import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../screens/LoginScreen'; 
import { useFonts } from 'expo-font';

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RegisterScreen'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

export default function RegisterScreen({ navigation }: Props) {
  const [form, setForm] = useState({
    username: '',
    firstName: '',
    middleName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    country: '',
    province: '',
    postalCode: '',
    email: '',
    phone: '',
    birthDate: '',
    addictions: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    console.log('Registration Data:', form);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.heading}>Create Account</Text>
        {[
          { label: 'Username', field: 'username' },
          { label: 'First Name', field: 'firstName' },
          { label: 'Middle Name', field: 'middleName' },
          { label: 'Last Name', field: 'lastName' },
          { label: 'Address Line 1', field: 'address1' },
          { label: 'Address Line 2', field: 'address2' },
          { label: 'Town/City', field: 'city' },
          { label: 'Country', field: 'country' },
          { label: 'Province/State', field: 'province' },
          { label: 'Postal Code', field: 'postalCode' },
          { label: 'Email Address', field: 'email', keyboardType: 'email-address' },
          { label: 'Phone', field: 'phone', keyboardType: 'phone-pad' },
          { label: 'Date of Birth (YYYY-MM-DD)', field: 'birthDate' },
          { label: 'Addiction(s)', field: 'addictions' },
        ].map(({ label, field, keyboardType = 'default' }) => (
          <View key={field}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              style={styles.input}
              placeholder={label}
              placeholderTextColor="#888"
              keyboardType={keyboardType}
              value={form[field]}
              onChangeText={(value) => handleChange(field, value)}
            />
          </View>
        ))}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F1',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 32,
  },
  heading: {
    fontFamily: 'Khand-Bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
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
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontFamily: 'Khand',
  },
  submitButton: {
    backgroundColor: '#F0CF7C',
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
  },
  submitButtonText: {
    fontFamily: 'Khand-Bold',
    fontSize: 18,
  },
});