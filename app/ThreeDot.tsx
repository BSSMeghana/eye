import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // ✅ Required for navigation
import { colors } from '../constants/theme';
import styles from './styles/ThreeDotStyles';

export default function ThreeDotMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter(); // ✅ Initialize router

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
        <MaterialCommunityIcons name="dots-vertical" size={28} color={colors.primary} />
      </TouchableOpacity>

      {showMenu && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setShowMenu(false);
              router.push('/About'); 
            }}
          >
            <Text style={styles.menuItemText}>About App</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setShowMenu(false);
              router.push('/Information'); 
            }}
          >
            <Text style={styles.menuItemText}>Information</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
