import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define the navigation types
type RootStackParamList = {
    RecoveryTracker: undefined;
    DailyLog: { mood: string }; // Pass `mood` as a parameter
};

type DailyLogScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DailyLog'>;
type DailyLogScreenRouteProp = RouteProp<RootStackParamList, 'DailyLog'>;

type Props = {
    navigation: DailyLogScreenNavigationProp;
    route: DailyLogScreenRouteProp;
};

export default function DailyLogScreen({ navigation, route }: Props) {
    const { mood } = route.params; // Retrieve the mood passed from the RecoveryTrackerScreen
    const [log, setLog] = useState(''); // State for the log input

  // Placeholder function to handle saving the log
    const handleSaveLog = () => {
        console.log(`Mood: ${mood}, Log: ${log}`);
        navigation.goBack(); // Navigate back to RecoveryTrackerScreen
    };

    return (
        <View style={styles.container}>
        <Text style={styles.heading}>Daily Reflection</Text>
        <Text style={styles.moodText}>Your mood: {mood === 'happy' ? '😊' : '😞'}</Text>

      {/* Text Input for the log */}
        <TextInput
            style={styles.textInput}
            placeholder="Write your reflection here..."
            placeholderTextColor="#888"
            multiline
            value={log}
            onChangeText={setLog}
        />

      {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveLog}>
            <Text style={styles.saveButtonText}>Save Reflection</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FFF9F1',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    moodText: {
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
    },
});
