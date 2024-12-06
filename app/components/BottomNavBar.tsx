import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type BottomNavBarProps = {
    navigation: any;
};

const BottomNavBar: React.FC<BottomNavBarProps> = ({ navigation }) => {
    const navItems: { name: string; icon: keyof typeof Ionicons.glyphMap }[] = [
        { name: 'Home', icon: 'home-outline' },
        { name: 'Find Help', icon: 'location-outline' },
        { name: 'Resources', icon: 'desktop-outline' },
        { name: 'Community', icon: 'people-outline' },
        { name: 'RecoveryTracker', icon: 'trending-up-outline' },
        { name: 'Events', icon: 'calendar-outline' },
    ];

    return (
        <View style={styles.bottomNav}>
            {navItems.map((item) => (
                <TouchableOpacity
                    key={item.name}
                    style={styles.navItem}
                    onPress={() => navigation.navigate(item.name)}
                >
                    <Ionicons name={item.icon} size={20} color="#303C50" />
                    <Text style={styles.navText}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default BottomNavBar;
