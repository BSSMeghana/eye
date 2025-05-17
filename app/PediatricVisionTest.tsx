import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const symbolGroups = [
  ['★', '●', '■', '♥'],
  ['♥', '✦', '◆', '♣'],
  ['⬟', '●', '◼', '◆'],
  ['▶︎', '◀︎', '▼', '▲'],
  ['+', '−', '×', '÷'],
  ['⬅︎', '⬊', '⬆︎', '⬇︎'],   // Added line 1
  ['♠', '♦', '♣', '♥'], 
];

const fontSizes = [72, 60, 48, 36, 24,  18, 14]; // decreasing sizes

export default function PediatricVisionTest() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.instruction}>
        Hold your phone at about 10 feet (3 meters) from your eyes.
      </Text>

      {symbolGroups.map((group, idx) => (
        <View key={idx} style={styles.symbolRow}>
          {group.map((symbol, i) => (
            <Text key={i} style={[styles.symbol, { fontSize: fontSizes[idx] }]}>
              {symbol}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  instruction: {
    fontSize: 16,
    marginBottom: 50,
    color: '#0a4a7d',
    textAlign: 'center',
  },
  symbolRow: {
    flexDirection: 'row',
    marginBottom: 40,
    justifyContent: 'space-around',
    width: '100%',
  },
  symbol: {
    fontWeight: 'bold',
    color: '#222',
    marginHorizontal: 10,
  },
});
