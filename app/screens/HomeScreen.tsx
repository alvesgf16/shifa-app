// import React, { useState, useEffect } from 'react';
// import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Platform, Modal } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useFonts } from 'expo-font';

// import { NavigationProp } from '@react-navigation/native';

// export default function HomeScreen({ navigation }: { navigation: NavigationProp<any> }) {
//   const [fontsLoaded] = useFonts({
//     'Khand': require('../assets/fonts/Khand-Regular.ttf'),
//     'Khand-Medium': require('../assets/fonts/Khand-Medium.ttf'),
//     'Khand-Bold': require('../assets/fonts/Khand-Bold.ttf'),
//   });

//   const [soberDays, setSoberDays] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [showCongrats, setShowCongrats] = useState(false);

//   useEffect(() => {
//     // Calculate progress based on sober days
//     const newProgress = Math.min((soberDays / 30) * 100, 100);
//     setProgress(Math.round(newProgress));

//     // Check if 30-day milestone is reached
//     if (soberDays === 30) {
//       setShowCongrats(true);
//     }
//   }, [soberDays]);

//   const handleCheckIn = () => {
//     if (soberDays < 30) {
//       setSoberDays(prevDays => prevDays + 1);
//     }
//   };

//   const handleStartNewChallenge = () => {
//     setSoberDays(0);
//     setProgress(0);
//     setShowCongrats(false);
//   };

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Recovery Connect</Text>
//           <View style={styles.headerIcons}>
//             <TouchableOpacity>
//               <Ionicons name="notifications-outline" size={24} color="#303C50" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.menuButton}>
//               <Ionicons name="menu-outline" size={24} color="#303C50" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Progress Card */}
//         <View style={styles.card}>
//           <Text style={styles.welcomeText}>Welcome Back, Alex</Text>
//           <Text style={styles.subText}>Here's your recovery progress</Text>
//           <Text style={styles.soberDays}>{soberDays} days sober</Text>
//           <View style={styles.progressBar}>
//             <View style={[styles.progressFill, { width: `${progress}%` }]} />
//           </View>
//           <Text style={styles.progressText}>{progress}% towards your 30-day goal</Text>
//           <TouchableOpacity 
//             style={styles.checkInButton} 
//             onPress={handleCheckIn}
//             disabled={soberDays === 30}
//           >
//             <Text style={styles.checkInText}>
//               {soberDays === 30 ? 'Challenge Complete!' : 'Check In'}
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* Navigation Grid */}
//         <View style={styles.grid}>
//           <View style={styles.row}>
//             <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('FindHelp')}>
//               <Ionicons name="location-outline" size={24} color="#FFFFFF" />
//               <Text style={styles.buttonText}>Find Help</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('Resources')}>
//               <Ionicons name="desktop-outline" size={24} color="#FFFFFF" />
//               <Text style={styles.buttonText}>Resources</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.row}>
//             <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('Community')}>
//               <Ionicons name="people-outline" size={24} color="#FFFFFF" />
//               <Text style={styles.buttonText}>Community</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('RecoveryTracker')}>
//               <Ionicons name="trending-up-outline" size={24} color="#FFFFFF" />
//               <Text style={styles.buttonText}>My Progress</Text>
//             </TouchableOpacity>
//           </View>
//           <TouchableOpacity style={styles.eventsButton} onPress={() => navigation.navigate('Events')}>
//             <Ionicons name="calendar-outline" size={24} color="#FFFFFF" />
//             <Text style={styles.buttonText}>Events</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Support Group Card */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Upcoming Support Group</Text>
//           <Text style={styles.groupTitle}>Overcoming Challenges</Text>
//           <Text style={styles.timeText}>Today, 7:00 PM</Text>
//           <TouchableOpacity style={styles.joinButton}>
//             <Text style={styles.joinButtonText}>Join Meeting</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Bottom Navigation */}
//         <View style={styles.bottomNav}>
//           {['Home', 'Find Help', 'Resources', 'Community', 'RecoveryTracker', 'Events'].map((item, index) => (
//             <TouchableOpacity 
//               key={item} 
//               style={styles.navItem}
//               onPress={() => navigation.navigate(item)}
//             >
//               <Ionicons 
//                 name={
//                   index === 0 ? 'home-outline' :
//                   index === 1 ? 'location-outline' :
//                   index === 2 ? 'desktop-outline' :
//                   index === 3 ? 'people-outline' :
//                   index === 4 ? 'trending-up-outline' :
//                   'calendar-outline'
//                 } 
//                 size={20} 
//                 color="#303C50" 
//               />
//               <Text style={styles.navText}>{item}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>

