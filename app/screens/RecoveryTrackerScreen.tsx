import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useFonts } from 'expo-font';
import { StackNavigationProp } from '@react-navigation/stack';


export default function RecoveryTrackerScreen({navigation}) {
  const [progress, setProgress] = useState(75);
  const [fontsLoaded] = useFonts({
    'Khand': require('../../assets/fonts/Khand-Regular.ttf'),
    'Khand-Medium': require('../../assets/fonts/Khand-Medium.ttf'),
    'Khand-Bold': require('../../assets/fonts/Khand-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleMoodLog = (mood: string) => {
    console.log(`Mood logged: ${mood}`);
  };

  return (
    <View style={styles.container}>
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
        <TouchableOpacity style={styles.moodButton} onPress={() => navigation.navigate('DailyLog', { mood: 'happy' })}>
          <Text style={styles.moodEmoji}>😊</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moodButton} onPress={() => navigation.navigate('DailyLog', { mood: 'sad' })}>
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
    fontFamily: 'Khand-Bold',
    fontSize: 24,
    color: '#7AA5AA',
  },
  milestoneText: {
    fontFamily: 'Khand-Medium',
    fontSize: 18,
    marginTop: 20,
    color: '#7AA5AA',
  },
  sobrietyContainer: {
    marginTop: 20,
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
    marginTop: 30,
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