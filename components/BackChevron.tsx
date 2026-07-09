import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { colors, radius } from '../constants/theme';

interface BackChevronProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export default function BackChevron({ onPress, style }: BackChevronProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.72}
      accessibilityLabel="Go back"
      accessibilityRole="button"
      hitSlop={8}
      onPress={onPress}
      style={[styles.button, style]}
    >
      <Ionicons name="chevron-back" size={25} color={colors.primary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    elevation: 2,
    height: 44,
    justifyContent: 'center',
  },
});
