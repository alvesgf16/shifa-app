import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

type RootStackParamList = {
    VerifyPasswordScreen: undefined;
    CreatePasswordScreen: undefined;
    ForgotPasswordScreen: undefined;
};

type VerifyPasswordScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'VerifyPasswordScreen'
>;

type Props = {
  navigation: VerifyPasswordScreenNavigationProp;
};

export default function VerifyPasswordScreen({ navigation }: Props) {
    const [code, setCode] = useState(['', '', '', '']);
    const [fontsLoaded] = useFonts({
        'Khand': require('../../assets/fonts/Khand-Regular.ttf'),
        'Khand-Medium': require('../../assets/fonts/Khand-Medium.ttf'),
        'Khand-Bold': require('../../assets/fonts/Khand-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleChangeText = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
    };

    const handleVerify = () => {
        // Handle verification logic here
        console.log('Verify code:', code.join(''));
        navigation.navigate('CreatePasswordScreen'); // Navigate to CreatePasswordScreen after verification
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPasswordScreen');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Text style={styles.heading}>Verify Your Password</Text>
            <Text style={styles.subheading}>Enter the 4-digit code sent to your email</Text>

            <View style={styles.codeContainer}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.codeInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={(text) => handleChangeText(text, index)}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                <Text style={styles.verifyButtonText}>Verify</Text>
            </TouchableOpacity>

            <TouchableOpacity >
                <Text style={styles.forgotPasswordText}>Resend code?</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFF9F1',
    },
    heading: {
        fontFamily: 'Khand-Bold',
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
    },
    subheading: {
        fontFamily: 'Khand-Medium',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 32,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    codeInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 24,
        backgroundColor: '#fff',
        marginHorizontal: 8,
        fontFamily: 'Khand',
    },
    verifyButton: {
        backgroundColor: '#7AA5AA',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    verifyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Khand-Medium',
    },
    forgotPasswordText: {
        color: '#7AA5AA',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Khand-Medium',
    },
});