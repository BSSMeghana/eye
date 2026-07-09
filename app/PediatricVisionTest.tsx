import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import BackChevron from '../components/BackChevron';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import styles from './styles/PediatricVisionTestStyles';

const symbolGroups = [
  ['★', '●', '■', '♥︎'],
  ['♥︎', '◼︎', '♦︎', '✕'],
  ['⬟', '●', '◼', '◆'],
  ['▶︎', '◀︎', '▼', '▲'],
  ['+', '−', '×', '÷'],
  ['⬅︎', '⬊', '⬆︎', '⬇︎'],   // Added line 1
  ['♠', '♦︎', '♣', '♥︎'], 
];

const fontSizes = [72, 60, 48, 36, 24,  18, 14]; // decreasing sizes

export default function PediatricVisionTest() {
  const router = useRouter();
  const { contentMaxWidth, contentWidth, isTiny, screenPadding } = useResponsiveLayout();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {
          paddingBottom: isTiny ? 112 : 128,
          paddingHorizontal: screenPadding,
          paddingTop: isTiny ? 66 : 76,
        },
      ]}
    >
      <BackChevron
        onPress={() => router.back()}
        style={{ left: screenPadding, position: 'absolute', top: isTiny ? 10 : 16 }}
      />
      <View style={{ maxWidth: contentMaxWidth, width: '100%' }}>
      <Text style={styles.instruction}>
        Hold your phone at about 10 feet (3 meters) from your eyes.
      </Text>

      {symbolGroups.map((group, idx) => (
        <View key={idx} style={styles.symbolRow}>
          {group.map((symbol, i) => (
            <Text key={i} style={[styles.symbol, { fontSize: Math.min(fontSizes[idx], contentWidth / (isTiny ? 5.2 : 4.7)) }]}>
              {symbol}
            </Text>
          ))}
        </View>
      ))}
      </View>
    </ScrollView>
  );
}