//       {/* Congratulatory Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={showCongrats}
//         onRequestClose={() => setShowCongrats(false)}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalTitle}>Congratulations!</Text>
//             <Text style={styles.modalText}>You've completed the 30-day challenge!</Text>
//             <TouchableOpacity
//               style={[styles.button, styles.buttonClose]}
//               onPress={handleStartNewChallenge}
//             >
//               <Text style={styles.textStyle}>Start New Challenge</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF9F1',
//   },
//   scrollContent: {
//     padding: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   headerTitle: {
//     fontFamily: 'Khand-Bold',
//     fontSize: 24,
//     color: '#303C50',
//   },
//   headerIcons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 16,
//   },
//   menuButton: {
//     backgroundColor: '#F0CF7C',
//     padding: 8,
//     borderRadius: 4,
//   },
//   card: {
//     backgroundColor: '#bdd2d5',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 20,
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//       },
//       android: {
//         elevation: 4,
//       },
//     }),
//   },
//   welcomeText: {
//     fontFamily: 'Khand-Bold',
//     fontSize: 24,
//     color: '#303C50',
//     marginBottom: 4,
//   },
//   subText: {
//     fontFamily: 'Khand',
//     fontSize: 16,
//     color: '#303C50',
//     opacity: 1,
//     marginBottom: 12,
//   },
//   soberDays: {
//     fontFamily: 'Khand-Bold',
//     fontSize: 20,
//     color: '#303C50',
//     marginBottom: 8,
//   },
//   progressBar: {
//     height: 13,
//     backgroundColor: '#303C50',
//     opacity: 200,
//     borderRadius: 4,
//     marginBottom: 8,
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: '#F2D489',
//     borderRadius: 4,
//   },
//   progressText: {
//     fontFamily: 'Khand',
//     fontSize: 14,
//     color: '#303C50',
//     opacity: 1,
//     marginBottom: 16,
//   },
//   checkInButton: {
//     backgroundColor: '#303C50',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   checkInText: {
//     fontFamily: 'Khand-Medium',
//     fontSize: 16,
//     color: '#FFFFFF',
//   },
//   grid: {
//     marginBottom: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     gap: 16,
//     marginBottom: 16,
//   },
//   gridButton: {
//     flex: 1,
//     backgroundColor: '#303C50',
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//   },
//   eventsButton: {
//     backgroundColor: '#303C50',
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     gap: 8,
//   },
//   buttonText: {
//     fontFamily: 'Khand-Medium',
//     fontSize: 16,
//     color: '#FFFFFF',
//     marginTop: 8,
//   },
//   cardTitle: {
//     fontFamily: 'Khand-Bold',
//     fontSize: 20,
//     color: '#303C50',
//     marginBottom: 12,
//   },
//   groupTitle: {
//     fontFamily: 'Khand-Medium',
//     fontSize: 18,
//     color: '#303C50',
//     marginBottom: 4,
//     opacity: 2
//   },
//   timeText: {
//     fontFamily: 'Khand',
//     fontSize: 14,
//     color: '#303C50',
//     opacity: 1,
//     marginBottom: 16,
//   },
//   joinButton: {
//     backgroundColor: '#303C50',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   joinButtonText: {
//     fontFamily: 'Khand-Medium',
//     fontSize: 16,
//     color: '#FFFFFF',
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 8,
//     borderTopWidth: 1,
//     borderTopColor: '#F0CF7C',
//     backgroundColor: '#FFF9F1',
//   },
//   navItem: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   navText: {
//     fontFamily: 'Khand',
//     fontSize: 12,
//     color: '#303C50',
//     marginTop: 4,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: '#FFF9F1',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   modalTitle: {
//     fontFamily: 'Khand-Bold',
//     fontSize: 24,
//     marginBottom: 15,
//     textAlign: 'center',
//     color: '#303C50',
//   },
//   modalText: {
//     fontFamily: 'Khand',
//     fontSize: 18,
//     marginBottom: 15,
//     textAlign: 'center',
//     color: '#303C50',
//   },
//   button: {
//     borderRadius: 8,
//     padding: 10,
//     elevation: 2
//   },
//   buttonClose: {
//     backgroundColor: '#F0CF7C',
//   },
//   textStyle: {
//     fontFamily: 'Khand-Medium',
//     color: '#303C50',
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },
// });


