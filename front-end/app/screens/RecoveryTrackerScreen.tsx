import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import BottomNavBar from '../components/BottomNavBar';

export default function RecoveryTrackerScreen({ navigation }: any) {
    const [progress, setProgress] = useState(75);

    const handleMoodLog = (mood: string) => {
        console.log(`Mood logged: ${mood}`);
        navigation.navigate('DailyLog', { mood });
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <AnimatedCircularProgress
                    size={150}
                    width={15}
                    fill={progress}
                    tintColor="#7AA5AA"
                    backgroundColor="#d3d3d3"
                    style={styles.progressBar}
                >
                    {() => <Text style={styles.progressText}>{progress}%</Text>}
                </AnimatedCircularProgress>

                <Text style={styles.milestoneText}>Next milestone: 2 months</Text>

                <View style={styles.sobrietyContainer}>
                    <Text style={styles.sobrietyText}>I've been sober for:</Text>
                    <Text style={styles.sobrietyDetails}>
                        Months: 1 {'\n'}
                        Weeks: 2 {'\n'}
                        Days: 6 {'\n'}
                        Hours: 8
                    </Text>
                </View>

                <Text style={styles.moodText}>How are you feeling today?</Text>
                <View style={styles.moodButtonsContainer}>
                    <TouchableOpacity
                        style={styles.moodButton}
                        onPress={() => handleMoodLog('happy')}
                    >
                        <Text style={styles.moodEmoji}>😊</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.moodButton}
                        onPress={() => handleMoodLog('sad')}
                    >
                        <Text style={styles.moodEmoji}>😞</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <BottomNavBar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF9F1',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    progressBar: {
        marginBottom: 24,
    },
    progressText: {
        fontFamily: 'Khand-Bold',
        fontSize: 24,
        color: '#7AA5AA',
    },
    milestoneText: {
        fontFamily: 'Khand-Medium',
        fontSize: 18,
        color: '#7AA5AA',
        marginBottom: 24,
    },
    sobrietyContainer: {
        marginBottom: 32,
        alignItems: 'center',
    },
    sobrietyText: {
        fontFamily: 'Khand-Medium',
        fontSize: 16,
    },
    sobrietyDetails: {
        fontFamily: 'Khand',
        fontSize: 14,
        marginTop: 10,
        color: '#555',
        textAlign: 'center',
    },
    moodText: {
        fontFamily: 'Khand-Medium',
        fontSize: 18,
        marginBottom: 16,
        color: '#303C50',
    },
    moodButtonsContainer: {
        flexDirection: 'row',
        gap: 16,
    },
    moodButton: {
        backgroundColor: '#F0CF7C',
        borderRadius: 50,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    moodEmoji: {
        fontSize: 24,
    },
});
