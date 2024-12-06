import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import BottomNavBar from '../components/BottomNavBar';

type RootStackParamList = {
    RecoveryTracker: undefined;
    DailyLog: { mood: string };
};

type Props = StackScreenProps<RootStackParamList, 'DailyLog'>;

export default function DailyLogScreen({ navigation, route }: Props) {
    const { mood } = route.params;
    const [log, setLog] = useState('');
    
    // Placeholder for past logs
    const placeholderLogs = [
        { id: 1, date: '2024-12-01', mood: '😊', text: 'Had a great day today!' },
        { id: 2, date: '2024-12-02', mood: '😞', text: 'Feeling a bit down.' },
        { id: 3, date: '2024-12-03', mood: '😊', text: 'Excited about progress!' },
    ];

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
            <ScrollView contentContainerStyle={styles.content}>
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

                {/* Section for past logs */}
                <Text style={styles.pastLogsHeading}>Past Logs</Text>
                {placeholderLogs.length > 0 ? (
                    placeholderLogs.map((log) => (
                        <View key={log.id} style={styles.logItem}>
                            <Text style={styles.logDate}>{log.date}</Text>
                            <Text style={styles.logMood}>{log.mood}</Text>
                            <Text style={styles.logText}>{log.text}</Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noLogsText}>No past logs available yet.</Text>
                )}
                {/*Navbar section*/}
                <BottomNavBar navigation={navigation} />
            </ScrollView>
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
        flexGrow: 1,
        paddingHorizontal: 20,
    },
    heading: {
        fontFamily: 'Khand-Bold',
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
        padding: 20,
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
        marginBottom: 24,
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Khand-Medium',
    },
    pastLogsHeading: {
        fontFamily: 'Khand-Bold',
        fontSize: 20,
        marginBottom: 16,
        textAlign: 'center',
    },
    logItem: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    logDate: {
        fontFamily: 'Khand-Medium',
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    logMood: {
        fontFamily: 'Khand-Medium',
        fontSize: 18,
        marginBottom: 8,
    },
    logText: {
        fontFamily: 'Khand',
        fontSize: 16,
        color: '#333',
    },
    noLogsText: {
        fontFamily: 'Khand-Medium',
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 16,
    },
});