import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Platform, Modal, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Khand': require('../assets/fonts/Khand-Regular.ttf'),
    'Khand-Medium': require('../assets/fonts/Khand-Medium.ttf'),
    'Khand-Bold': require('../assets/fonts/Khand-Bold.ttf'),
  });

  const [soberDays, setSoberDays] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const slideAnim = useRef(new Animated.Value(400)).current;

  useEffect(() => {
    // Calculate progress based on sober days
    const newProgress = Math.min((soberDays / 30) * 100, 100);
    setProgress(Math.round(newProgress));

    // Check if 30-day milestone is reached
    if (soberDays === 30) {
      setShowCongrats(true);
    }
  }, [soberDays]);

  const handleCheckIn = () => {
    if (soberDays < 30) {
      setSoberDays(prevDays => prevDays + 1);
    }
  };

  const handleStartNewChallenge = () => {
    setSoberDays(0);
    setProgress(0);
    setShowCongrats(false);
  };

  const showMenuAnimation = () => {
    setShowMenu(true);
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const hideMenuAnimation = () => {
    Animated.spring(slideAnim, {
      toValue: 400,
      useNativeDriver: true,
    }).start(() => setShowMenu(false));
  };

  const handleLogout = () => {
    hideMenuAnimation();
    // Add your logout logic here
    navigation.navigate('Login');
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Recovery Connect</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="#303C50" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton} onPress={showMenuAnimation}>
              <Ionicons name="menu-outline" size={24} color="#303C50" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Progress Card */}
        <View style={styles.card}>
          <Text style={styles.welcomeText}>Welcome Back, Alex</Text>
          <Text style={styles.subText}>Here's your recovery progress</Text>
          <Text style={styles.soberDays}>{soberDays} days sober</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
          <Text style={styles.progressText}>{progress}% towards your 30-day goal</Text>
          <TouchableOpacity 
            style={styles.checkInButton} 
            onPress={handleCheckIn}
            disabled={soberDays === 30}
          >
            <Text style={styles.checkInText}>
              {soberDays === 30 ? 'Challenge Complete!' : 'Check In'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Navigation Grid */}
        <View style={styles.grid}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('FindHelp')}>
              <Ionicons name="location-outline" size={24} color="#FFFFFF" />
              <Text style={styles.buttonText}>Find Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('Resources')}>
              <Ionicons name="desktop-outline" size={24} color="#FFFFFF" />
              <Text style={styles.buttonText}>Resources</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('Community')}>
              <Ionicons name="people-outline" size={24} color="#FFFFFF" />
              <Text style={styles.buttonText}>Community</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('RecoveryTracker')}>
              <Ionicons name="trending-up-outline" size={24} color="#FFFFFF" />
              <Text style={styles.buttonText}>My Progress</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.eventsButton} onPress={() => navigation.navigate('Events')}>
            <Ionicons name="calendar-outline" size={24} color="#FFFFFF" />
            <Text style={styles.buttonText}>Events</Text>
          </TouchableOpacity>
        </View>

        {/* Support Group Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Upcoming Support Group</Text>
          <Text style={styles.groupTitle}>Overcoming Challenges</Text>
          <Text style={styles.timeText}>Today, 7:00 PM</Text>
          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join Meeting</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          {['Home', 'Find Help', 'Resources', 'Community', 'RecoveryTracker', 'Events'].map((item, index) => (
            <TouchableOpacity 
              key={item} 
              style={styles.navItem}
              onPress={() => navigation.navigate(item)}
            >
              <Ionicons 
                name={
                  index === 0 ? 'home-outline' :
                  index === 1 ? 'location-outline' :
                  index === 2 ? 'desktop-outline' :
                  index === 3 ? 'people-outline' :
                  index === 4 ? 'trending-up-outline' :
                  'calendar-outline'
                } 
                size={20} 
                color="#303C50" 
              />
              <Text style={styles.navText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Menu Modal */}
      <Modal
        animationType="none"
        transparent={true}
        visible={showMenu}
        onRequestClose={hideMenuAnimation}
      >
        <View style={styles.menuOverlay}>
          <Animated.View 
            style={[
              styles.menuContent,
              {
                transform: [{ translateX: slideAnim }]
              }
            ]}
          >
            <View style={styles.menuHeader}>
              <Text style={styles.menuTitle}>Menu</Text>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={hideMenuAnimation}
              >
                <Ionicons name="close" size={24} color="#303C50" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={() => {
                hideMenuAnimation();
                navigation.navigate('Profile');
              }}
            >
              <Ionicons name="person-outline" size={24} color="#FFF9F1" />
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.menuItemText}>Profile</Text>
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                hideMenuAnimation();
                navigation.navigate('Support');
              }}
            >
              <Ionicons name="help-circle-outline" size={24} color="#FFF9F1" />
              <Text style={styles.menuItemText}>Support</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                hideMenuAnimation();
                navigation.navigate('PrivacyPolicy');
              }}
            >
              <Text style={styles.menuLinkText}>Privacy Policy</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                hideMenuAnimation();
                navigation.navigate('Terms');
              }}
            >
              <Text style={styles.menuLinkText}>Terms of Service</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <Text style={styles.logoutText}>→ Logout</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>

      {/* Congratulatory Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showCongrats}
        onRequestClose={() => setShowCongrats(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Congratulations!</Text>
            <Text style={styles.modalText}>You've completed the 30-day challenge!</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={handleStartNewChallenge}
            >
              <Text style={styles.textStyle}>Start New Challenge</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F1',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontFamily: 'Khand-Bold',
    fontSize: 24,
    color: '#303C50',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  menuButton: {
    backgroundColor: '#F0CF7C',
    padding: 8,
    borderRadius: 4,
  },
  card: {
    backgroundColor: '#bdd2d5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  welcomeText: {
    fontFamily: 'Khand-Bold',
    fontSize: 24,
    color: '#303C50',
    marginBottom: 4,
  },
  subText: {
    fontFamily: 'Khand',
    fontSize: 16,
    color: '#303C50',
    opacity: 1,
    marginBottom: 12,
  },
  soberDays: {
    fontFamily: 'Khand-Bold',
    fontSize: 20,
    color: '#303C50',
    marginBottom: 8,
  },
  progressBar: {
    height: 13,
    backgroundColor: '#303C50',
    opacity: 200,
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#F2D489',
    borderRadius: 4,
  },
  progressText: {
    fontFamily: 'Khand',
    fontSize: 14,
    color: '#303C50',
    opacity: 1,
    marginBottom: 16,
  },
  checkInButton: {
    backgroundColor: '#303C50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkInText: {
    fontFamily: 'Khand-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  grid: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  gridButton: {
    flex: 1,
    backgroundColor: '#303C50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  eventsButton: {
    backgroundColor: '#303C50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  buttonText: {
    fontFamily: 'Khand-Medium',
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 8,
  },
  cardTitle: {
    fontFamily: 'Khand-Bold',
    fontSize: 20,
    color: '#303C50',
    marginBottom: 12,
  },
  groupTitle: {
    fontFamily: 'Khand-Medium',
    fontSize: 18,
    color: '#303C50',
    marginBottom: 4,
    opacity: 2
  },
  timeText: {
    fontFamily: 'Khand',
    fontSize: 14,
    color: '#303C50',
    opacity: 1,
    marginBottom: 16,
  },
  joinButton: {
    backgroundColor: '#303C50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  joinButtonText: {
    fontFamily: 'Khand-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#F0CF7C',
    backgroundColor: '#FFF9F1',
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navText: {
    fontFamily: 'Khand',
    fontSize: 12,
    color: '#303C50',
    marginTop: 4,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#FFF9F1',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle: {
    fontFamily: 'Khand-Bold',
    fontSize: 24,
    marginBottom: 15,
    textAlign: 'center',
    color: '#303C50',
  },
  modalText: {
    fontFamily: 'Khand',
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
    color: '#303C50',
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: '#F0CF7C',
  },
  textStyle: {
    fontFamily: 'Khand-Medium',
    color: '#303C50',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContent: {
    position: 'absolute',
    right: 0,
    width: '75%',
    height: '100%',
    backgroundColor: '#303C50',
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  menuTitle: {
    fontFamily: 'Khand-Bold',
    fontSize: 24,
    color: '#FFF9F1',
  },
  closeButton: {
    backgroundColor: '#F0CF7C',
    borderRadius: 4,
    padding: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  menuItemText: {
    fontFamily: 'Khand-Medium',
    fontSize: 18,
    color: '#FFF9F1',
  },
  menuLinkText: {
    fontFamily: 'Khand',
    fontSize: 16,
    color: '#FFF9F1',
    opacity: 0.8,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    paddingVertical: 12,
  },
  logoutText: {
    fontFamily: 'Khand-Medium',
    fontSize: 18,
    color: '#FF4444',
  },
});