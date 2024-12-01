import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function RecoveryTrackerScreen() {
  const [progress, setProgress] = useState(75); // Example progress percentage

  const handleMoodLog = (mood: string) => {
    console.log(`Mood logged: ${mood}`);
    // Add functionality to save mood
  };

  return (
    <View style={styles.container}>
      {/* Circular Progress Bar */}
      <AnimatedCircularProgress
        size={150}
        width={15}
        fill={progress}
        tintColor="#7AA5AA"
        backgroundColor="#d3d3d3"
        style={styles.progressBar}
      >
        {() => (
          <Text style={styles.progressText}>{progress}%</Text>
        )}
      </AnimatedCircularProgress>

      {/* Next Milestone */}
      <Text style={styles.milestoneText}>Next milestone: 2 months</Text>

      {/* Sobriety Details */}
      <View style={styles.sobrietyContainer}>
        <Text style={styles.sobrietyText}>I’ve been sober for:</Text>
        <Text style={styles.sobrietyDetails}>
          Months: 1 {'\n'}
          Weeks: 2 {'\n'}
          Days: 6 {'\n'}
          Hours: 8
        </Text>
      </View>

      {/* Mood Tracking Section */}
      <Text style={styles.moodText}>How are you feeling today?</Text>
      <View style={styles.moodButtonsContainer}>
        <TouchableOpacity style={styles.moodButton} onPress={() => handleMoodLog('happy')}>
          <Text style={styles.moodEmoji}>😊</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moodButton} onPress={() => handleMoodLog('sad')}>
          <Text style={styles.moodEmoji}>😞</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F1',
    alignItems: 'center',
    padding: 16,
  },
  progressBar: {
    marginTop: 50,
  },
  progressText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7AA5AA',
  },
  milestoneText: {
    fontSize: 18,
    marginTop: 20,
    color: '#7AA5AA',
    fontWeight: '600',
  },
  sobrietyContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  sobrietyText: {
    fontSize: 16,
    fontWeight: '600',
  },
  sobrietyDetails: {
    fontSize: 14,
    marginTop: 10,
    color: '#555',
    textAlign: 'center',
  },
  moodText: {
    fontSize: 18,
    marginTop: 30,
    fontWeight: '600',
  },
  moodButtonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '60%',
  },
  moodButton: {
    backgroundColor: '#F0CF7C',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moodEmoji: {
    fontSize: 24,
  },
});
