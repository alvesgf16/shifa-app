import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

type RootStackParamList = {
    RecoveryTracker: undefined;
    DailyLog: { mood: string };
};

type Props = StackScreenProps<RootStackParamList, 'DailyLog'>;

export default function DailyLogScreen({ navigation, route }: Props) {
    const { mood } = route.params;
    const [log, setLog] = useState('');

    const [fontsLoaded] = useFonts({
        'Khand': require('../../assets/fonts/Khand-Regular.ttf'),
        'Khand-Medium': require('../../assets/fonts/Khand-Medium.ttf'),
        'Khand-Bold': require('../../assets/fonts/Khand-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleSaveLog = () => {
        console.log(`Mood: ${mood}, Log: ${log}`);
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.heading}>Daily Reflection</Text>
                <Text style={styles.moodText}>Your mood: {mood === 'happy' ? '😊' : '😞'}</Text>

                <TextInput
                    style={styles.textInput}
                    placeholder="Write your reflection here..."
                    placeholderTextColor="#888"
                    multiline
                    value={log}
                    onChangeText={setLog}
                />

                <TouchableOpacity style={styles.saveButton} onPress={handleSaveLog}>
                    <Text style={styles.saveButtonText}>Save Reflection</Text>
                </TouchableOpacity>
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
    moodText: {
        fontFamily: 'Khand-Medium',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 16,
    },
    textInput: {
        height: 150,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        textAlignVertical: 'top',
        marginBottom: 20,
        backgroundColor: '#fff',
        fontFamily: 'Khand',
    },
    saveButton: {
        backgroundColor: '#7AA5AA',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Khand-Medium',
    },
});