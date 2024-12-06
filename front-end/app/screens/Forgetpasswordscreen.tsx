import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

type RootStackParamList = {
    Login: undefined;
    VerifyPasswordScreen: undefined;
   
};

type ForgetPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList, 'VerifyPasswordScreen'>;

type Props = {
    navigation: ForgetPasswordScreenNavigationProp;
};

export default function ForgetPasswordScreen({ navigation }: Props) {
    const [fontsLoaded] = useFonts({
        'Khand': require('../../assets/fonts/Khand-Regular.ttf'),
        'Khand-Medium': require('../../assets/fonts/Khand-Medium.ttf'),
        'Khand-Bold': require('../../assets/fonts/Khand-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleChangePassword = () => {
        navigation.navigate('VerifyPasswordScreen');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.heading}>Forgot Password</Text>
                <Text style={styles.label}>Your Email</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter your email" 
                    placeholderTextColor="#888"
                    keyboardType="email-address"
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleChangePassword}>
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
        backgroundColor: '#FFF9F1',
        padding: 16,
    },
    content: {
        marginTop: 150,
        paddingHorizontal: 20,
    },
    heading: {
        fontFamily: 'Khand-Bold',
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
    },
    label: {
        fontFamily: 'Khand-Medium',
        fontSize: 16,
        marginBottom: 8,
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
    submitButton: {
        backgroundColor: '#7AA5AA',
        padding: 12,
        alignItems: 'center',
        borderRadius: 8,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Khand-Medium',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    loginText: {
        fontSize: 16,
        fontFamily: 'Khand',
    },
    loginLink: {
        fontSize: 16,
        color: '#007BFF',
        fontFamily: 'Khand-Medium',
    },
});